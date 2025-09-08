"use client";
import Image from "next/image";
import img from "@/assets/images/success-lg.jpg";
import img2 from "@/assets/images/success.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsapSplit } from "@/lib";
import { PartnershipImageSectionComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  section: PartnershipImageSectionComponent | undefined;
};

export function SuccessStories({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".success-stories", {
      scrollTrigger: {
        start: "top 50%",
      },
    });
  });

  if (!section) return null;

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex flex-col lg:flex-row justify-between text-white overflow-hidden"
    >
      <div className="relative pb-[156px] pt-[59px] lg:pt-[143px] lg:pe-[80px] lg:pb-[236px] bg-primary rounded-ee-[52px] lg:rounded-ee-[200px] basis-1/2 self-stretch z-10">
        <h2 className="container-start lg:text-[64px] text-[32px] font-medium success-stories">
          {section.header}
        </h2>
      </div>

      <StrapiImage
        className="hidden lg:block object-cover ms-auto object-[80%]"
        image={section.backgroundLg}
        fill
      />

      <StrapiImage
        className="block lg:hidden object-cover w-full -mt-[52px]"
        image={section.backgroundSm}
      />
    </section>
  );
}
