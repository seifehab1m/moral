import Image from "next/image";
import { cn } from "@/lib/utils";
import img from "@/assets/images/success.png";
export function SuccessStories() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between text-white">
      <div
        className={cn(
          "relative z-10 px-4 py-6 lg:ps-[160px] lg:pe-[148px] lg:py-20 bg-primary min-h-[402px] lg:min-h-[600px] rounded-ee-[52px] lg:rounded-ee-[200px] lg:w-1/2",
          "flex flex-col justify-between overflow-hidden"
        )}
      >
        <div>
          <p className="heading-6">Success stories</p>
          <h2 className="heading-2 font-medium mt-3 lg:mt-12 max-w-[496px]">
            A place that honours your heritage and nutures your future.
          </h2>
        </div>
        {/* <Image className="max-w-[262px] lg:max-w-[343px]" src={logo} alt="" /> */}
      </div>
      <Image className="object-cover " src={img} alt="" fill />
    </section>
  );
}
