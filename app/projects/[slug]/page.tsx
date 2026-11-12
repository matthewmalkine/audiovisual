import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { FramerImage } from "@/components/site-media";
import { categoryMap, projectMap, projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMap.get(slug);
  if (!project) return {};
  const title = `${project.title} para ${project.client} | Better Films`;

  return {
    title,
    description: project.seoDescription,
    openGraph: {
      title,
      description: project.seoDescription,
      type: "video.other",
      videos: [{ url: project.video, type: "video/mp4" }],
      images: [{ url: project.gallery[0].src, alt: project.gallery[0].alt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectMap.get(slug);
  if (!project) notFound();

  const category = categoryMap.get(project.category);
  if (!category) notFound();

  const nextHref = project.nextExternalUrl ?? `/projects/${project.nextSlug}`;
  const descriptionSentences = project.description.match(/[^.!?]+[.!?]+/g) ?? [project.description];
  const descriptionLead = descriptionSentences[0]?.trim();
  const descriptionRest = descriptionSentences.slice(1).join(" ").trim();

  return (
    <main className="project-page">
      <SiteHeader />

      <section className="project-hero content-wrap">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: category.title, href: `/categories/${category.slug}` },
            { label: project.title },
          ]}
        />
        <div className="project-heading">
          <h1>{project.title}</h1>
        </div>
        <div className="project-video">
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`${project.title} — ${project.client}`}
          />
        </div>
      </section>

      <section className="project-story content-wrap" aria-labelledby="story-title">
        <div className="project-story__main">
          <p id="story-title" className="micro-label story-kicker">
            A história
          </p>
          <div className="project-story__description">
            <p>{descriptionLead}</p>
            {descriptionRest ? <p>{descriptionRest}</p> : null}
          </div>
        </div>
        <dl className="project-story__details">
          <div>
            <dt>Cliente</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Ano</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Entregas</dt>
            <dd>{project.deliverables.join(", ")}</dd>
          </div>
          <div>
            <dt>Função</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </section>

      <section className="director-note content-wrap" aria-labelledby="director-note-title">
        <p id="director-note-title" className="micro-label">
          Nota do diretor
        </p>
        <blockquote>{project.directorNote}</blockquote>
      </section>

      <section className="behind-scenes content-wrap" aria-labelledby="behind-scenes-title">
        <p id="behind-scenes-title" className="micro-label">
          Bastidores
        </p>
        <div className="gallery-grid">
          {project.gallery.map((image, index) => (
            <FramerImage
              {...image}
              sizes="(max-width: 809px) 100vw, 50vw"
              loading={index < 2 ? "eager" : "lazy"}
              key={`${image.src}-${index}`}
            />
          ))}
        </div>
      </section>

      <section className="next-project content-wrap">
        <p className="micro-label">Próximo projeto</p>
        {project.nextExternalUrl ? (
          <a href={nextHref} className="next-project__link">
            {project.nextLabel}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link href={nextHref} className="next-project__link">
            {project.nextLabel}
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
