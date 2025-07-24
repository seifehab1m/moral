import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CallToActionBGProps = {
  imageURL: string;
  ctaURL: string;
  ctaText: string;
  headerText: string;
  className?: string;
};

/**
 * Call To Action With Background
 * See Figma's Homepage Third Section
 */
export function CallToActionBG({
  imageURL,
  ctaURL,
  ctaText,
  headerText,
  className,
}: CallToActionBGProps) {
  return (
    <section
      className={cn(
        "relative min-h-[264px] lg:min-h-[864px] flex flex-col justify-end",
        className,
      )}
    >
      <Image
        src={imageURL}
        className="object-cover object-top"
        quality={100}
        alt=""
        fill
      />
      <div className="relative z-10 container flex flex-row gap-4 items-end lg:items-center justify-between mb-[38px]">
        <h2 className="heading-1 text-white font-semibold max-w-[500px]">
          {headerText}
        </h2>
        <Button variant="primary" asChild>
          <Link href={ctaURL}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
}
