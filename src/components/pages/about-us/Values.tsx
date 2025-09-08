"use client";

import gsap from "gsap";
import { useId, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import { AboutValuesComponent, AboutValuesItemComponent } from "@/cms/Api";

type Props = {
  section: AboutValuesComponent | undefined;
};

export default function Values({ section }: Props) {
  if (!section) return null;
  return (
    <div className="bg-[#CFCECD]">
      <div className="container py-16">
        <span className="block sub-header mb-11">{section.subHeader}</span>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-18">
          {section?.list?.map((i) => (
            <ValueCard key={i.title} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, paragraph }: AboutValuesItemComponent) {
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
        {title}
      </h2>
      <p className={`mt-6 text-sm md:text-base font-medium ${className}`}>
        {paragraph}
      </p>
      <div
        aria-hidden
        role="presentation"
        className="line w-full h-[1.5px] bg-secondary my-7"
      />
    </div>
  );
}
