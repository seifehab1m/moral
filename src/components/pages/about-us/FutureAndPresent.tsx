"use client";

import React from "react";
import img from "@/assets/images/futeure.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { gsapSplit } from "@/lib";

// py-12 lg:py-[158px]
export default function FutureAndPresent() {
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

  return (
    <div
      ref={containerRef}
      className="w-full mt-14 py-12 lg:py-[158px] bg-no-repeat bg-cover bg-center relative"
    >
      <Image
        ref={imgRef}
        className="object-cover object-[80%] lg:object-top"
        quality={100}
        src={img}
        alt=""
        fill
      />
      <div className="relative flex items-center h-full">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="max-w-[690px]">
            <h2 className="heading-1 text-white font-semibold leading-12 ceo-word">
              Future, Present.
            </h2>
            <p className="heading-4 text-white lg:mt-8 mt-3 ceo-word">
              Like our home, the UAE, MRBF Holding thinks long-term, acts
              decisively and moves with precision. Over the years, our family
              business has evolved to deliver exceptional investor returns and
              customer experiences across an ever-expanding breadth of sectors.
              To this end, our investment philosophy is rooted in clarity of
              purpose, deep market understanding and a keen sense of future
              demand focused on maximising value. We are proud of the legacy and
              partnerships we have built, and ambitious to embrace the
              technology empowered future.
            </p>
            <div className="flex justify-between text-white mt-18 flex-wrap gap-4">
              <div>
                <h4 className="heading-4 font-medium ceo-word">
                  Mohammed Rashed Alfalasi
                </h4>
                <h6 className="sub-header !text-white mt-2 ceo-word">
                  Group Chairman
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
