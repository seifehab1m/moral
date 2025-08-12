"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });

    let yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX - 8);
      yTo(e.clientY - 8);
    });

    window.addEventListener("mousedown", () => {
      gsap.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.6,
        ease: "power3",
      });
    });

    window.addEventListener("mouseup", () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3",
      });
    });
  });

  return (
    <div
      ref={cursorRef}
      role="presentation"
      aria-hidden="true"
      className="size-10 border-2 border-primary rounded-full fixed z-50 pointer-events-none outer-cursor"
    >
      <div className="size-3.5 bg-primary rounded-full absolute top-1/2 start-1/2 -translate-1/2 inner-cursor" />
    </div>
  );
}
