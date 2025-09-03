import { fromCMS } from ".";
import { safeTry } from "@/lib/safeTry";
import { HomeResponse } from "./Api";

export function getHome() {
  const query = {
    populate: [
      "hero.background",
      "statSection.stat",
      "imageSection.background",
      "sectors.sectorItem.image",
      "spotlight.logo",
      "spotlight.background",
    ],
  };

  return safeTry(() => fromCMS<HomeResponse>({ path: "/home", query }));
}
