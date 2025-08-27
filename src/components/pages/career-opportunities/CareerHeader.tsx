"use client";

import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import img from "@/assets/images/carrerHero.png";
import Image from "next/image";
import gsap from "gsap";

export default function CareerHeader() {
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

  return (
    <section ref={containerRef} className="pt-[90px] lg:pt-[230px]">
      <div className="container">
        <span className="sub-header career-header">
          Careers & Opportunities
        </span>
        <h1 className="mt-3 lg:mt-8 font-medium heading-1 text-secondary md:max-w-[750px] career-header">
          Build a better future,
          <br />
          <span className="text-primary career-header">
            {" "}
            inspired by the pursuit of <br /> opportunities.
          </span>
        </h1>
        <p className="heading-4 text-black font-medium mt-3 lg:mt-12 career-header">
          Join us in contributing to the future of the UAE and beyond,
          maximising your talent across sectors including financial services,
          healthcare, real estate, hospitality, and IT services.
        </p>
      </div>
      <div className="relative w-full lg:max-h-[864px] mt-6 lg:mt-[72px] overflow-hidden aspect-[1.52] lg:asepct-[2]">
        <Image
          ref={imageRef}
          src={img}
          className="object-cover object-bottom"
          fill
          alt=""
        />
        <div className="container flex flex-col justify-end h-full py-[40px] lg:py-[120px]">
          <h2
            ref={h2Ref}
            className="relative heading-1 text-white font-semibold career-header-2"
          >
            Shaping industries, <br />
            driving progress.
          </h2>
        </div>
      </div>
    </section>
  );
}
