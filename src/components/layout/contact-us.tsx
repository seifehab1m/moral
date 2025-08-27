"use client";
import { Button } from "@/components/ui/button";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export function ContactUs() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".contact-us-section", {
      scrollTrigger: {
        once: false,
      },
    });
  });

  return (
    <>
      {pathname !== "/contact-us" && (
        <section
          ref={containerRef}
          className="bg-white relative z-10 py-[32px] lg:py-[80px]"
        >
          <div className="container">
            <div className="flex flex-row items-center justify-between gap-7">
              <h2 className="text-gray-500 text-xl lg:text-[40px] font-medium max-w-[400px] leading-[1.17] contact-us-section">
                Explore{" "}
                <span className="text-primary">partnership opportunities</span>
              </h2>
              <Button variant="secondary" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
            <p className="mt-6 lg:mt-12 text-sm lg:text-2xl lg:font-medium text-secondary lg:text-black contact-us-section">
              MRBF Holding is focused identifying new growth frontiers across
              key industries. If you are an emerging business looking to strike
              purposeful opportunities, please get in touch.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
