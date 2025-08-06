import React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "financial services & investment management",
  "Healthcare",
  "Real Estate Development & Management",
  "Construction",
  "IT Services",
  "Hospitality",
];

export default function Categories() {
  return (
    <div className="top-rounded-section py-16">
      <div className="container">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 gap-y-10 uppercase">
          {categories.map((c, i) => (
            <div className="flex gap-5">
              <div className="flex">
                <h4 className="md:text-[18px] text-sm font-medium text-primary">
                  {c}
                </h4>
                <ArrowUpRight className="text-primary shrink-0" size={30} />
              </div>
              {i !== categories.length - 1 && (
                <div className="line w-[1px] h-full bg-secondary " />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
