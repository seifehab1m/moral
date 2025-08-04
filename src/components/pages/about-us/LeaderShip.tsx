import React from "react";
import img from "@/assets/images/leader.png";
import Image from "next/image";

export default function LeaderShip() {
  return (
    <div className="top-rounded-section py-16 ">
      <div className="container">
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h6 className="text-secondary text-[20px] font-medium mb-2">
              leadership
            </h6>
          </div>

          <div className=" ">
            <h2 className="text-primary font-medium heading-1">
              Value creators
              <br /> and builders
            </h2>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover  rounded-br[80px]"
            src={img}
            alt=""
            width={260}
            height={260}
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                Group vice chairman
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">Ahmed e. el rabbat</h5>
              <p className="text-black mt-3">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover  rounded-br[80px]"
            src={img}
            alt=""
            width={260}
            height={260}
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                Group vice chairman
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">Ahmed e. el rabbat</h5>
              <p className="text-black mt-3">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
