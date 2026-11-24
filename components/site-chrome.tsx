import Link from "next/link";

import { categories } from "@/lib/site-data";
import { FramerImage } from "@/components/site-media";

export function SiteHeader() {
  return (
    <header className="site-header content-wrap">
      <Link href="/" className="micro-label link-line">
        ODD MAKERS
      </Link>
      <a className="micro-label link-line" href="mailto:rejaul.dev@gmail.com">
        Contato
      </a>
    </header>
  );
}

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs micro-label" aria-label="Navegação estrutural">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer content-wrap">
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <p id="footer-contact-title" className="micro-label">
          Disponível para novos projetos
        </p>
        <a className="footer-email" href="mailto:hi@betterfilms.com">
          
        </a>
      </section>

      <section className="footer-categories" aria-label="Categorias de filmes">
        {categories.map((category) => (
          <Link
            className="footer-category"
            href={`/categories/${category.slug}`}
            key={category.slug}
          >
            <span className="footer-category__media">
              <FramerImage
                {...category.cover}
                sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 25vw"
              />
            </span>
            <span className="footer-category__label micro-label">{category.title}</span>
          </Link>
        ))}
      </section>

      <div className="footer-bottom micro-label">
        <span>© 2026 Todos os direitos reservados.</span>
        <a className="link-line" href="https://instagram.com" target="_blank" rel="noreferrer">
          @oddmks
        </a>
      </div>
    </footer>
  );
}
