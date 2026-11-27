import type { Metadata } from "next";
import Link from "next/link";
import { Document } from "@/components/Document";
import { SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 — Page not found · Rubén Saavedra",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <Document locale="en">
      <main className="container-page flex min-h-screen flex-col items-start justify-center gap-6">
        <p className="m-0 text-sm font-semibold tracking-[0.08em] text-accent uppercase">404</p>
        <h1 className="m-0 font-display text-[clamp(36px,5vw,56px)] leading-[1.1] font-semibold tracking-[-0.02em]">
          Page not found · Página no encontrada
        </h1>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn bg-accent text-white hover:bg-accent-hover">
            Go home
          </Link>
          <Link href="/es/" className="btn border border-line-strong text-ink hover:border-ink">
            Ir al inicio
          </Link>
        </div>
      </main>
    </Document>
  );
}
