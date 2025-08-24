"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

type CompanyDescriptionProps = {
  sectorName: string;
  description: string;
  companyName?: string;
  companyLogo?: string;
  className?: string;
  rounded?: boolean;
  id?: string;
};

export function CompanyDescription(props: CompanyDescriptionProps) {
  const logoRef = useRef<HTMLImageElement>(null);
  const uniqueClassname = props.id + "-company-description";

  console.log({ uniqueClassname });

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
  });

  return (
    <div
      id={props.id}
      className={cn("relative max-lg:my-[16px] bg-white z-10", props.rounded && "top-rounded-section")}
    >
      <div
        className={cn(
          "container flex flex-col lg:flex-row justify-between gap-3 lg:gap-10",
          props.className,
        )}
      >
        <div>
          <span className={`sub-header line uppercase ${uniqueClassname}`}>
            {props.sectorName}
          </span>
          {props.companyName && (
            <h2
              className={`heading-2 font-medium text-primary my-3 lg:max-w-[400px] ${uniqueClassname}`}
            >
              {props.companyName}
            </h2>
          )}
          {props.companyLogo && (
            <Image
              ref={logoRef}
              src={props.companyLogo}
              alt={props.companyName + " logo"}
              className="w-full max-w-[238px] lg:max-w-[390px]"
              width={390}
              height={126}
            />
          )}
        </div>
        <p
          className={`lg:max-w-[690px] text-xs lg:text-2xl text-light-black ${uniqueClassname}`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
