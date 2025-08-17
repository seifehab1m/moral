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

  useGSAP(() => {
    const headingText = gsap.utils.toArray(headingRef.current!);

    headingText.forEach(() => {
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
              // scrub: true,
              // end: "clamp(500px)",
              once: true,
            },
          });
        },
      });
    });

    const bodyText = gsap.utils.toArray(bodyRef.current!);

    bodyText.forEach(() => {
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
              src={img}
              alt={sectors[active].title}
              className="object-cover rounded mt-4 lg:mt-[35px]"
            />
          </div>

          <div className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center" />

          <ol className="col-span-7 space-y-2 lg:space-y-7 lg:pt-4">
            {sectors?.map(
              (s, i) =>
                i !== active && (
                  <li
                    key={i}
                    className={cn(
                      i < sectors?.length - 1 &&
                        'after:content-[" "] after:block after:h-[1px] after:lg:h-[2px] after:w-full after:bg-secondary after:mt-2 after:lg:mt-10',
                    )}
                  >
                    <button
                      className="flex flex-col gap-2 items-start split-sectors-body max-w-[30ch]"
                      // onClick={() => setActive(i)}
                    >
                      <span className="text-secondary font-medium text-base lg:text-[32px]">
                        0{i + 1}
                      </span>
                      <p className="text-primary font-medium heading-3 text-start">
                        {s.title}
                      </p>
                    </button>
                  </li>
                ),
            )}
          </ol>
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
