"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { gsapSplit } from "@/lib";
import { AboutChairmanWordComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  section: AboutChairmanWordComponent | undefined;
};

export default function FutureAndPresent({ section }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      scale: 1.2,
      duration: 2.5,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 60%",
      },
    });

    gsapSplit(containerRef, ".ceo-word", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });
  });

  if (!section) return null;

  return (
    <div
      ref={containerRef}
      className="w-full mt-14 py-12 lg:py-[158px] bg-no-repeat bg-cover bg-center relative overflow-hidden"
    >
      <StrapiImage
        ref={imgRef}
        className="object-cover object-[80%] lg:object-top"
        quality={100}
        image={section.background!}
        fill
      />
      <div className="relative flex items-center h-full">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="max-w-[690px]">
            <h2 className="heading-1 text-white font-semibold leading-12 ceo-word">
              {section.header}
            </h2>
            <p className="heading-4 text-white lg:mt-8 mt-3 ceo-word">
              {section.paragraph}
            </p>
            <div className="flex justify-between text-white mt-18 flex-wrap gap-4">
              <div>
                <h4 className="heading-4 font-medium ceo-word">
                  {section.name}
                </h4>
                <h6 className="sub-header !text-white mt-2 ceo-word">
                  {section.position}
                </h6>
              </div>
              {/* <Link
                href="/"
                className="text-white bg-white p-2 rounded-[8px] self-end group transition duration-500"
              >
                <ArrowUpRight className="text-secondary" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
