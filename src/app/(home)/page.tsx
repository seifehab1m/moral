import { Api } from "@/cms/Api";
import {
  Hero,
  Stats,
  CallToActionBG,
  Sectors,
  FlagshipSpotlight,
} from "./_components";
import { client } from "@/cms/client";

export default async function HomePage() {
  const { data } = await client.home.getHome({
    populate: "*",
  });
  return (
    <>
      <Hero hero={data.data?.hero} />
      <Stats />
      <CallToActionBG
        imageURL="/cta-image-2.png"
        headerText="Shaping industries, driving progress."
        className="pb-10"
      />
      <Sectors />
      <FlagshipSpotlight />
    </>
  );
}
