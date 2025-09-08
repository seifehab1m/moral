"use client";

import React, { useRef } from "react";
import CardDates from "./CardDates";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useHeaderTheme } from "@/hooks";
import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import gsap from "gsap";
import { AboutHeroComponent } from "@/cms/Api";
import { JSONRichText } from "@/types";

type Props = {
  section: AboutHeroComponent | undefined;
};

export default function AboutUsSection({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useHeaderTheme(true);

  useGSAP(() => {
    gsapSplit(containerRef, ".about-us");
    gsap.from(sliderRef.current, {
      duration: 1.3,
      opacity: 0,
      delay: 2,
    });
  });

  if (!section) return null;

  return (
    <div className="container" ref={containerRef}>
      <h1 className="sub-header about-us">About Us</h1>
      <h2
        className="heading-1 font-medium text-secondary lg:max-w-[700px] mt-3 lg:mt-8 about-us [&_b]:text-primary [&_b]:font-medium"
        dangerouslySetInnerHTML={{ __html: section?.header! }}
      />

      {(section?.paragraph as JSONRichText).map((s, i) => (
        <p className="heading-4 text-black font-medium mt-8 about-us" key={i}>
          {s.children?.[0]?.text}
        </p>
      ))}

      {!!section?.timeline?.length && (
        <div ref={sliderRef} className="mt-6 lg:mt-16 container">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {section?.timeline?.map((c, i) => (
              <SwiperSlide key={i}>
                <CardDates title={c.paragraph!} year={c.year!} />
              </SwiperSlide>
            ))}

            <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-3xl text-primary">
              ←
            </div>
            <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-3xl text-primary">
              →
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
}
