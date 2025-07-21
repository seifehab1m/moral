import { Button } from "@/components/ui/button";
import React from "react";

export default function ManifestoBook() {
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 py-18 gap-10">
      <div>
        <h6 className="text-secondary text-[20px] font-medium">Manifesto Book</h6>
        <h2 className="heading-1 text-secondary pt-3 md:pb-24 pb-8 font-medium text-nowrap ">
          Building legacies <br />
         <span className="text-primary">bettering lives</span> 
        </h2>
        <p className="text-light-black heading-5 font-medium md:max-w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
          Suspendisse potenti. Phasellus vel sem at odio fringilla tincidunt non
          nec velit. Quisque eu sapien eu tortor consequat porta vel id turpis.
        </p>
      </div>
      <div
        className="flex flex-col justify-between rounded-card "
      >
        <h2 className="text-white md:text-[64px] text-3xl">
          Culture <br /> Manifesto
        </h2>
        <Button className="text-secondary">Download</Button>
      </div>
    </section>
  );
}
