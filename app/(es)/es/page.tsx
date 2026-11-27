import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es");

export default function Page() {
  return <HomePage locale="es" />;
}
