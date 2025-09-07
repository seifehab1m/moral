"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { WhatWeDoCompanySectionComponent } from "@/cms/Api";
import { Button, StrapiImage } from "@/components/ui";
import Link from "next/link";

type Props = {
  company: WhatWeDoCompanySectionComponent | undefined;
};

export function CompanySection({ company }: Props) {
  const logoRef = useRef<HTMLImageElement>(null);
  const uniqueClassname = company?.name + "-company-description";
  const ctaRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const start = "top 80%";
    gsap.from(logoRef.current, {
      duration: 1.2,
      opacity: 0,
      xPercent: -20,
      scrollTrigger: {
        trigger: logoRef.current,
        start,
      },
    });

    SplitText.create(`.${uniqueClassname}`, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.25,
          scrollTrigger: {
            trigger: `.${uniqueClassname}`,
            start,
          },
        });
      },
    });

    gsap.from(ctaRef.current, {
      duration: 1.3,
      ease: "none",
      scale: 1.1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 50%",
      },
    });
  });

  if (!company) return null;

  return (
    <>
      <div
        id={company.ref}
        className="relative max-lg:my-[16px] bg-white z-10 py-3 lg:py-16"
      >
        <div className="container flex flex-col lg:flex-row justify-between gap-3 lg:gap-10">
          <div>
            <span className={`sub-header line uppercase ${uniqueClassname}`}>
              {company?.sectorTitle}
            </span>

            {!!company?.logo ? (
              <StrapiImage
                ref={logoRef}
                image={company.logo}
                className="w-full max-w-[238px] lg:max-w-[390px]"
              />
            ) : (
              <h2
                className={`heading-2 font-medium text-primary my-3 lg:max-w-[400px] ${uniqueClassname}`}
              >
                {company.name}
              </h2>
            )}
          </div>
          <p
            className={`lg:max-w-[690px] text-xs lg:text-2xl text-light-black ${uniqueClassname}`}
          >
            {company?.paragraph}
          </p>
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <div className="relative h-[402px] lg:h-[864px]">
          <StrapiImage
            image={company?.ctaBackground}
            ref={ctaRef}
            className="object-cover"
            fill
          />
          {!!company?.ctaLink && (
            <div className="container text-white relative z-10 flex flex-col items-end justify-end h-full pb-14 lg:pb-20">
              <Button asChild>
                <a href={company?.ctaLink} target="_blank">
                  Visit Website
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
