import * as c from "./_components";
import { getHome } from "@/cms/home";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const [page] = await getHome();
  return createMetadata(page?.data?.seo);
}

export default async function HomePage() {
  const [page, err] = await getHome();

  if (err) notFound();

  return (
    <>
      <c.Hero hero={page.data?.hero} />
      <c.StatSection section={page.data?.statSection} />
      <c.CallToActionBG section={page.data?.imageSection} className="pb-10" />
      <c.Sectors sectors={page.data?.sectors} />
      <c.FlagshipSpotlight spotlight={page.data?.spotlight} />
    </>
  );
}
