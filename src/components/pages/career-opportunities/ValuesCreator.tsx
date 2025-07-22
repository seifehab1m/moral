"use client";
import React, { useState } from "react";

const items = [
  {
    title: "01. Pioneering innovation",
    description:
      "The nimble pursuit of ever-evolving opportunities across multiple industries.",
  },
  {
    title: "02. Sustainable Impact",
    description:
      "An ethical belief in using the power of investment to generate more than just dividends.",
  },
  {
    title: "03. Quality and Excellence",
    description: "Driven by robust standards, a customer-centric ethos, and high-calibre people and partners",
  },
];

export default function ValuesCreator() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="transform -translate-y-12">
      <div className="rounded-t-[40px] py-10   bg-white w-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 container">
          <div>
            <h6 className="text-secondary text-[20px] font-medium">
             Our Values
            </h6>
          </div>

          <div className="flex gap-4 relative items-stretch me-6">
            {/* ✅ Gray vertical line fixed */}
            <div className="w-[4px] min-w-[4px] shrink-0 bg-[#d9d8da]" />

            <div className="flex flex-col gap-6">
              <h2
                className={`heading-2 font-medium text-primary md:max-w-[60%]`}
              >
             Agility and Intent
              </h2>
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer relative ps-4 ${
                      isActive
                        ? "before:content-[''] before:absolute before:w-[4px] before:h-[50%] before:bg-primary before:left-[-20px] before:top-8 before:rounded-[4px]"
                        : ""
                    }`}
                  >
                    <h2
                      className={`heading-2 my-2 font-medium ${
                        isActive ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p className={`pt-2 heading-5 text-light-black font-medium`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
