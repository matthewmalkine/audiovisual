import Link from "next/link";

import { SiteHeader } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SiteHeader />
      <section className="not-found-content content-wrap">
        <p className="micro-label">404</p>
        <h1>Filme não encontrado</h1>
        <Link href="/" className="micro-label link-line">
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}
