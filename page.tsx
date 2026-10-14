import LegalPage from "@/components/LegalPage";
import { legal } from "@/lib/content";
import { meta } from "@/lib/seo";
export const metadata = meta(legal["conformite"].title, legal["conformite"].desc, "/conformite");
export default function Page() { return <LegalPage slug="conformite" />; }
