import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CallToActionSectionProps = {
  bgURL: string;
  text: string;
  href: string;
  className?: string;
};

export function CallToActionSection(props: CallToActionSectionProps) {
  return (
    <div className={cn("relative h-[402px] lg:h-[864px] mt-8 lg:mt-20 z-10", props.className)}>
      <Image className="object-cover" alt={""} src={props.bgURL} fill />
      <div className="container text-white relative z-10 flex flex-col items-end justify-end h-full pb-14 lg:pb-20">
        <Button asChild>
          <Link href={props.href}>{props.text}</Link>
        </Button>
      </div>
    </div>
  );
}
