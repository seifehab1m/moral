"use client";
// import { useSearchParams } from "next/navigation";
import {
  Verticals,
  SectorPortfolio,
  CompanyDescription,
  CallToActionSection,
} from "./_components";
// import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // ✅ import plugin

// Register GSAP plugin
gsap.registerPlugin(ScrollToPlugin);

export default function CoreVerticals() {
  // const searchParams = useSearchParams();
  // const sec = searchParams.get("sec");

  // useEffect(() => {
  //   if (sec) {
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: { y: `#${sec}`, offsetY: 100 }, // adjust offset if sticky header
  //       ease: "power2.inOut",
  //     });
  //   }
  // }, [sec]);

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
        // className="lg:mt-0"
        hideBtn={true}
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
        description="Yashar palace including its B6 travel and tourism agency, curates with craft, working with partners to realize market-leading, guest-centric experiences designed to evolve with the needs of tomorrow’s discerning consumer."
        id="hospitality"
      />
      <CallToActionSection
        bgURL="/resturant.png"
        text="Visit Website"
        href="https://yasharpalace.ae/"
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
