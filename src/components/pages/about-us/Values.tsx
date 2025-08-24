"use client";

import { useId, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import gsap from "gsap";

export default function Values() {
  return (
    <div className="bg-[#CFCECD]">
      <div className="container py-16">
        <span className="block sub-header mb-11">Values</span>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-18">
          {values.map((v) => (
            <ValueCard key={v.name} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const className = "value-card" + id;

  useGSAP(() => {
    gsap.from(ref.current?.querySelector(".line")!, {
      scaleX: 0,
      duration: 1,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });

    gsapSplit(ref, `.${className}`, {
      duration: 1.3,
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });
  return (
    <div ref={ref}>
      <h2 className={`heading-2 text-primary font-medium ${className}`}>
        {name}
      </h2>
      <p className={`mt-6 text-sm md:text-base font-medium ${className}`}>
        {description}
      </p>
      <div
        aria-hidden
        role="presentation"
        className="line w-full h-[1.5px] bg-secondary my-7"
      />
    </div>
  );
}

const values = [
  {
    name: "Agility and Intent",
    description:
      "An investment strategy that moves decisively in the considered pursuit of dynamic opportunities and innovative synergies across verticals.",
  },
  {
    name: "Sustainable Impact",
    description:
      "An ethical belief in using the power of investment to generate more than just dividends – providing sustainable returns for shareholders and real impact for communities.",
  },
  {
    name: "Quality and Excellence",
    description:
      "Robust standards, high-calibre partners and careful consideration of customers’ needs ensure that MRBH Holding delivers at the apex of market expectation.",
  },
  {
    name: "Strategic Foresight",
    description:
      "Perfectly attuned to the market, MRBF Holding invests and develops with foresight to strike long and short-term opportunities at the right time to maximise returns.",
  },
];
