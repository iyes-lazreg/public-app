import { notFound } from "next/navigation";
import { Container, PageHead, CtaBand, JsonLd } from "@/components/ui";
import { groups } from "@/lib/content";
import { meta } from "@/lib/seo";
import { abs } from "@/lib/config";
export const generateStaticParams = () => groups.map((g) => ({ slug: g.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = groups.find((x) => x.slug === params.slug);
  return g ? meta(`${g.title} : ERP tunisien`, g.desc, `/fonctionnalites/${g.slug}`) : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const g = groups.find((x) => x.slug === params.slug);
  if (!g) notFound();
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: abs() },
      { "@type": "ListItem", position: 2, name: "Fonctionnalités", item: abs("/fonctionnalites") },
      { "@type": "ListItem", position: 3, name: g.title, item: abs(`/fonctionnalites/${g.slug}`) }] }} />
    <PageHead title={g.title} desc={g.desc} />
    <Container className="grid gap-5 py-16 md:grid-cols-2">
      {g.items.map(([t, d]) => (
        <div key={t} className="rounded-xl border border-ink/10 bg-white p-6"><h2 className="font-bold">{t}</h2><p className="mt-2 text-sm text-ink/70">{d}</p></div>
      ))}
    </Container>
    <CtaBand />
  </>);
}
