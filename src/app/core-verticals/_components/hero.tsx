"use client";

import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsapSplit } from "@/lib";
import { WhatWeDoHeroComponent } from "@/cms/Api";
import { CMSStrapiImage } from "@/types";
import { StrapiImage } from "@/components/ui";

type Props = {
  hero: WhatWeDoHeroComponent | undefined;
};

export function Hero({ hero }: Props) {
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

  if (!hero) return null;

  return (
    <main className="pt-[92px] lg:pt-[230px] bg-white">
      <div ref={textRef} className="container">
        <h1 className="sub-header vertical">{hero?.subHeader}</h1>
        <h2
          className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8 vertical [&_b]:text-primary [&_b]:font-medium"
          dangerouslySetInnerHTML={{ __html: hero?.header! }}
        />
        <p className="text-xs lg:text-2xl mt-3 lg:font-medium lg:mt-12 text-light-black vertical">
          {hero?.paragraph}
        </p>
      </div>

      <div
        ref={cardsRef}
        className="flex flex-nowrap lg:grid lg:grid-cols-5 mt-6 lg:mt-16 gap-[7px] max-lg:overflow-x-scroll max-lg:px-[1rem] container"
      >
        {hero?.sectorCards?.map((c, i) => (
          <Card title={c?.title!} key={i} id={c?.ref!} image={c?.image!} />
        ))}
      </div>
    </main>
  );
}

type CardProps = {
  title: string;
  id: string;
  image: CMSStrapiImage;
};

function Card({ title, id, image }: CardProps) {
  const [hoverd, setHoverd] = useState(false);
  const cover_1 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const duration = 0.9;
    const ease = "circ.inOut";

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

      <StrapiImage
        image={image}
        ref={imageRef}
        className="object-cover rounded"
        quality={100}
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
