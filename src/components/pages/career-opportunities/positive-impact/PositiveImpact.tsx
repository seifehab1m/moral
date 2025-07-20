import React from "react";
import CardPositiveImpact from "./CardPositiveImpact";

export default function PositiveImpact() {
  return (
    <section className=" bg-[#CFCECD] py-20">
      <div className="container">
        <h6 className="text-secondary text-[20px]">Open Roles</h6>
        <div className="flex justify-between flex-col md:flex-row md:gap-60 gap-4">
          <h2 className="heading-1 text-primary pt-2.5 font-medium text-nowrap ">
            Positive impact
          </h2>
          <p className="text-light-black heading-5 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            Suspendisse potenti. Phasellus vel sem at odio fringilla tincidunt
            non nec velit. Quisque eu sapien eu tortor consequat porta vel id
            turpis.
          </p>
        </div>
        <div className="pt-16">
          <CardPositiveImpact title="01.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
          <CardPositiveImpact title="01.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
          <CardPositiveImpact title="01.Desgnation" description="SECTOR NAME" />
          <div className="line w-full h-[1px] bg-secondary my-7"></div>
        </div>
      </div>
    </section>
  );
}
