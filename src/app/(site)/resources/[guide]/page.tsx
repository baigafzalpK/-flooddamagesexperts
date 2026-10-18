import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, publishedArticles } from "@/content";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { GuideTemplate } from "@/components/templates/GuideTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedArticles.map((a) => ({ guide: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  const { guide: slug } = await params;
  const article = getArticle(slug);
  if (!article || article.status !== "PUBLISHED") return {};
  const meta = pageMeta({
    title: article.seoTitle,
    description: article.metaDescription,
    path: routes.guide(slug),
    ogImageKey: `guide-${slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide: slug } = await params;
  const article = getArticle(slug);
  if (!article || article.status !== "PUBLISHED") notFound();
  return <GuideTemplate article={article} />;
}
