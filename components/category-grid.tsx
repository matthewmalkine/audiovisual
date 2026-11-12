"use client";

import { useEffect, useRef, useState } from "react";

import { FilmCard } from "@/components/site-media";
import type { ProjectRecord } from "@/lib/site-data";

export function CategoryGrid({ projects }: { projects: ProjectRecord[] }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= projects.length) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setLoading(true);
        timer = setTimeout(() => {
          setVisibleCount(projects.length);
          setLoading(false);
        }, 420);
      },
      { rootMargin: "0px" },
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [projects.length, visibleCount]);

  return (
    <>
      <section className="film-grid category-film-grid" aria-label="Projetos">
        {projects.slice(0, visibleCount).map((project, index) => (
          <FilmCard project={project} priority={index < 2} key={project.slug} />
        ))}
      </section>
      {visibleCount < projects.length ? (
        <div ref={sentinelRef} className="load-more-sentinel" aria-live="polite">
          {loading ? <span className="spinner" aria-label="Carregando mais filmes" /> : null}
        </div>
      ) : null}
    </>
  );
}
