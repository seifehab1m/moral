"use client";

import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { ArrowUpRight } from "lucide-react";
import cardImg from "../../../../public/core-vertical-card.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsapSplit } from "@/lib";

const cards = [
  { name: "Real Estate Development & Management", id: "real-estate" },
  { name: "Construction", id: "construction" },
  { name: "Healthcare", id: "healthcare" },
  {
    name: "Financial Services, IT & Investment Management",
    id: "financial-services",
  },
  { name: "Hospitality", id: "hospitality" },
];

export function Verticals() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useHeaderTheme(true);

  useGSAP(() => {
    gsapSplit(textRef, ".vertical");
    gsap.from(cardsRef.current!.children, {
      delay: 1.5,
      yPercent: 100,
      opacity: 0,
      duration: 0.9,
      stagger: 0.13,
      ease: "back",
    });
  });

  return (
    <main className="pt-[92px] lg:pt-[230px] bg-white">
      <div ref={textRef} className="container">
        <h1 className="sub-header vertical">What We Do</h1>
        <h2 className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8 vertical">
          Delivering{" "}
          <span className="text-primary">
            exceptional <br /> returns,
          </span>{" "}
          by building{" "}
          <span className="text-primary">exceptional businesses.</span>
        </h2>
        <p className="text-xs lg:text-2xl mt-3 lg:font-medium lg:mt-12 text-light-black vertical">
          MRBF Holding is committed to sectors that deliver sustainable returns
          and have a genuine impact on wider communities. Overseeing a pool of
          successful entities across financial services, healthcare, real
          estate, construction, hospitality and IT, it delivers premium
          experiences that evolve ahead of global trends, while maintaining
          timeless quality.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="flex flex-nowrap lg:grid lg:grid-cols-5 mt-6 lg:mt-16 gap-[7px] max-lg:overflow-x-scroll max-lg:px-[1rem] container"
      >
        {cards?.map((c, i) => (
          <Card title={c?.name} key={i} id={c?.id} />
        ))}
      </div>
    </main>
  );
}

type CardProps = {
  title: string;
  id: string;
};

function Card({ title, id }: CardProps) {
  const [hoverd, setHoverd] = useState(false);
  const cover_1 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const duration = 0.69;
    const ease = "power2.inOut";

    if (hoverd) {
      gsap.fromTo(
        cover_1.current,
        {
          duration,
          ease,
          yPercent: 0,
        },
        {
          duration,
          ease,
          yPercent: -100,
        },
      );

      gsap.fromTo(
        imageRef.current,
        {
          duration,
          ease,
          yPercent: 15,
        },
        {
          duration,
          ease,
          yPercent: 0,
        },
      );
    } else {
      gsap.fromTo(
        cover_1.current,
        {
          duration,
          ease,
          yPercent: 100,
        },
        {
          duration,
          ease,
          yPercent: 0,
        },
      );
      gsap.fromTo(
        imageRef.current,
        {
          duration,
          ease,
          yPercent: 0,
        },
        {
          duration,
          ease,
          yPercent: -15,
        },
      );
    }
  }, [hoverd]);

  const handleScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 100 },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      onClick={handleScroll}
      className="relative aspect-[2/3] max-lg:min-w-[196px] max-w-[196px] lg:max-w-[300px] rounded group flex flex-col justify-between p-3.5 lg:p-4 cursor-pointer overflow-clip"
    >
      <div
        aria-hidden
        role="presentation"
        ref={cover_1}
        className="absolute bg-[#D8D8D6] inset-0 size-full rounded cover-1 z-10"
      />

      <Image
        src={cardImg}
        ref={imageRef}
        className="object-cover rounded"
        quality={100}
        alt="Card Image"
        fill
      />

      <h3 className="uppercase font-semibold text-sm lg:text-base text-primary lg:max-w-[200px] relative z-10 group-hover:text-white transition-colors duration-500">
        {title}
      </h3>

      <div className="text-white group-hover:text-primary relative z-10 duration-500 bg-secondary group-hover:bg-white p-2 rounded-[8px] self-end">
        <ArrowUpRight />
      </div>
    </div>
  );
}
