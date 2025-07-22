import {
  Verticals,
  SectorPortfolio,
  CompanyDescription,
  CallToActionSection,
  StatsSection,
} from "./_components";

export default function CoreVerticals() {
  return (
    <>
      <Verticals />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Real Estate"
        companyLogo="/hotel-logo-light.svg"
        description="Investing in local, regional and global property markets, MRBF Real Estate Development and Management leverages deep market insight and a keen sense of future trends to maximise sustainable returns for investors. Its development arm, Fifty Three East, delivers the company’s ethos of next- generation experiential living through customer- centric communities."
      />

      <CallToActionSection
        className=""
        bgURL="/hotel-2.png"
        text="Visit Website"
        href="/"
      />

      <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      />

      <SectorPortfolio />

      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Investment & Funds"
        companyName="Buset Investments Co. LLC"
        description="MRBF Construction incorporates several entities, including Buset Contracting, one of the first Emirati construction companies with a legacy for quality and innovation dating back to 1990. Today, with its affiliates Electromechanical Credible Contractors LLC, Al Tala Technical Industries Co. LLC and Wooden Art Industries, it provides end-to-end solutions across a range of complex construction projects."
      />

      <CallToActionSection bgURL="/csh.png" text="Visit Website" href="/" />

      <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      />

      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Healthcare"
        companyName="Canadian Specialist Hospital L.L.C"
        description="MRBF Healthcare invests in innovative technologies, clinics, pharmacies and other medical facilities that deliver world-class care today and anticipate the evolving needs of patients tomorrow. Its flagship facility, the Canadian Specialist Hospital established in 2003, is a multi-specialty private hospital providing medical services that meet the highest international standards."
      />

      <CallToActionSection
        bgURL="/resturant.png"
        text="Visit Website"
        href="/"
      />

      <CompanyDescription
        sectorName="Hospitality"
        companyName="Yashar Palace Restaurant"
        description="MRBF Hospitality works with top-tier partners to deliver pioneering lifestyle and culinary experiences. This is embodied by the Dubai- based restaurant, Yashar Palace, which continually evolves to meet the fast-changing tastes of premium markets."
        rounded
      />

      <CallToActionSection
        className="lg:mt-0"
        bgURL="/people-working.png"
        text="Visit Website"
        href="/"
      />

      <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      />
    </>
  );
}
