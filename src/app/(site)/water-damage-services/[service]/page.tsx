import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, publishedServices } from "@/content";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || service.status !== "PUBLISHED") return {};
  const meta = pageMeta({
    title: service.seoTitle,
    description: service.metaDescription,
    path: routes.service(service.slug),
    ogImageKey: `service-${service.slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      images: [{ url: meta.ogImage }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || service.status !== "PUBLISHED") notFound();
  return <ServiceTemplate service={service} />;
}
