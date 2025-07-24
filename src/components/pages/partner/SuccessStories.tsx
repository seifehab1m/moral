import Image from "next/image";
import { cn } from "@/lib/utils";
import img from "@/assets/images/success.png";

export function SuccessStories() {
  return (
    <section className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-end justify-between text-white overflow-hidden ">
      <Image className="object-cover ms-auto " src={img} alt="" />
      <div
        className={cn(
          "lg:absolute top-0 bottom-0 lg:translate-y-0 translate-y-12  z-10 px-4 py-6 bg-primary  rounded-ee-[52px] lg:rounded-ee-[200px] lg:w-1/2",
          ""
        )}
      >
        <div className="container ">
          <p className="heading-6">Success stories</p>
          <h2 className="lg:text-[64px] text-[32px] font-medium mt-3 lg:mt-12 ">
            A place that honours your heritage and nutures your future.
          </h2>
        </div>
      </div>
    </section>
  );
}
