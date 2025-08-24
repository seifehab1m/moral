"use client";

import { useRef } from "react";
import img from "@/assets/images/meeting.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// really, nigga?
export default function Meetings() {
  const ref = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.from(ref.current, {
      scale: 1.2,
      duration: 2.5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 20%",
      },
    });
  });

  return (
    <div className="w-full mt-14 min-h-screen py-12 lg:py-28 relative">
      <Image
        ref={ref}
        className="object-cover object-center"
        quality={100}
        src={img}
        alt=""
        fill
      />
    </div>
  );
}
