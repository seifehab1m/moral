"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { HomeSectorsComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";

type Props = {
  sectors: HomeSectorsComponent | undefined;
};

export function Sectors({ sectors }: Props) {
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

  if (!sectors) return null;

  return (
    <section className="bg-[#CFCECD] top-rounded-section">
      <div className="container">
        <div ref={headingRef}>
          <span className="sub-header font-medium split-sectors-heading">
            {sectors?.subHeader}
          </span>
          <p className="mt-3 lg:mt-12 lg:text-2xl font-medium text-light-black split-sectors-heading">
            {sectors?.paragraph}
          </p>
        </div>

        {!!sectors?.sectorItem?.length && (
          <div ref={bodyRef} className="grid grid-cols-24 mt-10 lg:mt-[94px]">
            <div className="col-span-16 self-stretch">
              <div>
                <span className="text-secondary font-medium text-base lg:text-[32px] split-sectors-body">
                  0{active + 1}
                </span>
                <h2 className="text-primary font-medium heading-3 lg:max-w-[410px] mt-1 lg:mt-2 split-sectors-body">
                  {sectors?.sectorItem?.[active].name}
                </h2>
              </div>

              <StrapiImage
                ref={imageRef}
                image={sectors?.sectorItem?.[active].image}
                className="object-cover rounded mt-4 lg:mt-[35px] w-full"
              />
            </div>

            <div
              role="presentation"
              aria-hidden
              className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center sector-vertical-border"
            />

            <ul className="col-span-7 space-y-2 lg:space-y-7 lg:pt-4">
              {sectors?.sectorItem?.map(
                (s, i) =>
                  i !== active && (
                    <li
                      key={i}
                      className="border-b lg:border-b-2 border-b-secondary pb-3 lg:pb-10 last:border-b-transparent "
                    >
                      <button
                        onClick={() => setActive(i)}
                        className="flex flex-col gap-2 items-start split-sectors-body max-w-[30ch] cursor-pointer"
                      >
                        <span className="text-secondary font-medium text-base lg:text-[32px]">
                          0{i + 1}
                        </span>
                        <p className="text-primary font-medium heading-3 text-start">
                          {s?.name}
                        </p>
                      </button>
                    </li>
                  ),
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
