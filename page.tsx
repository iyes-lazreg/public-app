import Link from "next/link";
import { Container, PageHead, CtaBand } from "@/components/ui";
import { groups } from "@/lib/content";
import { meta } from "@/lib/seo";
export const metadata = meta("Fonctionnalités ERP & CRM", "Ventes, achats, stock, trésorerie, RH et paie, CRM, POS, comptabilité et conformité TTN/TEJ : tous les modules de TunSuite.", "/fonctionnalites");
export default function Page() {
  return (<>
    <PageHead title="Tous les modules de TunSuite" desc="Chaque module répond à un besoin réel des entreprises opérant en Tunisie." />
    <Container className="grid gap-6 py-16 md:grid-cols-2">
      {groups.map((g) => (
        <Link key={g.slug} href={`/fonctionnalites/${g.slug}`} className="rounded-xl border border-ink/10 bg-white p-6 hover:border-sea">
          <h2 className="text-xl font-bold">{g.title}</h2>
          <p className="mt-2 text-sm text-ink/70">{g.desc}</p>
        </Link>
      ))}
    </Container>
    <CtaBand />
  </>);
}
