import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "Real Estate Development & Management",
  "Construction",
  "Healthcare",
  "Financial Services, IT & Investment Management",
  "Hospitality",
];

export default function Categories() {
  return (
    <div className="top-rounded-section py-16">
      <div className="container">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-y-10 ">
          {categories.map((c, i) => (
            <div
              className={cn(
                "flex items-start justify-between uppercase w-full border-e border-e-[#D8D8D6] pe-8",
                i !== 0 && "lg:ps-8",
                i % 2 !== 0 && "max-lg:ps-8"
              )}
            >
              <h4 className="text-sm lg:text-[clamp(14px,1vw,18px)] font-medium text-primary w-full">
                {c}
              </h4>
              <ArrowUpRight className="text-primary shrink-0 text-5xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
