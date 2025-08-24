"use client";

import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Sector() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsapSplit(ref, ".sector-description", {
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });
  return (
    <section ref={ref} className="top-rounded-section py-16 ">
      <div className="container">
        <span className="sub-header sector-description">Sectors</span>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center mt-2 lg:mt-[35px]">
          <h2 className="text-primary font-medium heading-1 lg:max-w-[590px] sector-description">
            <span className="text-secondary">Broad sector expertise,</span> deep
            market understanding.
          </h2>
          <p className="md:w-1/2 heading-4 font-medium sector-description">
            MRBF Holding creates value in key sectors that have the power to
            deliver sustainable returns and a genuine impact for communities.
            From quality developments that transform lifestyles, to strategic
            investments in financial services, hospitality, healthcare, IT and
            other high-growth opportunities, it is committed to ambitious yet
            responsible growth.
          </p>
        </div>
      </div>
    </section>
  );
}
