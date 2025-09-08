import PartnerHeader from "@/components/pages/partner/PartnerHeader";
import Investment from "@/components/pages/partner/Investment";
import { SuccessStories } from "@/components/pages/partner/SuccessStories";
import ContactUsPartner from "@/components/pages/partner/ContactUsPartner";
import { getPartnershipPage } from "@/cms/partnership";
import { notFound } from "next/navigation";

export default async function Page() {
  const [page, err] = await getPartnershipPage();

  if (err) notFound();

  return (
    <section className="pt-[92px] lg:pt-[230px]">
      <PartnerHeader section={page.data?.hero} />
      <Investment section={page.data?.partnership} />
      <SuccessStories section={page.data?.imageSection} />
      <ContactUsPartner section={page.data?.contact} />
    </section>
  );
}
