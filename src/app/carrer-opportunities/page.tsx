"use client";
import React, { useState } from "react";

const items = [
  {
    title: "01. Pioneering innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Suspendisse potenti. Phasellus vel sem at odio fringilla tincidunt non nec velit. Quisque eu sapien eu tortor consequat porta vel id turpis.",
  },
  {
    title: "02. Purposeful partnerships",
    description:
      "Aliquet odio mattis. Suspendisse potenti. Phasellus vel sem at odio.",
  },
  {
    title: "03. Pursuing excellence",
    description: "Short and sharp.",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div></div>

        <div className="flex gap-4 relative items-stretch">
          {/* ✅ Gray vertical line fixed */}
          <div className="w-[4px] min-w-[4px] shrink-0 bg-[#d9d8da]" />

          <div className="flex flex-col gap-10">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer relative pl-4 ${
                    isActive
                      ? "before:content-[''] before:absolute before:w-[4px] before:h-full before:bg-primary before:left-[-20px] before:top-0 before:rounded-[4px]"
                      : ""
                  }`}
                >
                  <h2
                    className={`heading-2 my-4 font-medium ${
                      isActive ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`pt-5 heading-5 ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
