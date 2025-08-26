"use client";

import { useLayoutEffect } from "react";
import { useContainerStyle } from "./useContainerStyle";

export function useInjectContainerStylesIntoRoot() {
  const { padding, margin } = useContainerStyle();

  useLayoutEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--container-margin", margin);
    root.style.setProperty("--container-padding", padding);
  }, [padding, margin]);
}
