"use client";

import { useLayoutEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export function useDisableScrolling(isLocked: boolean) {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get();
    if (isLocked) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      smoother?.paused(true);
      return () => {
        document.body.style.overflow = original;
        smoother?.paused(false);
      };
    }
  }, [isLocked]);
}
