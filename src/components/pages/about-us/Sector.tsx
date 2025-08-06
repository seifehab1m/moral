import React from "react";

export default function Sector() {
  return (
    <div className="top-rounded-section py-16 ">
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between mD:items-center">
          <div className="flex flex-col justify-between py-5">
            <h6 className="text-secondary text-[20px] font-medium mb-2">
              SECTORS
            </h6>
            <h2 className="text-primary font-medium heading-1 lg:max-w-[590px]">
              <span className="text-secondary">Broad sector expertise,</span>{" "}
              deep market understanding.
            </h2>
          </div>
          <p className="md:w-1/2 heading-4 font-medium">
            MRBF Holding creates value in key sectors that have the power to
            deliver sustainable returns and a genuine impact for communities.
            From quality developments that transform lifestyles, to strategic
            investments in financial services, hospitality, healthcare, IT and
            other high-growth opportunities, it is committed to ambitious yet
            responsible growth.
          </p>
        </div>
      </div>
    </div>
  );
}
