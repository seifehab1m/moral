import * as c from "./_components";
import { getHome } from "@/cms/home";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const [result, err] = await getHome();

  if (err) notFound();

  return (
    <>
      <c.Hero hero={result.data?.hero} />
      <c.StatSection section={result.data?.statSection} />
      <c.CallToActionBG section={result.data?.imageSection} className="pb-10" />
      <c.Sectors sectors={result.data?.sectors} />
      <c.FlagshipSpotlight spotlight={result.data?.spotlight} />
    </>
  );
}
