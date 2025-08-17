"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sectors = [
  {
    title: "Real Estate Development & Management",
    imageURL: "/sectors.png",
  },
  {
    title: "Construction",
    imageURL: "/sectors.png",
  },
  {
    title: "Healthcare",
    imageURL: "/sectors.png",
  },
  {
    title: "Financial Services, IT & Investment Management",
    imageURL: "/sectors.png",
  },
  {
    title: "Hospitality",
    imageURL: "/sectors.png",
  },
  // {
  //   title: "IT Services",
  //   imageURL: "/sectors.png",
  // },
];

export function Sectors() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#CFCECD] top-rounded-section">
      <div className="container">
        <div>
          <span className="sub-header font-medium">Our Sectors</span>

          <p className="mt-3 lg:mt-12 lg:text-2xl font-medium text-light-black">
            MRBF Holding manages sizeable assets across investment and financial
            services, healthcare, real estate, construction, IT services and
            hospitality. It delivers experiences at the forefront of market
            expectation – all fuelled by an unwavering dedication to innovation,
            customer-centricity and sustainable quality.
          </p>
        </div>

        <div className="grid grid-cols-24 mt-10 lg:mt-[94px]">
          <div className="col-span-16 h-full">
            <div>
              <span className="text-secondary font-medium text-base lg:text-[32px]">
                0{active + 1}
              </span>
              <h2 className="text-primary font-medium heading-3 lg:max-w-[410px] mt-1 lg:mt-2">
                {sectors[active].title}
              </h2>
            </div>

            <div className="relative h-[78%] mt-4 lg:mt-[10px]">
              <Image
                src={sectors[active].imageURL}
                alt={sectors[active].title}
                className="object-cover rounded"
                fill
              />
              {/* <Button asChild className="absolute bottom-8 right-8"> */}
              {/*   <Link href="/">Watch Video</Link> */}
              {/* </Button> */}
            </div>
          </div>

          <div className="w-[1px] lg:w-[2px] bg-secondary col-span-1 justify-self-center" />

          <ol className="col-span-7 space-y-2 lg:space-y-7 lg:pt-4">
            {sectors?.map(
              (s, i) =>
                i !== active && (
                  <li
                    key={i}
                    className={cn(
                      i < sectors?.length - 1 &&
                        'after:content-[" "] after:block after:h-[1px] after:lg:h-[2px] after:w-full after:bg-secondary after:mt-2 after:lg:mt-10'
                    )}
                  >
                    <button
                      className=" flex flex-col gap-2 items-start"
                     // onClick={() => setActive(i)}
                    >
                      <span className="text-secondary font-medium text-base lg:text-[32px]">
                        0{i + 1}
                      </span>
                      <p className="text-primary font-medium heading-3 text-start">
                        {s.title}
                      </p>
                    </button>
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
