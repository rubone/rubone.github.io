import type { ReactNode } from "react";
import { inter, spaceGrotesk } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

/** Shared <html>/<body> for the per-language root layouts. */
export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
