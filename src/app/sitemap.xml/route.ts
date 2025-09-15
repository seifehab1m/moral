import { getSitemap } from "@/cms/sitemap";
import js2xmlparser from "js2xmlparser";

export async function GET() {
  const [sitemap, err] = await getSitemap();

  if (err) {
    return new Response("Failed to generate sitemap", { status: 500 });
  }

  const xml = js2xmlparser.parse("urlset", {
    "@": { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
    url: sitemap?.data.data?.map((s) => {
      const entry: Record<string, string> = { loc: s.location };

      if (s.lastmod) entry.lastmod = s.lastmod;
      if (s.changefreq) entry.changefreq = s.changefreq;
      if (s.priority != null) entry.priority = s.priority.toString();

      return entry;
    }),
  });

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
