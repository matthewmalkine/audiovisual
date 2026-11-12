import Link from "next/link";

import { framerSrcSet, type GalleryImage, type ProjectRecord } from "@/lib/site-data";

type FramerImageProps = GalleryImage & {
  className?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
};

export function FramerImage({
  src,
  alt,
  className,
  sizes = "(max-width: 809px) 100vw, 50vw",
  loading = "lazy",
}: FramerImageProps) {
  return (
    // The saved Framer page ships its own responsive variants. Keeping a native
    // image avoids an additional Next image proxy and preserves those URLs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={framerSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}

type FilmCardProps = {
  project: ProjectRecord;
  priority?: boolean;
};

export function FilmCard({ project, priority = false }: FilmCardProps) {
  return (
    <article className="film-card">
      <Link
        href={`/projects/${project.slug}`}
        className="film-card__link"
        aria-label={`Ver ${project.title} para ${project.client}`}
      >
        <span className="film-card__media">
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            aria-label={`${project.title} — ${project.client}`}
          />
        </span>
        <span className="film-card__caption micro-label">
          <span>{project.client}</span>
          <span className="text-orange">{project.year}</span>
        </span>
      </Link>
    </article>
  );
}
