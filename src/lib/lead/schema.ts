import { z } from "zod";

/**
 * Lead payload validation — client + server share this.
 * Painting uses timeline routing instead of an emergency path.
 */
export const leadSchema = z.object({
  service: z.string().min(1, "Choose a project type"),
  timeline: z.enum(["asap", "month", "planning"], {
    errorMap: () => ({ message: "Choose a timeline" }),
  }),
  zip: z
    .string()
    .regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  name: z
    .string()
    .min(2, "Enter your name")
    .max(80)
    .regex(/^[^<>]*$/, "Invalid characters"),
  phone: z
    .string()
    .regex(
      /^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Enter a valid US phone number"
    ),
  email: z
    .string()
    .email("Enter a valid email")
    .max(120)
    .optional()
    .or(z.literal("")),
  contactMethod: z.enum(["call", "text", "email"]).default("call"),
  notes: z.string().max(1000).regex(/^[^<>]*$/, "Invalid characters").optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please agree so a specialist can contact you",
    }),
  }),
  // anti-spam
  website: z.string().max(0).optional(), // honeypot — must stay empty
  startedAt: z.number(),
  // attribution
  utm_source: z.string().max(100).optional().or(z.literal("")),
  utm_medium: z.string().max(100).optional().or(z.literal("")),
  utm_campaign: z.string().max(100).optional().or(z.literal("")),
  gclid: z.string().max(100).optional().or(z.literal("")),
  landingPage: z.string().max(200).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

/** Minimum form fill time (ms) — faster = bot. */
export const MIN_FILL_MS = 2500;
/** Max JSON body size. */
export const MAX_BODY_BYTES = 10 * 1024;
