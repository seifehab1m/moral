"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function InitGSAP({ children }: React.PropsWithChildren) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    ScrollTrigger.create({
      trigger: contentRef.current!,
      // pin: true,
      start: "top center",
      // end: "+=300",
      markers: true,
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </>
  );
}
