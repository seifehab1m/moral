"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const comapnies = [
  {
    title: "Al Talal Technical Industries Co. LLC",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Wooden Art Industries L.L.C",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Electromechanical Credible Contractors LLC",
    imageURL: "/sector-portfolio.png",
  },
  {
    title: "Bused Contracting and General Transport Co. L.LC.",
    imageURL: "/sector-portfolio.png",
  },
];

export function SectorPortfolio() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white top-rounded-section">
      <div className="container">
        <span className="lg:text-[32px] text-secondary">Construction</span>

        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-8 h-full">
            <div className="min-h-[15%]">
              <h2 className="text-primary font-medium heading-1 max-w-[636px] mb-10">
                {comapnies[active].title}
              </h2>
            </div>

            <div className="relative h-[85%]">
              <Image
                src={comapnies[active].imageURL}
                alt={comapnies[active].title}
                className="object-cover rounded"
                fill
              />
              <Button asChild className="absolute bottom-8 right-8">
                <Link href="/">Watch Video</Link>
              </Button>
            </div>
          </div>

          <div className="w-[2px] bg-secondary col-span-1 justify-self-center" />

          <ol className="col-span-3 lg:space-y-[60px] lg:py-[52px]">
            {comapnies?.map(
              (s, i) =>
                i !== active && (
                  <li
                    key={i}
                    className={cn(
                      i < comapnies?.length - 1 &&
                        'after:content-[" "] after:block after:h-[2px] after:w-full after:bg-secondary after:mt-[60px]',
                    )}
                  >
                    <button
                      className="cursor-pointer flex flex-col gap-2 items-start"
                      onClick={() => setActive(i)}
                    >
                      <p className="text-secondary font-medium heading-1 text-start">
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
