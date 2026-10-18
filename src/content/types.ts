/**
 * Content model for BrushWell Painting.
 * ALL business content is typed data here — the "CMS".
 * Mirrors prisma/schema.prisma for a later move to a database.
 */

export type Status = "DRAFT" | "REVIEW" | "PUBLISHED" | "NOINDEX" | "ARCHIVED";

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  blurb: string;
  photo?: string;
}

export interface Service {
  slug: string;
  name: string;
  category: string; // ServiceCategory.slug
  status: Status;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** Direct 1–3 sentence answer, shown first (AEO). */
  answer: string;
  intro: string[];
  signs: { title: string; body: string }[];
  process: { title: string; body: string }[];
  costFactors: string[];
  diy?: { safe: string[]; stop: string[] };
  faqs: Faq[];
  related: string[]; // service slugs
  /** Painting rarely has emergencies; timeline routing instead. */
  timelineOptions: string[];
  photo?: string;
  updated: string; // ISO date
}

export interface StateInfo {
  slug: string;
  name: string;
  abbr: string;
  intro: string[];
  details: {
    housing: string;
    climate: string;
    permits: string;
  };
  updated: string;
}

export interface City {
  slug: string;
  stateSlug: string;
  county: string;
  status: Status;
  zips: string[];
  /** Programmatic cities: number of covered ZIPs (actual ZIP list unknown). */
  zipCount?: number;
  /** Programmatic cities: dataset population (0 when unknown). */
  population?: number;
  /** Programmatic cities: coverage rank within the state. */
  stateRank?: number;
  areas: string[]; // neighborhoods / districts
  intro: string[];
  housingNotes: string[];
  localIssues: { title: string; body: string }[];
  popularServices: string[]; // service slugs
  nearby: string[]; // city slugs
  faqs: Faq[];
  updated: string;
}

export interface CityService {
  citySlug: string;
  serviceSlug: string;
  status: Status;
  localAngle: string[];
  localFaqs: Faq[];
  updated: string;
}

export interface ArticleSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  status: Status;
  seoTitle: string;
  metaDescription: string;
  /** Short direct answer box. */
  answer: string;
  sections: ArticleSection[];
  services: string[]; // related service slugs
  relatedArticles: string[];
  /** Optional guide FAQs — rendered visibly with FAQPage markup. */
  faqs?: Faq[];
  editorialNote?: string;
  photo?: string;
  published: string;
  updated: string;
  reviewedBy: string | null;
}

export interface Problem {
  slug: string;
  symptom: string;
  cause: string;
  serviceSlug: string;
  guideSlug?: string;
  urgency: "low" | "medium" | "high";
}

export interface Review {
  author: string;
  location: string;
  rating: number; // 1-5
  date: string;
  text: string;
  source: string; // e.g. "Google"
  verified: boolean;
}

export interface BeforeAfter {
  slug: string;
  title: string;
  serviceSlug: string;
  beforePhoto: string;
  afterPhoto: string;
  caption: string;
  /** Stock pairs must be labeled as examples, never "our work". */
  isExample: boolean;
}

export interface LandingPage {
  slug: string;
  serviceSlug: string;
  headline: string;
  subhead: string;
  bullets: string[];
  faqs: Faq[];
  /** Whitelisted ?kw= headline swaps. */
  kwWhitelist: string[];
}
