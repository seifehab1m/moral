import {
  Verticals,
  SectorPortfolio,
  CompanyDescription,
  CallToActionSection,
} from "./_components";

export default function CoreVerticals() {
  return (
    <>
      <Verticals />
      <CompanyDescription
        className="mt-8 lg:mt-[71px]"
        sectorName="Real Estate"
        companyLogo="/hotel-logo-light.svg"
        description="Fifty three east is a boutique developer that leverages deep market insight to deliver experiential living through thoughtfully designed, customer-centric communities — all shaped by its innovative next-generation development model."
        id="real-estate"
      />
      <CallToActionSection
        bgURL="/hotel-2.png"
        text="Visit Website"
        href="https://www.53east.com"
      />

      <SectorPortfolio id="construction" />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="Healthcare"
        companyName="Canadian Specialist Hospital LLC"
        description="Canadian specialist hospital invests strategically in advanced technologies and world-class facilities, delivering exceptional care today while anticipating the evolving needs of patients tomorrow."
        id="healthcare"
      />
      <CallToActionSection
        bgURL="/csh.png"
        text="Visit Website"
        href="https://csh.ae/"
      />
      <CompanyDescription
        className="lg:mt-[71px]"
        sectorName="INVESTMENT AND FINANCIAL SERVICES"
        companyName="Financial Services, IT and Investment Management"
        description="MRBF Financial Services & Investment Management develops cutting edge financial technology designed to disrupt the status quo and provide, powerful solutions for the evolution of the financial sector. This is complemented by MRBF IT, which offers a suite of smart, scalable software solutions that empower businesses and drive growth."
        id="financial-services"
      />
      <CallToActionSection
        hideBtn={true}
        bgURL="/people-working.png"
        text="Visit Website"
        href="/"
      />

      <CompanyDescription
        className="lg:mt-[91px]"
        sectorName="Hospitality"
        companyName="Yashar Palace Restaurant"
        description="Yashar palace including its B6 travel and tourism agency, curates with craft, working with partners to realize market-leading, guest-centric experiences designed to evolve with the needs of tomorrow’s discerning consumer."
        id="hospitality"
      />
      <CallToActionSection
        bgURL="/resturant.png"
        text="Visit Website"
        href="https://yasharpalace.ae/"
      />
    </>
  );
}
