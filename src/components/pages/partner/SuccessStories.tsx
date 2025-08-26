import Image from "next/image";
import img from "@/assets/images/success-lg.jpg";
import img2 from "@/assets/images/success.png";

export function SuccessStories() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row justify-between text-white overflow-hidden">
      <div className="relative pb-[156px] pt-[59px] lg:pt-[143px] lg:pe-[80px] lg:pb-[236px] bg-primary rounded-ee-[52px] lg:rounded-ee-[200px] basis-1/2 self-stretch z-10">
        <h2 className="container-start lg:text-[64px] text-[32px] font-medium">
          A place that honours <br /> your heritage and <br /> nutures your
          future.
        </h2>
      </div>

      <Image
        className="hidden lg:block object-cover ms-auto object-[80%]"
        src={img}
        fill
        alt=""
      />

      <Image
        className="block lg:hidden object-cover w-full -mt-[52px]"
        src={img2}
        alt=""
      />
    </section>
  );
}
