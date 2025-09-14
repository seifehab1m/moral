import { strapi } from ".";
import { safeTry } from "@/lib/safeTry";
import { WhatWeDoResponse } from "./Api";

export function getWhatWeDo() {
  return safeTry(() =>
    strapi<WhatWeDoResponse>({
      path: "/what-we-do",
      query: {
        populate: {
          hero: { populate: "sectorCards.image" },
          seo: { populate: "shareImage" },
          sections: {
            on: {
              "what-we-do.sector-browser": {
                populate: ["items.image"],
              },
              "what-we-do.company-section": {
                populate: ["logo", "ctaBackground"],
              },
            },
          },
        },
      },
    }),
  );
}
