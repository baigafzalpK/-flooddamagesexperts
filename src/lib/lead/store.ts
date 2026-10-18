import { createHmac } from "crypto";
import { appendFile, mkdir } from "fs/promises";
import { join } from "path";
import type { LeadInput } from "./schema";
import { saltedIpHash } from "./rateLimit";

/**
 * Lead delivery: signed webhook → DB → (dev only) .data/leads.jsonl.
 * Production with no destination refuses leads (503).
 * Logs contain metadata only, never PII.
 */
export interface StoredLead extends Record<string, unknown> {
  receivedAt: string;
  ipHash: string;
  userAgent: string;
}

export async function storeLead(
  lead: LeadInput,
  meta: { ip: string; userAgent: string }
): Promise<{ delivered: boolean; destination: string }> {
  const stored: StoredLead = {
    ...lead,
    website: undefined, // never persist the honeypot
    receivedAt: new Date().toISOString(),
    ipHash: saltedIpHash(meta.ip),
    userAgent: meta.userAgent.slice(0, 200),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET;

  if (webhookUrl && webhookSecret) {
    const body = JSON.stringify(stored);
    const sig = createHmac("sha256", webhookSecret).update(body).digest("hex");
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-lead-signature": sig,
      },
      body,
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    console.log(
      JSON.stringify({
        event: "lead_delivered",
        destination: "webhook",
        service: lead.service,
        zip: lead.zip,
        at: stored.receivedAt,
      })
    );
    return { delivered: true, destination: "webhook" };
  }

  if (process.env.DATABASE_URL) {
    // Wire up Prisma here (see prisma/schema.prisma).
    throw new Error("DATABASE_URL set but Prisma store not wired");
  }

  if (process.env.NODE_ENV === "production") {
    return { delivered: false, destination: "none" };
  }

  const dir = join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, "leads.jsonl"), JSON.stringify(stored) + "\n");
  console.log(
    JSON.stringify({
      event: "lead_delivered",
      destination: "dev-file",
      service: lead.service,
      zip: lead.zip,
      at: stored.receivedAt,
    })
  );
  return { delivered: true, destination: "dev-file" };
}
