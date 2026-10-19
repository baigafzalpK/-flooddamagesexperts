/**
 * Site-wide facts for BayouDry Restoration.
 *
 * Env-driven per playbook A4: unset values fall back to safe placeholders
 * or are hidden. The temporary 555 phone number is FICTIONAL (555-01xx range)
 * and MUST NEVER appear in JSON-LD schema or any structured data.
 */

export const site = {
  name: "Flood Damages Experts",
  shortName: "Flood Damages Experts",
  tagline: "Fast, honest water & flood damage restoration across 1,200+ cities nationwide.",
  market: "Nationwide & Regional Hubs",
  stateAbbr: "TX",
  phoneDisplay: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(713) 555-0148",
  phoneE164: process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "+17135550148",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@flooddamagesexperts.com",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "24/7 Emergency Response",
  license: process.env.NEXT_PUBLIC_LICENSE_NUMBER || "",
  officeAddress: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "",
  emergency247: process.env.NEXT_PUBLIC_EMERGENCY_24_7 === "true",
  reviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",
  profileUrl: process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL || "",
};

export const BRAND_PROMISE =
  "A fast, straight answer on your water damage — and a local restoration specialist who handles the drying and repairs.";

export const DISCLOSURE =
  "Flood Damages Experts connects property owners with independent water-damage restoration contractors. " +
  "The contractors who respond are independent businesses who perform the work, set their own prices, " +
  "and are responsible for their own licensing and insurance. " +
  "By requesting help, you agree your details may be shared with up to three contractors.";

export const TEMP_PHONE_NOTE =
  "Temporary placeholder number — replace with the LeadSmart number before launch.";
