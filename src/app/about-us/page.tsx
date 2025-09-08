import AboutUsSection from "@/components/pages/about-us/AboutUsSection";
import FutureAndPresent from "@/components/pages/about-us/FutureAndPresent";
import LeaderShip from "@/components/pages/about-us/LeaderShip";
import Sectors from "@/components/pages/about-us/Sector";
import Values from "@/components/pages/about-us/Values";
import { getAboutPage } from "@/cms/about";
import { notFound } from "next/navigation";

export default async function page() {
  const [page, err] = await getAboutPage();

  if (err) notFound();

  return (
    <div className="pt-[92px] lg:pt-[230px]">
      <AboutUsSection section={page.data?.about} />
      <FutureAndPresent section={page.data?.chairman} />
      <LeaderShip section={page?.data?.leadership} />
      <Values section={page.data?.values} />
      <Sectors section={page.data?.sectors} />
    </div>
  );
}
