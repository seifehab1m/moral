"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type CallToActionSectionProps = {
  bgURL: string;
  text: string;
  href: string;
  className?: string;
  hideBtn?: boolean;
};

export function CallToActionSection({
  bgURL,
  text,
  href,
  className,
  hideBtn = false,
}: CallToActionSectionProps) {
  const ref = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.from(ref.current, {
      duration: 1.3,
      ease: "none",
      scale: 1.1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 50%",
      },
    });
  });
  return (
    <div className={cn("relative pt-8 lg:pt-20 z-10 bg-white", className)}>
      <div className="relative h-[402px] lg:h-[864px]">
        <Image ref={ref} className="object-cover" alt="" src={bgURL} fill />
        <div className="container text-white relative z-10 flex flex-col items-end justify-end h-full pb-14 lg:pb-20">
          {!hideBtn && (
            <Button asChild>
              <Link href={href} target="_blank">
                {text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
