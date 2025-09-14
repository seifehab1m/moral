import { safeTry } from "@/lib/safeTry";
import { strapi } from ".";
import { ContactResponse } from "./Api";

export function getContact() {
  return safeTry(() =>
    strapi<ContactResponse>({
      path: "/contact",
      query: { populate: ["hero.map", "seo.shareImage"] },
    }),
  );
}
