import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryGrid } from "@/components/category-grid";
import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { categories, categoryMap, projectMap, type CategorySlug } from "@/lib/site-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap.get(slug as CategorySlug);
  if (!category) return {};

  const title = `${category.title} | Better Films`;
  const description = `${category.tagline} Conheça os trabalhos de ${category.title.toLowerCase()} dirigidos pela Better Films.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: category.cover.src, alt: category.cover.alt }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categoryMap.get(slug as CategorySlug);
  if (!category) notFound();

  const categoryProjects = category.projectSlugs.flatMap((projectSlug) => {
    const item = projectMap.get(projectSlug);
    return item ? [item] : [];
  });

  return (
    <main className="category-page">
      <SiteHeader />
      <section className="category-hero content-wrap">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: category.title }]} />
        <h1>{category.title}</h1>
      </section>

      <div className="content-wrap category-projects">
        <CategoryGrid projects={categoryProjects} />
      </div>

      <SiteFooter />
    </main>
  );
}
