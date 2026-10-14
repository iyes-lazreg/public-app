import { Container, Btn } from "@/components/ui";
export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="font-display text-4xl font-extrabold">Page introuvable</h1>
      <p className="mb-6 mt-3 text-ink/70">Cette adresse n'existe pas ou a été déplacée.</p>
      <Btn href="/">Retour à l'accueil</Btn>
    </Container>
  );
}
