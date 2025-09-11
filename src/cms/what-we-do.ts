import { strapi } from ".";
import { safeTry } from "@/lib/safeTry";
import { type WhatWeDo, WhatWeDoResponse } from "./Api";

export async function getWhatWeDoPage() {
  return safeTry(() =>
    strapi<WhatWeDoResponse>({
      path: "/what-we-do",
      query: {
        populate: {
          hero: {
            populate: "sectorCards.image",
          },
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
