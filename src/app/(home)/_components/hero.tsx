import Image from "next/image";
import heroImage from "../../../../public/hero-image.png";

export function Hero() {
  return (
    <main className="sticky top-0 min-h-screen">
      {/* <video */}
      {/*   className="absolute w-full h-full object-cover z-0" */}
      {/*   autoPlay */}
      {/*   muted */}
      {/*   loop */}
      {/* > */}
      {/*   <source src="/hero-video.mp4" type="video/mp4" /> */}
      {/* </video> */}

      <Image src={heroImage} alt="hero-image" className="object-cover" fill />
      <div className="grid place-items-center relative z-10 min-h-screen">
        <h1 className="text-[32px] lg:text-[52px] text-white font-medium">
          Future, Present
        </h1>
      </div>
    </main>
  );
}
