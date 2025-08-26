import img from "@/assets/images/partnerHero.png";
import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function PartnerHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".partnership-header", );
    gsap.from(imageRef.current, {
      duration: 2,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });
  });
  return (
    <section ref={containerRef}>
      <div className="container space-y-3 lg:space-y-[40px]">
        <p className="sub-header font-medium partnership-header">
          Partner With Us
        </p>
        <h1 className="font-medium heading-1 text-secondary md:max-w-[750px] partnership-header">
          Explore a
          <span className="text-primary ">
            {" "}
            partnership <br /> with us
          </span>
        </h1>
        <p className="heading-4 text-black font-medium partnership-header">
          Creating value, enriching communities.
        </p>
      </div>
      <div className="relative aspect-[1.52] lg:aspect-[2] mt-8 lg:mt-12 overflow-hidden">
        <Image
          aria-hidden
          ref={imageRef}
          src={img}
          className="w-full h-full  object-cover "
          fill
          alt=""
        />
      </div>
    </section>
  );
}
