import React from "react";

export default function PartnerHeader() {
  return (
    <div className="container py-5">
      <h6 className="text-secondary text-[20px] font-medium">
        Partner With Us
      </h6>
      <p className="py-3.5 font-medium heading-1 text-secondary md:max-w-[750px]">
        Explore a
        <span className="text-primary">
          {" "}
          partnership <br /> with us
        </span>
      </p>
      <p className="heading-4 text-black font-medium">
        Creating value, enriching communities.
      </p>
    </div>
  );
}
