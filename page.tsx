import Link from "next/link";
import { Container, Btn, JsonLd, CtaBand } from "@/components/ui";
import { groups, onPrem, cloud, faqs } from "@/lib/content";
import { SITE, abs, SIGNUP } from "@/lib/config";

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", name: SITE.name, url: abs(), logo: abs("/favicon.svg"), email: SITE.email, areaServed: "TN" },
        { "@type": "WebSite", name: SITE.name, url: abs(), inLanguage: "fr-TN" },
        { "@type": "SoftwareApplication", name: SITE.name, applicationCategory: "BusinessApplication", operatingSystem: "Windows, Web", description: SITE.description, url: abs() },
        { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      ] }} />

      <section className="tiles border-b border-ink/10">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Votre facture est conforme TTN avant même d'être envoyée.</h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">TunSuite est l'ERP et CRM des PME tunisiennes : ventes, achats, stock, trésorerie, paie et comptabilité, avec la fiscalité tunisienne intégrée.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={SIGNUP}>Créer mon compte</Btn>
              <Btn href="/tarifs" variant="ghost">Voir les tarifs</Btn>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md rotate-1 rounded-xl border border-ink/15 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div><p className="font-display text-xl font-bold">Facture</p><p className="text-sm text-ink/60">F-2026-0142</p></div>
              <span className="rounded border-2 border-harissa px-2 py-1 text-xs font-bold text-harissa">Signée TTN</span>
            </div>
            <dl className="mt-6 space-y-2 text-sm">
              {[["Total HT", "4 200,000 TND"], ["TVA 19 %", "798,000 TND"], ["Timbre fiscal", "1,000 TND"], ["Retenue à la source", "- 42,000 TND"]].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-dashed border-ink/15 pb-2"><dt className="text-ink/60">{k}</dt><dd className="font-medium">{v}</dd></div>
              ))}
              <div className="flex justify-between pt-1 text-base font-bold"><dt>Net à payer</dt><dd>4 957,000 TND</dd></div>
            </dl>
            <p className="mt-5 rounded-lg bg-sky px-3 py-2 text-xs text-sea">Paiement reçu sur Banque principale. Solde client : 0,000 TND.</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-4xl">Tout ce dont votre entreprise a besoin, dans un seul outil.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <Link key={g.slug} href={`/fonctionnalites/${g.slug}`} className="bg-white p-6 hover:bg-sky/60">
                <h3 className="text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{g.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sky/60 py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Deux façons d'utiliser TunSuite</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8">
              <h3 className="text-xl font-bold">Sur site, en achat unique</h3>
              <p className="mt-2 text-ink/70">Vous achetez la licence une fois, vous gardez vos données chez vous.</p>
              <ul className="mt-5 space-y-3 text-sm">{onPrem.map((t) => <li key={t.name}><b>{t.name}</b> : {t.tag}</li>)}</ul>
            </div>
            <div className="rounded-xl bg-ink p-8 text-white">
              <h3 className="text-xl font-bold">Cloud, par abonnement</h3>
              <p className="mt-2 text-white/70">Un seul forfait avec un utilisateur inclus. Vous ajoutez des utilisateurs et des entreprises quand vous grandissez.</p>
              <ul className="mt-5 space-y-3 text-sm">{cloud.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><Btn href="/tarifs">Comparer les formules</Btn><Btn href="/telechargement" variant="ghost">Télécharger pour Windows</Btn></div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold">Questions fréquentes</h2>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-4"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-ink/70">{a}</p></details>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
