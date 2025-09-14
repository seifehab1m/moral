import { strapi } from ".";
import { safeTry } from "@/lib/safeTry";
import { GlobalResponse } from "./Api";

export function getGlobal() {
  return safeTry(() =>
    strapi<GlobalResponse>({
      path: "/global",
      query: {
        populate: [
          "defaultSeo.shareImage",
          "header.logo",
          "header.links",
          "footer.logo",
          "footer.links.items",
          "contact.cta",
        ],
      },
    }),
  );
}
