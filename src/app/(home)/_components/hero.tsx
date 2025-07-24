"use client";

import Image from "next/image";
import heroImage from "../../../../public/hero-image.png";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

export function Hero() {
  useHeaderTheme(false);

  return (
    <main className="sticky top-0">
      {/* <video */}
      {/*   className="absolute w-full h-full object-cover z-0" */}
      {/*   autoPlay */}
      {/*   muted */}
      {/*   loop */}
      {/* > */}
      {/*   <source src="/hero-video.mp4" type="video/mp4" /> */}
      {/* </video> */}

      <Image src={heroImage} alt="hero-image" className="object-cover" fill quality={100} />
      <div className="grid place-items-center relative z-10 h-screen max-h-[800px] lg:max-h-screen ">
        <h1 className="text-[32px] lg:text-[52px] text-grey-2 font-medium">
          Future, Present.
        </h1>
      </div>
    </main>
  );
}
