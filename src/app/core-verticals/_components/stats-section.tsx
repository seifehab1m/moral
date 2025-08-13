import { cn } from "@/lib/utils";

type StatsSectionProps = {
  stats: Array<{
    number: string;
    description: string;
  }>;
};

export function StatsSection(props: StatsSectionProps) {
  return (
    <div className="top-rounded-section">
      {/* <div className="container">
        <ul className="grid lg:grid-cols-3 lg:gap-[67px]">
          {props.stats.map((s, i) => (
            <li
              key={i}
              className={cn(
                "py-[18px] lg:py-10 max-lg:mx-10 lg:pe-20 text-primary font-medium text-center",
                i < props.stats!.length - 1 &&
                  "max-lg:border-b-1 lg:border-e-2 max-lg:border-b-secondary lg:border-e-secondary",
              )}
            >
              <span className="text-2xl lg:text-8xl">{s.number}</span>
              <p className="uppercase text-base lg:text-xl mt-2 lg:mt-3">{s.description}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
