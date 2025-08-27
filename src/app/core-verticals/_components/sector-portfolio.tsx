"use client";

import { cn, gsapSplit } from "@/lib/utils";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function SectorPortfolio({ id }: { id: string }) {
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

  return (
    <section ref={ref} id={id} className="bg-white top-rounded-section">
      <div className="container">
        <span className="lg:text-[32px] text-secondary construction-section">
          Construction
        </span>

        <div className="grid grid-cols-24 mt-3">
          <div className="col-span-15">
            <div className="min-h-[15%]">
              <h2 className="text-primary font-medium heading-1 max-w-[636px] mb-3 lg:mb-10 construction-section">
                {comapnies[active].title}
              </h2>
            </div>

            <div className="relative h-[85%]">
              <Image
                ref={imageContainerRef}
                src={comapnies[active].imageURL}
                alt={comapnies[active].title}
                className="object-cover rounded"
                fill
              />
              <Button asChild className="absolute bottom-8 right-8">
                <Link href="https://buset.ae" target="_blank">
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>

          <div
            role="presentation"
            aria-hidden
            className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center contruction-vertical-border"
          />

          <ol className="col-span-8 lg:space-y-[60px] lg:py-[52px]">
            {comapnies?.map(
              (s, i) =>
                i !== active && (
                  <li key={i}>
                    <button className=" w-full">
                      <p className="text-secondary font-medium heading-1 break-words text-start min-w-0 construction-section">
                        {s.title}
                      </p>
                    </button>
                    {i < comapnies.length && (
                      <div
                        aria-hidden
                        role="presentation"
                        className="h-[1px] lg:h-[2px] :w-full bg-secondary my-[30px] lg:my-[60px] contruction-item-border"
                      />
                    )}
                  </li>
                ),
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

const comapnies = [
  {
    title: "Buset Contracting and General Transport Co. LLC",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Al Tala Technical Industries Co. LLC",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Wooden Art Industries LLC",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Electromechanical Credible Contractors LLC",
    imageURL: "/sector-portfolio.png",
  },
];
