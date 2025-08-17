"use client";

import Image from "next/image";
// import heroImage from "../../../../public/hero-image.png";
import heroImage from "../../../../public/hero-2.jpg";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useRef } from "react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useHeaderTheme(false);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 2,
      ease: "none",
    });

    SplitText.create(headingRef.current, {
      type: "words",
      wordsClass: "word",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.words, {
          y: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 1.2,
          ease: "power1",
        });
      },
    });
  });
  return (
    <main className="relative">
      <Image
        ref={imageRef}
        src={heroImage}
        alt="hero-image"
        className="object-cover scale-115"
        fill
        quality={100}
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <div className="grid place-items-center relative z-10 h-screen max-h-[800px] lg:max-h-screen">
        <h1
          ref={headingRef}
          className="text-[32px] lg:text-[52px] text-grey-2 font-medium"
        >
          Future, Present.
        </h1>
      </div>
    </main>
  );
}
