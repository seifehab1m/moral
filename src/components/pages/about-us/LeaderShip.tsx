"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import { StrapiImage } from "@/components/ui";
import { AboutLeadershipComponent } from "@/cms/Api";

type Props = {
  section: AboutLeadershipComponent | undefined;
};

export default function LeaderShip({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".leadership-list", {
      scrollTrigger: {
        start: "top 80%",
      },
    });

    const leaders = gsap.utils.toArray(
      leadersRef.current!.children,
    ) as HTMLElement[];

    leaders.forEach((l, i) => {
      gsap.from(l, {
        xPercent: i % 2 === 0 ? -20 : 20,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: l,
          start: "top 80%",
        },
      });
    });
  });

  if (!section) return null;

  return (
    <section ref={containerRef} className="top-rounded-section py-16">
      <div className="container">
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <span className="sub-header leadership-list">
            {section.subHeader}
          </span>
          <h2
            className="text-primary font-medium heading-1 leadership-list [&_b]:text-primary [&_b]:font-medium"
            dangerouslySetInnerHTML={{ __html: section.header! }}
          />
        </div>
        <div ref={leadersRef}>
          {section?.leaders?.map(({ image, position, name, paragraph, id }) => (
            <div
              key={id}
              className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium"
            >
              <StrapiImage
                className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
                image={image}
              />
              <div className="flex flex-col justify-between h-fit my-auto">
                <div>
                  <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                    {position}
                  </h3>
                  <h5 className="mt-10 heading-3 text-primary">{name}</h5>
                  {!!paragraph && (
                    <p className="text-black mt-3">{paragraph}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
