import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { FilmCard, FramerImage } from "@/components/site-media";
import { aboutImage, homeProjectSlugs, projectMap } from "@/lib/site-data";
import oddMksLogo from "/public/assets/Logótipo Geométrico ODD MKS.png";

const homeProjects = homeProjectSlugs.flatMap((slug) => {
  const item = projectMap.get(slug);
  return item ? [item] : [];
});

const awards = [
  ["Cannes Lions — Bronze em Film Craft", "2026"],
  ["Ciclope Festival — Melhor Fotografia", "2025"],
  ["Vimeo Staff Pick", "2025"],
  ["Berlin Commercial — Melhor Direção", "2024"],
  ["UK Music Video Awards — Indicado", "2023"],
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />

      <section className="home-hero content-wrap" aria-labelledby="home-title">
        <h1 id="home-title" className="sr-only">
          ODD MKS
        </h1>
        <Image
          src={oddMksLogo}
          alt="ODD MKS"
          className="home-hero__logo"
          sizes="(max-width: 1879px) calc(100vw - 80px), 1800px"
          preload
        />
        <p className="home-hero__subtitle micro-label">
          Ser ímpar não é um acidente.
          <br />
          É uma <span className="text-orange">escolha.</span>
          <br />
          Produtora Audiovisual
        </p>
      </section>

      <section className="film-grid home-film-grid content-wrap" aria-label="Filmes selecionados">
        {homeProjects.map((project, index) => (
          <FilmCard project={project} priority={index < 2} key={project.slug} />
        ))}
      </section>

      <section className="home-about content-wrap" aria-labelledby="about-title">
        <div className="home-about__label">
          <p id="about-title" className="micro-label">
            Sobre
          </p>
        </div>

        <div className="home-about__content">
          <p className="home-about__copy">
            Todo filme começa muito antes de a câmera rodar. Do primeiro tratamento à finalização,
            cada projeto é construído em torno de uma única ideia: o que o público deve sentir
            quando a tela escurece.
          </p>

          <div className="awards" aria-labelledby="awards-title">
            <p id="awards-title" className="micro-label">
              Prêmios
            </p>
            <ul>
              {awards.map(([name, recognition]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{recognition}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-about__image">
            <FramerImage {...aboutImage} sizes="(max-width: 809px) 100vw, 68vw" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
