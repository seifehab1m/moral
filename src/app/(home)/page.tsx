import {
  Hero,
  Stats,
  CallToActionBG,
  Sectors,
  FlagshipSpotlight,
} from "./_components";

export default function HomePage() {
  return (
    <>
      <Hero />
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
