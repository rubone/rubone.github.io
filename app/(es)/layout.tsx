import type { Viewport } from "next";
import type { ReactNode } from "react";
import { Document } from "@/components/Document";

export const viewport: Viewport = { themeColor: "#FBFBFA" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Document locale="es">{children}</Document>;
}
