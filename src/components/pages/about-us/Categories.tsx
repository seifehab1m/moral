"use client";
import { ArrowUpRight } from "lucide-react";
import { cn, gsapSplit } from "@/lib/utils";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      scaleY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });

    gsapSplit(ref, ".sector-item", {
      delay: 1,
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });

  return (
    <div className="top-rounded-section py-16">
      <div className="container">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 ">
          {categories.map((c, i) => (
            <Link
              href={`/core-verticals?sec=${c?.id}`}
              key={i}
              className={cn(
                "flex items-start justify-between uppercase w-full border-e border-e-[#D8D8D6] pe-8",
                i !== 0 && "lg:ps-8",
                i % 2 !== 0 && "max-lg:ps-8",
              )}
            >
              <h4 className="text-sm lg:text-[clamp(14px,1vw,18px)] font-medium text-primary w-full sector-item">
                {c?.name}
              </h4>
              <ArrowUpRight className="text-primary shrink-0 text-5xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  { name: "Real Estate Development & Management", id: "real-estate" },
  { name: "Construction", id: "construction" },
  { name: "Healthcare", id: "healthcare" },
  {
    name: "Financial Services, IT & Investment Management",
    id: "financial-services",
  },
  { name: "Hospitality", id: "hospitality" },
];
