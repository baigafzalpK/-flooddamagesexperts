import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCityByState,
  publishedCities,
  isBulkCity,
  bulkLabel,
  cityLabel,
} from "@/content";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { cityQuality, bulkCityQuality } from "@/lib/quality";
import { CityTemplate } from "@/components/templates/CityTemplate";
import { BulkCityTemplate } from "@/components/templates/BulkCityTemplate";

export const dynamicParams = false;

function cityOk(state: string, slug: string): boolean {
  const city = getCityByState(state, slug);
  if (!city || city.status !== "PUBLISHED") return false;
  return isBulkCity(state, slug)
    ? bulkCityQuality(city).ok
    : cityQuality(city).ok;
}

export function generateStaticParams() {
  return publishedCities
    .filter((c) => cityOk(c.stateSlug, c.slug))
    .map((c) => ({ state: c.stateSlug, city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state, city: slug } = await params;
  const city = getCityByState(state, slug);
  if (!city || !cityOk(state, slug)) return {};
  const bulk = isBulkCity(state, slug);
  const label = bulk ? bulkLabel(city) : cityLabel(city);
  const meta = pageMeta({
    title: `Water Damage Restoration in ${label} | Flood Damages Experts`,
    description: bulk
      ? `Water damage restoration in ${label}: local contractors serving ${city.zipCount} ZIP codes. Fast extraction, thorough drying, clear written plan.`
      : `Water damage restoration in ${label}: local notes on housing and what contractors see most. Clear written plans from independent licensed contractors.`,
    path: routes.city(state, slug),
    ogImageKey: bulk ? "city-bulk" : `city-${slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city: slug } = await params;
  const city = getCityByState(state, slug);
  if (!city || !cityOk(state, slug)) notFound();
  return isBulkCity(state, slug) ? (
    <BulkCityTemplate city={city} />
  ) : (
    <CityTemplate city={city} />
  );
}
