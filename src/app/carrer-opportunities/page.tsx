"use client";

import ValuesCreator from "@/components/pages/career-opportunities/ValuesCreator";
import img from "@/assets/images/carrerHero.png";
import { Button } from "@/components/ui/button";
import PositiveImpact from "@/components/pages/career-opportunities/positive-impact/PositiveImpact";
import ManifestoBook from "@/components/pages/career-opportunities/ManifestoBook";
import CareerHeader from "@/components/pages/career-opportunities/CareerHeader";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import CareerOpportunitiesForm from "@/components/pages/career-opportunities/CareerOpportunitiesForm";

export default function Page() {
  useHeaderTheme(true);

  return (
    <>
      <section className="pt-[92px] lg:pt-[230px]">
        <CareerHeader />
        <div
          style={{
            backgroundImage: `url(${img?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" w-full h-screen"
        >
          <div className=" h-full flex items-end pb-28 ">
            <div className="container flex justify-between items-center">
              <h2 className="heading-1 text-white font-semibold leading-12">
                Shaping industries <br />
                driving progress
              </h2>
              {/* <Button>WATCH VIDEO</Button> */}
            </div>
          </div>
        </div>
        {/* <ValuesCreator /> */}
      </section>
      {/* <PositiveImpact /> */}
      {/* <ManifestoBook /> */}
      <CareerOpportunitiesForm />
    </>
  );
}
