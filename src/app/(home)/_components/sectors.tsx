"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import img from "../../../../public/sectors.png";

export function Sectors() {
  const [active, setActive] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    SplitText.create(".split-sectors-heading", {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          yPercent: 150,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            once: true,
          },
        });
      },
    });

    SplitText.create(".split-sectors-body", {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.2,
          scrollTrigger: {
            trigger: bodyRef.current,
            start: "center bottom",
            once: true,
          },
        });
      },
    });

    gsap.from(".sector-border", {
      scaleX: 0,
      duration: 1,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "center bottom",
        once: true,
      },
    });

    gsap.from(".sector-vertical-border", {
      scaleY: 0,
      duration: 1,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "center bottom",
        once: true,
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      yPercent: 10,
      duration: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "center bottom",
      },
    });
  });

  return (
    <section className="bg-[#CFCECD] top-rounded-section">
      <div className="container">
        <div ref={headingRef}>
          <span className="sub-header font-medium split-sectors-heading">
            Our Sectors
          </span>
          <p className="mt-3 lg:mt-12 lg:text-2xl font-medium text-light-black split-sectors-heading">
            MRBF Holding manages sizeable assets across investment and financial
            services, healthcare, real estate, construction, IT services and
            hospitality. It delivers experiences at the forefront of market
            expectation – all fuelled by an unwavering dedication to innovation,
            customer-centricity and sustainable quality.
          </p>
        </div>

        <div ref={bodyRef} className="grid grid-cols-24 mt-10 lg:mt-[94px]">
          <div className="col-span-16 self-stretch">
            <div>
              <span className="text-secondary font-medium text-base lg:text-[32px] split-sectors-body">
                0{active + 1}
              </span>
              <h2 className="text-primary font-medium heading-3 lg:max-w-[410px] mt-1 lg:mt-2 split-sectors-body">
                {sectors[active].title}
              </h2>
            </div>

            <Image
              ref={imageRef}
              src={img}
              alt={sectors[active].title}
              className="object-cover rounded mt-4 lg:mt-[35px]"
            />
          </div>

          <div
            role="presentation"
            aria-hidden
            className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center sector-vertical-border"
          />

          <ul className="col-span-7 space-y-2 lg:space-y-7 lg:pt-4">
            {sectors?.map(
              (s, i) =>
                i !== active && (
                  <li key={i}>
                    <button className="flex flex-col gap-2 items-start split-sectors-body max-w-[30ch]">
                      <span className="text-secondary font-medium text-base lg:text-[32px]">
                        0{i + 1}
                      </span>
                      <p className="text-primary font-medium heading-3 text-start">
                        {s.title}
                      </p>
                    </button>
                    {i < sectors?.length - 1 && (
                      <div className="h-[1px] lg:h-[2px] w-full bg-secondary mt-2 lg:mt-10 sector-border" />
                    )}
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

const sectors = [
  {
    title: "Real Estate Development & Management",
    imageURL: "/sectors.png",
  },
  {
    title: "Construction",
    imageURL: "/sectors.png",
  },
  {
    title: "Healthcare",
    imageURL: "/sectors.png",
  },
  {
    title: "Financial Services, IT & Investment Management",
    imageURL: "/sectors.png",
  },
  {
    title: "Hospitality",
    imageURL: "/sectors.png",
  },
];
