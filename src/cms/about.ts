import { strapi } from ".";
import { safeTry } from "@/lib/safeTry";
import { AboutResponse } from "./Api";

export function getAbout() {
  return safeTry(() =>
    strapi<AboutResponse>({
      path: "/about",
      query: {
        populate: [
          "about.timeline",
          "chairman.background",
          "leadership.leaders.image",
          "values.list",
          "sectors.background",
          "sectors.list",
          "seo.shareImage",
        ],
      },
    }),
  );
}
