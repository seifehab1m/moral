"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export function Stats() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const text = gsap.utils.toArray(textRef.current!);

    text.forEach(() => {
      SplitText.create(".split", {
        type: "words,lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
        onSplit: (instance) => {
          return gsap.from(instance.lines, {
            yPercent: 120,
            stagger: 0.1,
            scrollTrigger: {
              trigger: textRef.current,
              // markers: true,
              scrub: true,
              end: "clamp(bottom center)",
              once: true,
            },
          });
        },
      });
    });

    gsap.to(cardRef.current, {
      scrollTrigger: cardRef.current,
      ease: "power2",
      opacity: 1,
      duration: 1.3,
      yPercent: -100,
    });
  });

  return (
    <section className="top-rounded-section">
      <div className="container flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <div ref={textRef} className="flex-[.6]">
          <span className="sub-header split">Key Numbers</span>
          <h2 className="text-gray-500 heading-1 mt-2 mb-[46px] lg:mt-6 font-medium split">
            Building legacies, <br />
            <span className="text-primary">bettering lives</span>
          </h2>
          <p className="text-light-black font-medium lg:text-2xl lg:max-w-[690px] lg:mt-[99px] split">
            MRBF Holding is a new kind of holding company. Built on 55 years of
            diversified success, and equipped with a keen sense of future
            demand, it operates with agility and intent – focused on
            opportunities that deliver sustainable returns for investors and
            genuine impact for communities.
          </p>
        </div>
        <div
          ref={cardRef}
          className="rounded-card flex-[.4] translate-y-full opacity-0"
        >
          <div>
            <p className="text-[24px] lg:text-[72px] font-medium">+1,850</p>
            <p className="mt-0 mb-10 text-xs lg:text-xl">
              Employees across the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
