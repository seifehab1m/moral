import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CallToActionSectionProps = {
  bgURL: string;
  text: string;
  href: string;
  className?: string;
  hideBtn?: boolean;
};

export function CallToActionSection({
  bgURL,
  text,
  href,
  className,
  hideBtn = false, // 👈 default value
}: CallToActionSectionProps) {
  return (
    <div
      className={cn(
        "relative h-[402px] lg:h-[864px] mt-8 lg:mt-20 z-10",
        className
      )}
    >
      <Image className="object-cover" alt="" src={bgURL} fill />
      <div className="container text-white relative z-10 flex flex-col items-end justify-end h-full pb-14 lg:pb-20">
        {!hideBtn && ( 
          <Button asChild>
            <Link href={href} target="_blank">
              {text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
