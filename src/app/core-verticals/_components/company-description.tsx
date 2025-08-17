import { cn } from "@/lib/utils";
import Image from "next/image";

type CompanyDescriptionProps = {
  sectorName: string;
  description: string;
  companyName?: string;
  companyLogo?: string;
  className?: string;
  rounded?: boolean;
  id?: string;
};

export function CompanyDescription(props: CompanyDescriptionProps) {
  return (
    <div
      id={props.id}
      className={cn("max-lg:my-[16px]", props.rounded && "top-rounded-section")}
    >
      <div
        className={cn(
          "container flex flex-col lg:flex-row justify-between gap-3 lg:gap-10",
          props.className,
        )}
      >
        <div>
          <span className="sub-header uppercase">{props.sectorName}</span>
          {props.companyName && (
            <h2 className="heading-2 font-medium text-primary my-3 lg:max-w-[400px]">
              {props.companyName}
            </h2>
          )}
          {props.companyLogo && (
            <Image
              src={props.companyLogo}
              alt={props.companyName + " logo"}
              className="w-full max-w-[238px] lg:max-w-[390px]"
              width={390}
              height={126}
            />
          )}
        </div>
        <p className="lg:max-w-[690px] text-xs lg:text-2xl text-light-black">
          {props.description}
        </p>
      </div>
    </div>
  );
}
