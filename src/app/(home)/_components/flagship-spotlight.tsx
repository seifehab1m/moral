import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../../../public/hotel-logo.svg";
import { cn } from "@/lib/utils";

export function FlagshipSpotlight() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between text-white">
      <div
        className={cn(
          "relative z-10 px-4 py-6 lg:ps-[160px] lg:pe-[148px] lg:py-20 bg-primary min-h-[402px] lg:min-h-[850px] rounded-ee-[52px] lg:rounded-ee-[200px] lg:w-1/2",
          "flex flex-col justify-between overflow-hidden",
        )}
      >
        <div>
          <p className="text-xl">Flagship spotlight: Maison fifty four Dubai</p>
          <h2 className="heading-2 font-medium mt-3 lg:mt-12 max-w-[496px]">
            A place that honours your heritage and nutures your future.
          </h2>
        </div>
        <Image className="max-w-[262px] lg:max-w-[343px]" src={logo} alt="" />
      </div>
      <Image className="object-cover" src="/hotel.jpg" alt="" fill />
      <Button
        className="relative z-10 lg:mb-20 lg:me-24 max-lg:self-end max-lg:mt-72 max-lg:mb-4 max-lg:me-7"
        asChild
      >
        <Link href="/">Visit Website</Link>
      </Button>
    </section>
  );
}
