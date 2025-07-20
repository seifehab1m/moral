import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactUs() {
  return (
    <section className="bg-white relative z-10 py-[80px]">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-gray-500 heading-2 font-medium max-w-[300px]">
            Explore <span className="text-primary">a partner ship with us</span>
          </h2>
          <Button variant="secondary" asChild>
            <Link href="/">Contact Us</Link>
          </Button>
        </div>
        <p className="mt-12 text-2xl" >
          Lorem ipsum dolor sit g elit, sed diam nonummy nibh euismod.
        </p>
      </div>
    </section>
  );
}
