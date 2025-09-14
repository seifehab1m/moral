import { Hero, SectorBrowser, CompanySection } from "./_components";
import { getWhatWeDo } from "@/cms/what-we-do";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const [page] = await getWhatWeDo();
  return createMetadata(page?.data?.seo);
}

export default async function CoreVerticals() {
  const [page, err] = await getWhatWeDo();

  if (err) notFound();

  return (
    <>
      <Hero hero={page?.data?.hero} />
      {page?.data?.sections?.map((s, i) => {
        if (s.__component === "what-we-do.company-section")
          return <CompanySection key={i} company={s} />;
        else if (s.__component === "what-we-do.sector-browser")
          return <SectorBrowser key={i} sectors={s} />;
      })}
    </>
  );
}
