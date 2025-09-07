"use client";

import { cn, gsapSplit } from "@/lib/utils";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WhatWeDoSectorBrowserComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  sectors: WhatWeDoSectorBrowserComponent;
};

export function SectorBrowser({ sectors }: Props) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsapSplit(ref, ".construction-section");

    gsap.from(imageContainerRef.current, {
      opacity: 0,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
    gsap.from(".contruction-item-border", {
      scaleX: 0,
      duration: 1,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ref.current,
        start: "center bottom",
        once: true,
      },
    });

    gsap.from(".contruction-vertical-border", {
      scaleY: 0,
      duration: 1,
      transformOrigin: "bottom",
      scrollTrigger: {
        trigger: ref.current,
        start: "center bottom",
        once: true,
      },
    });
  });

  if (!sectors) return null;

  return (
    <section
      ref={ref}
      id={sectors?.ref}
      className="bg-white top-rounded-section"
    >
      <div className="container">
        <span className="lg:text-[32px] text-secondary construction-section">
          {sectors?.sectorTitle}
        </span>
        {!!sectors?.items?.length! && (
          <div
            key={sectors?.items?.[active].companyName}
            className="grid grid-cols-24 mt-3"
          >
            <div className="col-span-15">
              <h2 className="text-primary font-medium heading-1 max-w-[636px] construction-section">
                {sectors?.items?.[active].companyName}
              </h2>

              <div className="relative">
                <StrapiImage
                  ref={imageContainerRef}
                  image={sectors?.items?.[active].image}
                  className="object-cover rounded w-full aspect-[1.69] mt-3 lg:mt-10"
                />
                {!!sectors?.items?.[active].ctaLink && (
                  <Button asChild className="absolute bottom-8 right-8">
                    <a href={sectors?.items?.[active].ctaLink} target="_blank">
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div
              role="presentation"
              aria-hidden
              className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center contruction-vertical-border"
            />

            <ol className="col-span-8">
              {sectors?.items?.map(
                (c, i) =>
                  i !== active && (
                    <li
                      key={i}
                      className="border-b lg:border-b-2 border-b-secondary py-3 lg:py-[60px] last:border-b-transparent"
                    >
                      <button onClick={() => setActive(i)} className="w-full">
                        <p className="text-secondary font-medium text-[12px] lg:text-[48px] break-words text-start min-w-0 construction-section">
                          {c.companyName}
                        </p>
                      </button>
                    </li>
                  ),
              )}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
