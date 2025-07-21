import {
  Hero,
  Stats,
  CallToActionBG,
  Sectors,
  FlagshipSpotlight,
  ContactUs,
} from "./_components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CallToActionBG
        imageURL="/cta-image-2.png"
        ctaURL="https://www.google.com"
        ctaText="watch video"
        headerText="Shaping industries driving progress"
        className="pb-10"
      />
      <Sectors />
      <FlagshipSpotlight />
      <ContactUs />
    </>
  );
}
