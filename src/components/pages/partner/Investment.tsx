import { gsapSplit } from "@/lib";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Investment() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsapSplit(containerRef, ".invesetment-section", {
      scrollTrigger: {
        start: "top 80%",
      },
    });
  });
  return (
    <section ref={containerRef} className="top-rounded-section">
      <div className="container flex flex-col lg:flex-row justify-between lg:gap-60">
        <div className="lg:min-w-fit shrink-0 grow">
          <p className="sub-header invesetment-section">Partnership</p>
          <h2 className="text-primary font-medium heading-1 mt-3 invesetment-section">
            Your investment <br /> partner of choice
          </h2>
        </div>

        <p className="heading-4 text-light-black font-medium mt-4 invesetment-section">
          MRBF Holding is committed to driving exceptional investor returns by
          combining deep insights into global opportunities with the financial
          strength of its ADGM-housed fund. It is open to forging new
          partnerships through joint ventures, CSR collaborations and other
          proposals with investors, suppliers, consultants and advisors who
          share its values.
        </p>
      </div>
    </section>
  );
}
