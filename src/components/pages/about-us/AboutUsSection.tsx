import React from "react";
import CardDates from "./CardDates";

export default function AboutUsSection() {
  return (
    <div>
      <h1 className="sub-header">About us</h1>
      <h2 className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8">
        Building legacies, <br />
        <span className="text-primary">bettering lives.</span>
      </h2>
      <p className="heading-4 text-black font-medium max-w-[950px] mt-8">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut
      </p>
      <div className="flex flex-nowrap lg:grid lg:grid-cols-6 mt-6 lg:mt-16 gap-[7px] max-lg:overflow-x-scroll max-lg:px-[1rem] container">
        <CardDates />
        <CardDates />
        <CardDates />
        <CardDates />
        <CardDates />
      </div>
    </div>
  );
}
