"use client";

import { GlobalGlobalContactSectionComponent } from "@/cms/Api";
import { Button } from "@/components/ui/button";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";

type Props = {
  contact: GlobalGlobalContactSectionComponent | undefined;
};

export function ContactUs({ contact }: Props) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".contact-us-section", {
      scrollTrigger: {
        once: false,
      },
    });
  });

  if (!contact) return null;

  return (
    <>
      {pathname !== "/contact-us" && (
        <section
          ref={containerRef}
          className="bg-white relative z-10 py-[32px] lg:py-[80px]"
        >
          <div className="container">
            <div className="flex flex-row items-center justify-between gap-7">
              <h2
                className="text-gray-500 text-xl lg:text-[40px] font-medium max-w-[400px] leading-[1.17] contact-us-section [&_b]:text-primary [&_b]:font-medium"
                dangerouslySetInnerHTML={{ __html: contact.header! }}
              />
              {!!contact?.cta && (
                <Button variant="secondary" asChild>
                  <Link href={contact.cta.href!}>{contact.cta.label}</Link>
                </Button>
              )}
            </div>
            {!!contact?.paragraph && (
              <p className="mt-6 lg:mt-12 text-sm lg:text-2xl lg:font-medium text-secondary lg:text-black contact-us-section">
                {contact.paragraph}
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
