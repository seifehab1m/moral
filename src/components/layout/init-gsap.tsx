"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { useSearchParams } from "next/navigation";
// import { Cursor } from "../ui";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrollToPlugin,
);

export function InitGSAP({ children }: React.PropsWithChildren) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollTo = useSearchParams().get("sec");

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
      start: "top center",
    });
  }, []);

  useGSAP(() => {
    const smoother = ScrollSmoother.get();
    const target = document.querySelector<HTMLElement>("#" + scrollTo);

    if (!scrollTo || !smoother || !target) return;

    const y = target.getBoundingClientRect().top + smoother.scrollTop();
    smoother.scrollTo(y - 200, true);
  }, [scrollTo]);

  return (
    <>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
      {/* <Cursor /> */}
    </>
  );
}
