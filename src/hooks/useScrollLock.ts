"use client";

import { useLayoutEffect } from "react";

export function useScrollLock(isLocked: boolean) {
  useLayoutEffect(() => {
    if (isLocked) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isLocked]);
}
