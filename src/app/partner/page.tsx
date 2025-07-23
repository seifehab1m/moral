"use client";

import PartnerHeader from "@/components/pages/partner/PartnerHeader";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import img from "@/assets/images/partnerHero.png";
import Investment from "@/components/pages/partner/Investment";
import { SuccessStories } from "@/components/pages/partner/SuccessStories";
import ContactUsPartner from "@/components/pages/partner/ContactUsPartner";

export default function Page() {
  useHeaderTheme(true);
  return (
    <section className="pt-[92px] lg:pt-[230px]">
      <PartnerHeader />
      <div
        style={{
          backgroundImage: `url(${img?.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full h-screen"
      ></div>
      <Investment />
      <SuccessStories />
      <ContactUsPartner/>
    </section>
  );
}
