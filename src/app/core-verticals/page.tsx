import { Hero, SectorBrowser, CompanySection } from "./_components";
import { getWhatWeDoPage } from "@/cms/what-we-do";
import { notFound } from "next/navigation";

export default async function CoreVerticals() {
  const [page, err] = await getWhatWeDoPage();

  if (err) notFound();

  return (
    <>
      <Hero hero={page?.data?.hero} />
      {page?.data?.sections?.map((s) => {
        if (s.__component === "what-we-do.company-section")
          return <CompanySection key={s.id} company={s} />;
        else if (s.__component === "what-we-do.sector-browser")
          return <SectorBrowser key={s.id} sectors={s} />;
      })}
    </>
  );
}
