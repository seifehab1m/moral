import React from "react";
import img from "@/assets/images/futeure.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FutureAndPresent() {
  return (
    <div
      style={{
        backgroundImage: `url(${img?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full mt-14 min-h-screen py-12 lg:py-28 bg-no-repeat bg-cover bg-center"
    >
      <div className="flex items-center h-full">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="max-w-[690px]">
            <h2 className="heading-1 text-white font-semibold leading-12">
              Future, Present.
            </h2>
            <p className="heading-4 text-white lg:mt-8 mt-3">
              Like our home, the UAE, MRBF Holding thinks long-term, acts
              decisively and moves with precision. Over the years, our family
              business has evolved to deliver exceptional investor returns and
              customer experiences across an ever-expanding breadth of sectors.
              To this end, our investment philosophy is rooted in clarity of
              purpose, deep market understanding and a keen sense of future
              demand focused on maximising value. We are proud of the legacy and
              partnerships we have built, and ambitious to embrace the
              technology empowered future.
            </p>
            <div className="flex justify-between text-white mt-18 flex-wrap gap-4">
              <div>
                <h4 className="heading-4 font-medium">
                  Mohammed rashed alfalasi
                </h4>
                <h6 className="sub-header !text-white mt-2">Group chairman</h6>
              </div>
              <Link
                href="/"
                className="text-white bg-white p-2 rounded-[8px] self-end group transition duration-500"
              >
                <ArrowUpRight className="text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
