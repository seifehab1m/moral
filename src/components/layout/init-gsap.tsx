"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Suspense, useLayoutEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrollToPlugin,
);

export function InitGSAP({ children }: React.PropsWithChildren) {
  return (
    <Suspense>
      <InitGSAPMain>{children}</InitGSAPMain>
    </Suspense>
  );
}

export function InitGSAPMain({ children }: React.PropsWithChildren) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTo = useSearchParams().get("sec");
  const pathname = usePathname();

  useGSAP(() => {
    createScrollSmoother(wrapperRef, contentRef);

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

  useLayoutEffect(() => {
    if (pathname === "/contact-us") ScrollSmoother.get()?.kill();
    return () => {
      if (!ScrollSmoother.get()) createScrollSmoother(wrapperRef, contentRef);
    };
  }, [pathname]);

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

function createScrollSmoother(
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
) {
  return ScrollSmoother.create({
    wrapper: wrapperRef.current!,
    content: contentRef.current!,
    smooth: 2,
    effects: true,
    normalizeScroll: true,
  });
}
