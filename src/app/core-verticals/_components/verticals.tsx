"use client";

import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { ArrowUpRight } from "lucide-react";
import cardImg from "../../../../public/core-vertical-card.png";
import Image from "next/image";
import Link from "next/link";

const cards = [
  "Real Estate Development & Management",
  "Construction",
  "Healthcare",
  "Financial Services, IT & Investment Management",
  "Hospitality",
]

export function Verticals() {
  useHeaderTheme(true);
  return (
    <main className="pt-[92px] lg:pt-[230px] bg-white">
      <div className="container">
        <h1 className="sub-header">What We Do</h1>
        <h2 className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8">
          Delivering{" "}
          <span className="text-primary">
            {" "}
            exceptional <br /> returns,
          </span>{" "}
          by building{" "}
          <span className="text-primary">exceptional businesses.</span>
        </h2>
        <p className="text-xs lg:text-2xl mt-3 lg:font-medium lg:mt-12 text-light-black">
          MRBF Holding is committed to sectors that deliver sustainable returns
          and have a genuine impact on wider communities. Overseeing a pool of
          successful entities across financial services, healthcare, real
          estate, construction, hospitality and IT, it delivers premium
          experiences that evolve ahead of global trends, while maintaining
          timeless quality.
        </p>
      </div>
      <div className="flex flex-nowrap lg:grid lg:grid-cols-6 mt-6 lg:mt-16 gap-[7px] max-lg:overflow-x-scroll max-lg:px-[1rem] container">
        {cards.map((c, i) => (
          <Card title={c} key={i} />
        ))}
      </div>
    </main>
  );
}

type CardProps = {
  title: string;
  // imageURL: string;
};

function Card({ title }: CardProps) {
  return (
    <div className="relative aspect-[2/3] bg-[#D8D8D6] max-lg:min-w-[196px] max-w-[196px] lg:max-w-[300px] rounded group flex flex-col justify-between p-3.5 lg:p-4">
      <Image
        src={cardImg}
        className="object-cover rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        quality={100}
        alt=""
        fill
      />
      <h3 className="uppercase font-semibold text-sm lg:text-base text-primary lg:max-w-[200px] relative z-10 group-hover:text-white transition-colors duration-500">
        {title}
      </h3>

      <Link
        href="/"
        className="text-white group-hover:text-primary relative z-10 duration-500 bg-secondary group-hover:bg-white p-2 rounded-[8px] self-end"
      >
        <ArrowUpRight />
      </Link>
    </div>
  );
}
