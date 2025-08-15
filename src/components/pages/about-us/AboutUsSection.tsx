"use client";
import React from "react";
import CardDates from "./CardDates";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

// Timeline data based on your images
const cards = [
  {
    year: 1979,
    title: "Founded",
    description:
      "Founder Mr. Rashid Bakht Alalasi started whole sale business.",
  },
  {
    year: 1989,
    title: "We entered the burgeoning real estate sector in Dubai and Sharjah, acquiring large parcels of land for development.",
    description:""
    // description:
    //   "We entered the burgeoning real estate sector in Dubai and Sharjah, acquiring large parcels of land for development.",
  },
  {
    year: 1990,
    title: "Started Contracting",
    description: "We started our first contracting company, Buset Contracting.",
  },
  {
    year: 1991,
    title: "Entered construction & technical activities",
    description:
      "We started construction of our Al Taib Technical Industries unit in Dubai to support our main contracting projects.",
  },
  {
    year: 1995,
    title: "Completed major real estate projects",
    description:
      "We completed major real estate projects, significantly contributing to the entire group's growth and success.",
  },
  {
    year: 2002,
    title: "Family succession",
    description:
      "Our founder passed away and leadership transferred to Mr. Mohamed Rashid Alalasi. Buset Investment was established to unify the family’s real estate assets.",
  },
  {
    year: 2003,
    title: "Established Wooden Art Industries",
    description:
      "To meet our in-house demand and create synergies, we established Wooden Art Industries in Dubai.",
  },
  {
    year: 2004,
    title: "Expanded healthcare portfolio",
    description:
      "We diversified our portfolio by launching our first state-of-the-art healthcare facility: Canadian Hospital Clinic, in response to Dubai’s growing population.",
  },
  {
    year: 2007,
    title: "Canadian Specialist Hospital built",
    description:
      "Our healthcare expansion continued with the establishment of Dubai’s first private 200-bed hospital, Canadian Specialist Hospital, with the most advanced technology of the time.",
  },
  {
    year: 2009,
    title: "Global recession response",
    description:
      "Amidst the global recession, we integrated our portfolio by hedging our real estate and construction assets through Buset Holding.",
  },
  {
    year: 2014,
    title: "Entered hospitality sector",
    description:
      "We reached another growth milestone in the hospitality and opened our first dining venture: Yalnor Palace Restaurant.",
  },
  {
    year: 2016,
    title: "Expanded into hospitality via FAR Hotel Apartments",
    description:
      "We expanded into hospitality via FAR Hotel Apartments in 2016.",
  },
  {
    year: 2016,
    title: "Entered engineering & electro-mechanical sector",
    description:
      "We strengthened our presence in contracting by establishing Electro-mechanical & Technical Construction in 2016.",
  },
  {
    year: 2019,
    title: "Acquired USD 600M real estate assets",
    description:
      "Acquired USD 600M worth of real estate assets in 2019. Moradi Holding was incorporated in 2019.",
  },
  {
    year: 2021,
    title: "Expanded Canadian Specialist Hospital",
    description:
      "We expanded the capacity of Canadian Specialist Hospital by 30% in 2021, seeking the industry’s highest standards and maintained a portfolio of more than 700M.",
  },
  {
    year: 2022,
    title: "USD 600M real estate project started",
    description:
      "Completed USD 600M real estate project with enhanced partners.",
  },
  {
    year: 2023,
    title: "High industry recognition",
    description:
      "Awarded highly protected and qualified industry expert as leadership of the group in 2023.",
  },
  {
    year: 2024,
    title: "Launched Moradi Holding as a global investment company",
    description:
      "We launched Moradi Holding as a global investment company with a multi-tiered investment fund, significantly expanding the group’s asset base and access to global capital. Created a global presence for healthcare assets and established relations with leading financial institutions worldwide.",
  },
];

export default function AboutUsSection() {
  return (
    <div>
      <h1 className="sub-header">About Us</h1>
      <h2 className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8">
        Building legacies, <br />
        <span className="text-primary">bettering lives.</span>
      </h2>
      <p className="heading-4 text-black font-medium  mt-8">
        MRBF Holding grew in the UAE as a respected family enterprise with an
        ambition for innovation, quality and community enhancement. For nearly
        half a century, it has expanded across sectors and regions, shaping
        vital industries and investing in purposeful transformation.
        <br />
        <span className="block pt-3">
          Today, as a diversified international holding, it combines an
          innovative \$1 billion ADGM-housed fund with a relentless drive to
          deliver enduring social and commercial value.
        </span>
      </p>

      <div className="mt-6 lg:mt-16 container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {cards.map((c, i) => (
            <SwiperSlide key={i}>
              <CardDates
                title={c.title}
                year={c.year}
                description={c.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
