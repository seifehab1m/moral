import { strapi } from ".";
import { safeTry } from "@/lib/safeTry";
import { CareerResponse } from "./Api";

export function getCareersPage() {
  return safeTry(() =>
    strapi<CareerResponse>({
      path: "/career",
      query: {
        populate: ["section.imageSection.background"],
      },
    }),
  );
}
