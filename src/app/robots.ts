import { getGlobal } from "@/cms/global";
import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const [global, err] = await getGlobal();

  if (err) notFound();

  return {
    rules:
      global.data?.robots?.userAgents?.map((ua) => ({
        userAgent: ua.name!,
        allow: ua.allow?.map((a) => a.text!),
        disallow: ua.disallow?.map((da) => da.text!) ?? [],
        crawlDelay: ua.crawlDelay ? Number(ua.crawlDelay!) : undefined,
      })) ?? [],

    sitemap: global.data?.robots?.sitemaps?.map((s) => s.text!),
    host: global.data?.robots?.host,
  };
}
