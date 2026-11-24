import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { FilmCard, FramerImage } from "@/components/site-media";
import { aboutImage, homeProjectSlugs, projectMap, productionImage } from "@/lib/site-data";
import oddMksLogo from "/public/assets/Logótipo Geométrico ODD MKS.png";

const homeProjects = homeProjectSlugs.flatMap((slug) => {
  const item = projectMap.get(slug);
  return item ? [item] : [];
});

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
            Sobre Nós
          </p>
        </div>

        <div className="home-about__content">
          <p className="home-about__copy">
            Todo filme começa muito antes de a câmera rodar. Do primeiro tratamento à finalização,
            cada projeto é construído em torno de uma única ideia: o que o público deve sentir
            quando a tela escurece.
          </p>

          <div className="home-about__team" aria-label="Integrantes da ODD MKS">
            <article className="home-about__member">
              <div className="home-about__portrait">
                <FramerImage {...aboutImage} sizes="(max-width: 809px) 100vw, 34vw" />
              </div>

              <div className="home-about__member-content">
                <p className="home-about__member-index micro-label">01 — Filmaker &amp; Fotografia</p>
                <h3>Dudu</h3>
                <p className="home-about__member-role">Direção criativa &amp; fotografia</p>
                <p className="home-about__member-copy">
                  3 Anos de experiência. <br></br>Especialista em
                  institucionais e corporativas
                </p>
              </div>
            </article>

            <article className="home-about__member home-about__member--reverse">
              <div className="home-about__portrait">
                <FramerImage {...productionImage} sizes="(max-width: 809px) 100vw, 34vw" />
              </div>

              <div className="home-about__member-content">
                <p className="home-about__member-index micro-label">
                  02 — Fotografia
                </p>
                <h3>Gui</h3>
                <p className="home-about__member-role">Fotografia &amp; luzes</p>
                <p className="home-about__member-copy">
                  Fotográfo há 3 anos e meio.<br></br>
                  Mestre em luz e cor
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
