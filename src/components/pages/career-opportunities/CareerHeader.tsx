"use client";

import gsap from "gsap";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { CareersSectionComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  section: CareersSectionComponent | undefined;
};

export default function CareerHeader({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useHeaderTheme(true);

  useGSAP(() => {
    gsapSplit(containerRef, ".career-header");
    gsap.from(imageRef.current, {
      scale: 1.2,
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
    gsapSplit(h2Ref, ".career-header-2");
  });

  if (!section) return null;

  return (
    <section ref={containerRef} className="pt-[90px] lg:pt-[230px]">
      <div className="container">
        <span className="sub-header career-header">{section.subHeader}</span>
        <h1
          className="mt-3 lg:mt-8 font-medium heading-1 text-secondary md:max-w-[750px] career-header [&_b]:text-primary [&_b]:font-medium"
          dangerouslySetInnerHTML={{ __html: section.header! }}
        />
        <p className="heading-4 text-black font-medium mt-3 lg:mt-12 career-header">
          {section.paragraph}
        </p>
      </div>
      {section?.imageSection && (
        <div className="relative w-full lg:max-h-[864px] mt-6 lg:mt-[72px] overflow-hidden aspect-[1.52] lg:asepct-[2]">
          <StrapiImage
            ref={imageRef}
            image={section.imageSection?.background}
            className="object-cover object-bottom"
            fill
          />
          <div className="container flex flex-col justify-end h-full py-[40px] lg:py-[120px]">
            <h2
              ref={h2Ref}
              className="relative heading-1 text-white font-semibold career-header-2"
              dangerouslySetInnerHTML={{
                __html: section.imageSection?.header!,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
