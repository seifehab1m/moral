"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn, gsapSplit } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { HomeSpotlightComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  spotlight: HomeSpotlightComponent | undefined;
};

export function FlagshipSpotlight({ spotlight }: Props) {
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsapSplit(textRef, ".split-spotlight", {
      scrollTrigger: {
        start: "top 90%",
      },
    });

    gsap.from(buttonRef.current!, {
      scale: 1.1,
      duration: 2,
      scrollTrigger: { trigger: buttonRef.current! },
    });

    gsap.from(logoRef.current!, {
      opacity: 0,
      duration: 2,
      scrollTrigger: { trigger: logoRef.current! },
    });
  });

  if (!spotlight) return null;

  return (
    <section className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between text-white">
      <div
        ref={textRef}
        className={cn(
          "relative z-10 px-4 py-6 lg:ps-[160px] lg:pe-[148px] lg:py-20 bg-primary min-h-[402px] lg:min-h-[850px] rounded-ee-[52px] lg:rounded-ee-[200px] lg:w-1/2",
          "flex flex-col justify-between overflow-hidden",
        )}
      >
        <div>
          <p className="text-xl split-spotlight">{spotlight.subHeader}</p>
          <h2 className="heading-2 font-medium mt-3 lg:mt-12 max-w-[496px] split-spotlight">
            {spotlight.header}
          </h2>
        </div>
        {spotlight.logo && (
          <StrapiImage
            ref={logoRef}
            className="max-w-[262px] lg:max-w-[343px]"
            image={spotlight.logo}
          />
        )}
      </div>
      <StrapiImage className="object-cover" image={spotlight.background} fill />
      {spotlight.callToAction && (
        <Button
          ref={buttonRef}
          className="relative z-10 lg:mb-20 lg:me-24 max-lg:self-end max-lg:mt-72 max-lg:mb-4 max-lg:me-7"
          asChild
        >
          <Link href={spotlight.callToAction.href!}>
            {spotlight.callToAction.label}
          </Link>
        </Button>
      )}
    </section>
  );
}
