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
        description="MRBF Development (Fifty Three East) is a boutique developer that leverages deep market insight to deliver experiential living through thoughtfully designed, customer-centric communities — all shaped by its innovative next-generation development model."
      />
      <CallToActionSection bgURL="/hotel-2.png" text="Visit Website" href="/" />

      <SectorPortfolio />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Healthcare"
        companyName="Canadian Specialist Hospital LLC"
        description="MRBF Healthcare (Canadian Specialist Hospital) invests strategically in advanced technologies and world-class facilities, delivering exceptional care today while anticipating the evolving needs of patients tomorrow."
      />
      <CallToActionSection bgURL="/csh.png" text="Visit Website" href="/" />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="INVESTMENT AND FINANCIAL SERVICES"
        companyName="Financial Services, IT and Investment Management"
        description="MRBF Financial Services & Investment Management develops cutting edge financial technology designed to disrupt the status quo and provide, powerful solutions for the evolution of the financial sector. This is complemented by MRBF IT, which offers a suite of smart, scalable software solutions that empower businesses and drive growth."
      />
      <CallToActionSection
        // className="lg:mt-0"
        bgURL="/people-working.png"
        text="Visit Website"
        href="/"
      />
      {/* <CompanyDescription
        className="mt-8 lg:mt-[71px]"
        sectorName="IT Service"
        companyName="KIMIT Innovation Technology"
        // companyLogo="/hotel-logo-light.svg"
        description="MRBF IT Services is spearheaded by KIMIT, a leading-edge digital transformation company offering a suite of smart, scalable software solutions that empower businesses and drive growth. KIMIT specialises in supporting brand and marketing businesses in Egypt, Saudi Arabia and the UAE."
      />
      <CallToActionSection bgURL="/kimit.png" text="Visit Website" href="/" /> */}

      <CompanyDescription
        className="lg:my-[91px]"
        sectorName="Hospitality"
        companyName="Yashar Palace Restaurant"
        description="MRBF Hospitality (Yashar Palace) including its B6 travel and tourism agency, curates with craft, working with partners to realize market-leading, guest-centric experiences designed to evolve with the needs of tomorrow’s discerning consumer."
      />
      <CallToActionSection
        bgURL="/resturant.png"
        text="Visit Website"
        href="/"
      />

      {/* <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      /> */}

      {/* <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      /> */}

      {/* <StatsSection
        stats={[
          { description: "Lorem ipsum", number: "106+" },
          { description: "Lorem ipsum", number: "200+" },
          { description: "Lorem ipsum", number: "750+" },
        ]}
      /> */}

      {/* ------------------------- */}

      {/* ------------------------- */}
    </>
  );
}
