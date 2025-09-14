import { SharedSeoComponent } from "@/cms/Api";
import type { Metadata } from "next";
import { env } from "@/env";

export function createMetadata(seo: SharedSeoComponent | undefined): Metadata {
  if (!seo) return {};

  const imageURL = seo.shareImage?.url
    ? new URL(seo.shareImage.url, env.NEXT_PUBLIC_CMS_URL).href
    : null;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords?.split("\n").map((s) => s.trim()),
    alternates: { canonical: seo.canonicalURL },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageURL
        ? [{ url: imageURL, alt: seo.shareImage?.alternativeText }]
        : [],
    },
    twitter: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageURL
        ? [{ url: imageURL, alt: seo.shareImage?.alternativeText }]
        : [],
    },
  };
}
