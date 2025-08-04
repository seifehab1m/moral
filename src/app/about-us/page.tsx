import AboutUsSection from "@/components/pages/about-us/AboutUsSection";
import Categories from "@/components/pages/about-us/Categories";
import FutureAndPresent from "@/components/pages/about-us/FutureAndPresent";
import LeaderShip from "@/components/pages/about-us/LeaderShip";
import Meetings from "@/components/pages/about-us/Meetings";
import Sector from "@/components/pages/about-us/Sector";
import Values from "@/components/pages/about-us/Values";
import React from "react";

export default function page() {
  return (
    <section className="pt-[92px] lg:pt-[230px]">
      <div className="container">
        <AboutUsSection />
      </div>
      <FutureAndPresent />
      <LeaderShip />
      <Values />
      <Sector />
      <Meetings />
      <Categories />
    </section>
  );
}
