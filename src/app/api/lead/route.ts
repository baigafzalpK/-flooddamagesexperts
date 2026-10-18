import { NextRequest, NextResponse } from "next/server";
import { leadSchema, MIN_FILL_MS, MAX_BODY_BYTES } from "@/lib/lead/schema";
import { rateLimit, saltedIpHash } from "@/lib/lead/rateLimit";
import { storeLead } from "@/lib/lead/store";

/**
 * POST /api/lead — JSON only, same-origin, rate-limited, Zod-validated.
 * Honeypot or too-fast submissions get a silent 200.
 */
export async function POST(req: NextRequest) {
  // Same-origin check
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin) {
    try {
      const o = new URL(origin);
      if (o.host !== host) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // Body size guard
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot on the RAW body — before validation, so a filled trap
  // never fails Zod and always gets a silent 200.
  if (
    body &&
    typeof body === "object" &&
    typeof (body as Record<string, unknown>).website === "string" &&
    ((body as Record<string, unknown>).website as string).length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields." },
      { status: 422 }
    );
  }
  const lead = parsed.data;

  // Too-fast submissions get a silent 200 (don't tip off bots)
  const tooFast = Date.now() - lead.startedAt < MIN_FILL_MS;
  if (tooFast) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const rl = rateLimit(saltedIpHash(ip));
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests — please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter ?? 60) } }
    );
  }

  try {
    const result = await storeLead(lead, {
      ip,
      userAgent: req.headers.get("user-agent") ?? "",
    });
    if (!result.delivered) {
      return NextResponse.json(
        { error: "Our request line is down right now — please call us instead." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(JSON.stringify({ event: "lead_store_failed", err: String(err) }));
    return NextResponse.json(
      { error: "Something went wrong — please call us instead." },
      { status: 500 }
    );
  }
}
