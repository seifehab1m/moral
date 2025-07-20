"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sectors = [
  {
    title: "Financial Services & Investment Management",
    imageURL: "/cta-image.jpg",
  },
  {
    title: "Healthcare",
    imageURL: "/cta-image.jpg",
  },
  {
    title: "Real Estate Development & Management",
    imageURL: "/cta-image.jpg",
  },
  {
    title: "Construction",
    imageURL: "/cta-image.jpg",
  },
  {
    title: "IT Services",
    imageURL: "/cta-image.jpg",
  },
  {
    title: "Hospitality",
    imageURL: "/cta-image.jpg",
  },
];

export function Sectors() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#CFCECD] top-rounded-section ">
      <div className="container">
        <div>
          <span className="sub-header">Sectors</span>

          <p className="mt-3 lg:mt-12 lg:text-2xl">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse
          </p>
        </div>

        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-8 h-full">
            <div className="min-h-[15%]">
              <span className="text-secondary font-medium text-base lg:text-[32px]">
                0{active + 1}
              </span>
              <h2 className="text-primary font-medium heading-3">
                {sectors[active].title}
              </h2>
            </div>

            <div className="relative h-[85%]">
              <Image
                src={sectors[active].imageURL}
                alt={sectors[active].title}
                className="object-cover rounded"
                fill
              />
              <Button asChild className="absolute bottom-20 right-8">
                <Link href="/">Watch Video</Link>
              </Button>
            </div>
          </div>

          <div className="w-[2px] bg-secondary col-span-1 justify-self-center" />

          <ol className="col-span-3 space-y-7 pt-4">
            {sectors?.map(
              (s, i) =>
                i !== active && (
                  <li
                    key={i}
                    className={cn(
                      i < sectors?.length - 1 &&
                        'after:content-[" "] after:block after:h-[1px] after:w-full after:bg-secondary after:mt-10',
                    )}
                  >
                    <button
                      className="cursor-pointer flex flex-col gap-2 items-start"
                      onClick={() => setActive(i)}
                    >
                      <span className="text-secondary font-medium text-base lg:text-[32px]">
                        0{i + 1}
                      </span>
                      <p className="text-primary font-medium heading-3 text-start">
                        {s.title}
                      </p>
                    </button>
                  </li>
                ),
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
