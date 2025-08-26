"use client";

import PartnerHeader from "@/components/pages/partner/PartnerHeader";
import Investment from "@/components/pages/partner/Investment";
import { SuccessStories } from "@/components/pages/partner/SuccessStories";
import ContactUsPartner from "@/components/pages/partner/ContactUsPartner";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

export default function Page() {
  useHeaderTheme(true);
  return (
    <section className="pt-[92px] lg:pt-[230px]">
      <PartnerHeader />
      <Investment />
      <SuccessStories />
      <ContactUsPartner />
    </section>
  );
}
