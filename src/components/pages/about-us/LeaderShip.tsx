"use client";

import React, { useRef } from "react";
import leader1 from "@/assets/images/leader-1.jpg";
import leader2 from "@/assets/images/leader-2.jpg";
import leader3 from "@/assets/images/leader-5.jpg";
import leader4 from "@/assets/images/leader-6.jpg";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import gsap from "gsap";

export default function LeaderShip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".leadership-list", {
      scrollTrigger: {
        start: "top 80%",
      },
    });

    const leaders = gsap.utils.toArray(
      leadersRef.current!.children,
    ) as HTMLElement[];

    leaders.forEach((l, i) => {
      gsap.from(l, {
        xPercent: i % 2 === 0 ? -20 : 20,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: l,
          start: "top 80%",
          markers: true,
        },
      });
    });
  });

  return (
    <section ref={containerRef} className="top-rounded-section py-16">
      <div className="container">
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <span className="sub-header leadership-list">Leadership</span>
          <h2 className="text-primary font-medium heading-1 leadership-list">
            Value creators
            <br /> and builders.
          </h2>
        </div>
        <div ref={leadersRef}>
          {leaders.map((l) => (
            <LeaderCard key={l.name} {...l} />
          ))}
        </div>
      </div>
    </section>
  );
}

type LeaderCardProps = {
  name: string;
  position: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  description?: string;
};

function LeaderCard({ name, position, image, description }: LeaderCardProps) {
  return (
    <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
      <Image
        className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <div className="flex flex-col justify-between h-fit my-auto">
        <div>
          <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
            {position}
          </h3>
          <h5 className="mt-10 heading-3 text-primary">{name}</h5>
          <p className="text-black mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

const leaders: LeaderCardProps[] = [
  {
    name: "Mohammed Rashed Alfalasi",
    position: "Chairman, MRBF Holding",
    image: {
      src: leader1.src,
      width: leader1.width,
      height: leader1.height,
      alt: "Mohammed Rashed Alfalasi",
    },
    description:
      "A distinguished Emirati entrepreneur and strategic business leader, recognized for his visionary approach, ethical practices, and long-standing commitment to economic growth and community development across the UAE.",
  },
  {
    name: "Ahmed E. Rabbat",
    position: "CEO & Group Vice Chairman, MRBF Holding",
    image: {
      src: leader2.src,
      width: leader2.width,
      height: leader2.height,
      alt: "Ahmed E. Rabbat",
    },
    description:
      "A dynamic executive and strategic business leader, known for his forward-thinking approach and ability to drive sustainable transformation across industries.",
  },
  {
    name: "Brian Carey",
    position: "Chief Strategy & Implementation Officer",
    image: {
      src: leader3.src,
      width: leader3.width,
      height: leader3.height,
      alt: "Brian Carey",
    },
  },
  {
    name: "Reza Nader-Sepahi",
    position: "Group Chief Governance & Compliance Officer",
    image: {
      src: leader4.src,
      width: leader4.width,
      height: leader4.height,
      alt: "Reza Nader-Sepahi",
    },
  },
];
