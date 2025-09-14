import PartnerHeader from "@/components/pages/partner/PartnerHeader";
import Investment from "@/components/pages/partner/Investment";
import { SuccessStories } from "@/components/pages/partner/SuccessStories";
import ContactUsPartner from "@/components/pages/partner/ContactUsPartner";
import { getPartnership } from "@/cms/partnership";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const [page] = await getPartnership();
  return createMetadata(page?.data?.seo);
}

export default async function Page() {
  const [page, err] = await getPartnership();

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
