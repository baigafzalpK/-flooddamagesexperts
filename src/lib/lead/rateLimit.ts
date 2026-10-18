import { createHash } from "crypto";

/**
 * In-memory sliding-window rate limiter (per salted IP hash).
 * Move to Redis/Upstash for serverless production (see playbook B11).
 */
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function salt(): string {
  return process.env.LEAD_WEBHOOK_SECRET || "dev-salt-change-me";
}

export function saltedIpHash(ip: string): string {
  return createHash("sha256").update(`${salt()}:${ip}`).digest("hex");
}

export function rateLimit(ipHash: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const arr = (hits.get(ipHash) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_HITS) {
    const retryAfter = Math.ceil((arr[0] + WINDOW_MS - now) / 1000);
    return { ok: false, retryAfter };
  }
  arr.push(now);
  hits.set(ipHash, arr);
  return { ok: true };
}
