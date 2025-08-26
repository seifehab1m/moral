import img from "@/assets/images/partnerHero.png";
import Image from "next/image";

export default function PartnerHeader() {
  return (
    <section>
      <div className="container space-y-3 lg:space-y-[40px]">
        <p className="sub-header font-medium">Partner With Us</p>
        <h1 className="font-medium heading-1 text-secondary md:max-w-[750px]">
          Explore a
          <span className="text-primary">
            {" "}
            partnership <br /> with us
          </span>
        </h1>
        <p className="heading-4 text-black font-medium">
          Creating value, enriching communities.
        </p>
      </div>
      <Image
        aria-hidden
        src={img}
        className="w-full h-full bg-red-500 aspect-[1.52] lg:aspect-[2] object-cover mt-8 lg:mt-12"
        alt=""
      />
    </section>
  );
}
