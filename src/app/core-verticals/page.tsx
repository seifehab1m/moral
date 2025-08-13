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
        className="mt-8 lg:mt-[71px]"
        sectorName="Real Estate"
        companyLogo="/hotel-logo-light.svg"
        description="Investing in local, regional and global property markets, MRBF Real Estate Development and Management leverages deep market insight and a keen sense of future trends to maximise sustainable returns for investors. Its development arm, Fifty Three East, delivers the company’s ethos of next- generation experiential living through customer- centric communities."
      />
      <CallToActionSection bgURL="/hotel-2.png" text="Visit Website" href="/" />

      <SectorPortfolio />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Healthcare"
        companyName="Canadian Specialist Hospital L.L.C"
        description="MRBF Healthcare invests in innovative technologies, clinics, pharmacies and other medical facilities that deliver world-class care today and anticipate the evolving needs of patients tomorrow. Its flagship facility, the Canadian Specialist Hospital established in 2003, is a multi-specialty private hospital providing medical services that meet the highest international standards."
      />
      <CallToActionSection bgURL="/csh.png" text="Visit Website" href="/" />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="INVESTMENT AND FINANCIAL SERVICES"
        companyName="Financial Services, IT and Investment Management"
        description="MRBF Holding has positioned its $1 billion fund as a generational asset – engineered to protect existing value, enhance strategic exposure and deliver consistent returns across diversified verticals. It provides innovative financial solutions and investment management to partners looking to harness a range of opportunities."
      />
      <CallToActionSection
        // className="lg:mt-0"
        bgURL="/people-working.png"
        text="Visit Website"
        href="/"
      />
      <CompanyDescription
        className="mt-8 lg:mt-[71px]"
        sectorName="IT Service"
        companyName="KIMIT Innovation Technology"
        // companyLogo="/hotel-logo-light.svg"
        description="MRBF IT Services is spearheaded by KIMIT, a leading-edge digital transformation company offering a suite of smart, scalable software solutions that empower businesses and drive growth. KIMIT specialises in supporting brand and marketing businesses in Egypt, Saudi Arabia and the UAE."
      />
      <CallToActionSection bgURL="/kimit.png" text="Visit Website" href="/" />

      <CompanyDescription
        className="lg:my-[91px]"
        sectorName="Hospitality"
        companyName="Yashar Palace Restaurant"
        description="MRBF Hospitality works with top-tier partners to deliver pioneering lifestyle and culinary experiences. This is embodied by the Dubai- based restaurant, Yashar Palace, which continually evolves to meet the fast-changing tastes of premium markets."
      />
      <CallToActionSection
        bgURL="/resturant.png"
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

      <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      />

      <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      />

      {/* ------------------------- */}

      {/* ------------------------- */}
    </>
  );
}
