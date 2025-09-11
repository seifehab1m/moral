import { getCareersPage } from "@/cms/careers";
import CareerHeader from "@/components/pages/career-opportunities/CareerHeader";
import CareerOpportunitiesForm from "@/components/pages/career-opportunities/CareerOpportunitiesForm";
import { notFound } from "next/navigation";

export default async function Page() {
  const [page, err] = await getCareersPage();

  if (err) notFound();

  return (
    <>
      <CareerHeader section={page.data?.section} />
      <CareerOpportunitiesForm />
    </>
  );
}
