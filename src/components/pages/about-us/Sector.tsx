"use client";

import { AboutSectorsComponent } from "@/cms/Api";
import { cn, gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { StrapiImage } from "@/components/ui";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  section: AboutSectorsComponent | undefined;
};

export default function Sectors({ section }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(ref, ".sector-description", {
      scrollTrigger: {
        start: "top 80%",
      },
    });

    gsap.from(imageRef.current, {
      scale: 1.2,
      duration: 2.5,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 20%",
      },
    });

    gsap.from(listRef.current, {
      scaleY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 80%",
      },
    });

    gsapSplit(listRef, ".sector-item", {
      delay: 1,
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });

  if (!section) return null;

  return (
    <section ref={ref}>
      <div className="top-rounded-section">
        <div className="container pb-4">
          <span className="sub-header sector-description">
            {section.subHeader}
          </span>
          <div className="flex md:flex-row flex-col md:justify-between md:items-center mt-2 lg:mt-[35px]">
            <h2
              className="text-secondary font-medium heading-1 lg:max-w-[590px] sector-description [&_b]:text-primary [&_b]:font-medium"
              dangerouslySetInnerHTML={{ __html: section.header! }}
            />
            <p className="md:w-1/2 heading-4 font-medium sector-description">
              {section.paragraph}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative">
        <StrapiImage
          ref={imageRef}
          className="object-cover object-center"
          quality={100}
          image={section.background}
          fill
        />
      </div>

      <div className="top-rounded-section">
        <div
          ref={listRef}
          className="container grid grid-cols-2 lg:grid-cols-5 gap-y-10"
        >
          {section.list?.map((s, i) => (
            <Link
              href={`/core-verticals?sec=${s?.id}`}
              key={s.id}
              className={cn(
                "flex items-start justify-between uppercase w-full border-e border-e-[#D8D8D6] pe-8",
                i !== 0 && "lg:ps-8",
                i % 2 !== 0 && "max-lg:ps-8",
              )}
            >
              <h4 className="text-sm lg:text-[clamp(14px,1vw,18px)] font-medium text-primary w-full sector-item">
                {s?.label}
              </h4>
              <ArrowUpRight className="text-primary shrink-0 text-5xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
