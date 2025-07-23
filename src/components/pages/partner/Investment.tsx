import React from "react";
import icon from "@/assets/images/DirhamIcon.png";
import Image from "next/image";
export default function Investment() {
  return (
    <div className="top-rounded-section py-16">
      <div className="container flex flex-col lg:flex-row justify-between xl:gap-64 gap-5 ">
        <div className="lg:w-1/3">
          <h6 className="text-secondary text-[20px] font-medium mb-2">
            Partnership
          </h6>
          <h2 className="text-primary font-medium heading-1">
            Your investment <br /> partner of choice
          </h2>
        </div>

        <div className="lg:w-2/3 ">
          <p className="heading-4 text-light-black font-medium">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
          <div className="flex mt-14  gap-6">
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={icon}
                  alt="Dirham"
                  width={92}
                  height={80}
                  className="object-fit h-[80px]"
                />
                <h5 className="text-[92px] font-medium text-primary">4.2tn</h5>
              </div>
              <h6 className="text-primary font-medium sub-header">
                AGGREGATE GDP
              </h6>
            </div>
            <div className="w-[2px] bg-secondary" />
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={icon}
                  alt="Dirham"
                  width={92}
                  height={80}
                  className="object-fit h-[80px]"
                />
                <h5 className="text-[92px] font-medium text-primary">3.2tn</h5>
              </div>
              <h6 className="text-primary font-medium sub-header">
                RESIDENTIAL CONSTRUCTION
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
