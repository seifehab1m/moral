"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../../../public/53-east.svg";
import { cn, gsapSplit } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export function FlagshipSpotlight() {
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
          <p className="text-xl split-spotlight">Flagship Spotlight</p>
          <h2 className="heading-2 font-medium mt-3 lg:mt-12 max-w-[496px] split-spotlight">
            A place that honours your heritage and nutures your future.
          </h2>
        </div>
        <Image
          ref={logoRef}
          className="max-w-[262px] lg:max-w-[343px]"
          src={logo}
          alt=""
        />
      </div>
      <Image className="object-cover" src="/53East.png" alt="" fill />
      <Button
        ref={buttonRef}
        className="relative z-10 lg:mb-20 lg:me-24 max-lg:self-end max-lg:mt-72 max-lg:mb-4 max-lg:me-7"
        asChild
      >
        <Link href={`/core-verticals?sec=real-estate`}>Visit Website</Link>
      </Button>
    </section>
  );
}
