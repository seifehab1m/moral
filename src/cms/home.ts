import { strapi } from ".";
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
      "seo.shareImage",
    ],
  };

  return safeTry(() => strapi<HomeResponse>({ path: "/home", query }));
}
