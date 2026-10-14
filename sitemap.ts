import type { MetadataRoute } from "next";
import { abs } from "@/lib/config";
import { groups, posts, legal } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const e = (p: string, priority: number, f: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: abs(p), lastModified: now, changeFrequency: f, priority });
  return [
    e("", 1, "weekly"), e("/fonctionnalites", 0.9), e("/tarifs", 0.9), e("/telechargement", 0.8), e("/commande", 0.8), e("/signup", 0.8), e("/login", 0.7),
    e("/a-propos", 0.6), e("/contact", 0.6), e("/blog", 0.7, "weekly"),
    ...groups.map((g) => e(`/fonctionnalites/${g.slug}`, 0.7)),
    ...posts.map((p) => e(`/blog/${p.slug}`, 0.5, "yearly")),
    ...Object.keys(legal).map((s) => e(`/${s}`, 0.3, "yearly")),
  ];
}
