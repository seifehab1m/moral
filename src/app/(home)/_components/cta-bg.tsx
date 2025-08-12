"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type CallToActionBGProps = {
  imageURL: string;
  ctaURL?: string;
  ctaText?: string;
  headerText: string;
  className?: string;
};

export function CallToActionBG({
  imageURL,
  ctaURL,
  ctaText,
  headerText,
  className,
}: CallToActionBGProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: imageRef.current,
      scale: 1,
      duration: 2,
      ease: "none",
    });

    SplitText.create(headingRef.current, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: headingRef.current,
            // markers: true,
            scrub: true,
            end: "clamp(bottom center)",
            once: true,
          },
        });
      },
    });
  });

  return (
    <section
      className={cn(
        "relative min-h-[264px] lg:min-h-[864px] flex flex-col justify-end",
        className,
      )}
    >
      <Image
        ref={imageRef}
        src={imageURL}
        className="object-cover object-top scale-110"
        quality={100}
        alt=""
        fill
      />
      <div className="relative z-10 container flex flex-row gap-4 items-end lg:items-center justify-between mb-[38px]">
        <h2
          ref={headingRef}
          className="heading-1 text-white font-semibold max-w-[500px] line"
        >
          {headerText}
        </h2>
        {!!ctaURL && !!ctaText && (
          <Button variant="primary" asChild>
            <Link href={ctaURL}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
