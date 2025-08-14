import React from "react";
import leader1 from "@/assets/images/leader-1.jpg";
import leader2 from "@/assets/images/leader-2.jpg";
import leader3 from "@/assets/images/leader-5.jpg";
import leader4 from "@/assets/images/leader-6.jpg";

import Image from "next/image";

export default function LeaderShip() {
  return (
    <div className="top-rounded-section py-16 ">
      <div className="container">
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h6 className="text-secondary text-[20px] font-medium mb-2">
              Leadership
            </h6>
          </div>

          <div className=" ">
            <h2 className="text-primary font-medium heading-1">
              Value creators
              <br /> and builders.
            </h2>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
            src={leader1}
            alt=""
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                Chairman, MRBF Holding
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">
                Mohammed Rashed Alfalasi
              </h5>
              <p className="text-black mt-3">
                A distinguished Emirati entrepreneur and strategic business
                leader, recognized for his visionary approach, ethical
                practices, and long-standing commitment to economic growth and
                community development across the UAE.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
            src={leader2}
            alt=""
            width={260}
            height={260}
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                CEO & Group Vice Chairman, MRBF Holding
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">Ahmed E. Rabbat</h5>
              <p className="text-black mt-3">
                A dynamic executive and strategic business leader, known for his
                forward-thinking approach and ability to drive sustainable
                transformation across industries.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
            src={leader3}
            alt=""
            width={260}
            height={260}
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                Brian Carey
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">
                Chief Strategy & Implementation Officer
              </h5>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 font-medium">
          <Image
            className="h-[260px] w-[260px] object-cover object-top rounded-br-[80px]"
            src={leader4}
            alt=""
            width={260}
            height={260}
          />
          <div className="flex flex-col justify-between h-fit my-auto">
            <div>
              <h3 className="lg:text-[28px] text-base text-secondary mt-4 lg:mt-0">
                Reza Nader-Sepahi
              </h3>
              <h5 className="mt-10 heading-3 text-primary ">
                Group Chief Governance & Compliance Officer
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
