import { safeTry } from "@/lib/safeTry";
import { client } from ".";

export function getSitemap() {
  return safeTry(() =>
    client.sitemaps.getSitemaps({
      populate: "*",
    }),
  );
}
