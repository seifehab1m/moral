import { fromCMS } from ".";
import { safeTry } from "@/lib/safeTry";
import { PartnershipResponse } from "./Api";

export function getPartnershipPage() {
  return safeTry(() =>
    fromCMS<PartnershipResponse>({
      path: "/partnership",
      query: {
        populate: [
          "hero.background",
          "imageSection.backgroundLg",
          "imageSection.backgroundSm",
          "partnership",
          "contact",
        ],
      },
    }),
  );
}
