import React from "react";
import CardDates from "./CardDates";

const cards = [
  {
    year: 1979,
    title: "Began as a family business",
    description:
      "We entered dubai and sharjah’s growing real state market by acquiring large parcels of land for development",
  },
  {
    year: 1989,
    title: "entering dubai and sharjah real state",
    description:
      "We entered dubai and sharjah’s growing real state market by acquiring large parcels of land for development",
  },
  {
    year: 1990,
    title: "Founded Buset Contracting",
    description:
      "We entered dubai and sharjah’s growing real state market by acquiring large parcels of land for development",
  },
  {
    year: 2003,
    title: "Established Canadian Specialist Hospital",
    description:
      "We entered dubai and sharjah’s growing real state market by acquiring large parcels of land for development",
  },
  {
    year: 2003,
    title: "Built Jumeirah compound",
    description:
      "We entered dubai and sharjah’s growing real state market by acquiring large parcels of land for development",
  },
];

export default function AboutUsSection() {
  return (
    <div>
      <h1 className="sub-header">About us</h1>
      <h2 className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8">
        Building legacies, <br />
        <span className="text-primary">bettering lives.</span>
      </h2>
      <p className="heading-4 text-black font-medium max-w-[950px] mt-8">
        MRBF Holding grew in the UAE as a respected family enterprise with an
        ambition for innovation, quality and community enhancement. For nearly
        half a century, it has expanded across sectors and regions, shaping
        vital industries and investing in purposeful transformation. Today, as a
        diversified international holding, it combines an innovative $1 billion
        ADGM-housed fund with a relentless drive to deliver enduring social and
        commercial value.
      </p>
      <div className="flex flex-nowrap lg:grid lg:grid-cols-6 mt-6 lg:mt-16 gap-[7px] max-lg:overflow-x-scroll max-lg:px-[1rem] container">
        {cards.map((c, i) => (
          <CardDates
            title={c.title}
            year={c.year}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
}
