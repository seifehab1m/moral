"use client";

import img from "@/assets/images/partnerHero.png";
import { PartnershipHeroComponent } from "@/cms/Api";
import { useHeaderTheme } from "@/hooks";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { StrapiImage } from "@/components/ui";
import { useRef } from "react";

type Props = {
  section: PartnershipHeroComponent | undefined;
};

export default function PartnerHeader({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useHeaderTheme(true);

  useGSAP(() => {
    gsapSplit(containerRef, ".partnership-header");
    gsap.from(imageRef.current, {
      duration: 2,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });
  });

  if (!section) return null;

  return (
    <section ref={containerRef}>
      <div className="container space-y-3 lg:space-y-[40px]">
        <p className="sub-header font-medium partnership-header">
          {section.subHeader}
        </p>
        <h1
          className="font-medium heading-1 text-secondary md:max-w-[750px] partnership-header [&_b]:text-primary [&_b]:font-medium"
          dangerouslySetInnerHTML={{ __html: section.header! }}
        />
        <p className="heading-4 text-black font-medium partnership-header">
          {section.paragraph}
        </p>
      </div>
      <div className="relative aspect-[1.52] lg:aspect-[2] mt-8 lg:mt-12 overflow-hidden">
        <StrapiImage
          aria-hidden
          ref={imageRef}
          image={section.background}
          className="w-full h-full object-cover"
          fill
        />
      </div>
    </section>
  );
}
