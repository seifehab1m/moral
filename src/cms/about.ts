import { fromCMS } from ".";
import { safeTry } from "@/lib/safeTry";
import { AboutResponse } from "./Api";

export function getAboutPage() {
  return safeTry(() =>
    fromCMS<AboutResponse>({
      path: "/about",
      query: {
        populate: [
          "about.timeline",
          "chairman.background",
          "leadership.leaders.image",
          "values.list",
          "sectors.background",
          "sectors.list",
        ],
      },
    }),
  );
}
