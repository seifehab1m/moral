import { getCareers } from "@/cms/careers";
import { JSONLD } from "@/components/helpers";
import CareerHeader from "@/components/pages/career-opportunities/CareerHeader";
import CareerOpportunitiesForm from "@/components/pages/career-opportunities/CareerOpportunitiesForm";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const [page] = await getCareers();
  return createMetadata(page?.data?.seo);
}

export default async function Page() {
  const [page, err] = await getCareers();

  if (err) notFound();

  return (
    <>
      <CareerHeader section={page.data?.section} />
      <CareerOpportunitiesForm />
      <JSONLD structuredData={page.data?.seo?.structuredData} />
    </>
  );
}
