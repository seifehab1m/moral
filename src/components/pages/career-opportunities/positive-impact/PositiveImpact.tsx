import React from "react";
import CardPositiveImpact from "./CardPositiveImpact";

export default function PositiveImpact() {
  return (
    <section className=" bg-[#CFCECD] py-20">
      <div className="container">
        <h6 className="text-secondary text-[20px] font-medium">Open Roles</h6>
        <div className="flex justify-between items-center flex-col md:flex-row md:gap-60 gap-4">
          <h2 className="heading-1 text-primary pt-2.5 font-medium text-nowrap ">
            Positive impact
          </h2>
          <p className="text-light-black heading-5 font-medium">
            Join a family of nearly 2,000 colleagues across the world.
          </p>
        </div>
        <div className="pt-16">
          <CardPositiveImpact title="01.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
          <CardPositiveImpact title="02.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
          <CardPositiveImpact title="03.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
        </div>
      </div>
    </section>
  );
}
