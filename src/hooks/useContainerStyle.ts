"use client";

import { useState, useRef, useLayoutEffect } from "react";

export function useContainerStyle() {
  const [containerStyle, setContainerStyle] = useState<CSSStyleDeclaration>();

  const container = useRef<Element>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      container.current = document.querySelector(".container");

      if (!container.current) return;

      const style = getComputedStyle(container.current);

      setContainerStyle(style);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    padding: containerStyle?.paddingLeft ?? "0px",
    margin: containerStyle?.marginLeft ?? "0px",
  } as const;
}
