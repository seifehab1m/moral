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
        imageURL="/cta-image.jpg"
        ctaURL="https://www.google.com"
        ctaText="watch video"
        headerText="We're building a better future for everyone"
        className="pb-10"
      />
      <Sectors />
      <FlagshipSpotlight />
      <ContactUs />
    </>
  );
}
