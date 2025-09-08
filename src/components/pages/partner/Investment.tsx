"use client";

import { PartnershipPartnershipComponent } from "@/cms/Api";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  section: PartnershipPartnershipComponent | undefined;
};

export default function Investment({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".invesetment-section", {
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });

  if (!section) return null;

  return (
    <section ref={containerRef} className="top-rounded-section">
      <div className="container flex flex-col lg:flex-row justify-between lg:gap-60">
        <div className="lg:min-w-fit shrink-0 grow">
          <p className="sub-header invesetment-section">{section.subHeader}</p>
          <h2
            className="text-primary font-medium heading-1 mt-3 invesetment-section [&_b]:text-primary [&_b]:font-medium"
            dangerouslySetInnerHTML={{ __html: section.header! }}
          />
        </div>

        <p className="heading-4 text-light-black font-medium mt-4 invesetment-section">
          {section.paragraph}
        </p>
      </div>
    </section>
  );
}
