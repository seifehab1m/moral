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
      <div className="container">
        <ul className="grid grid-cols-3 lg:gap-[67px]">
          {props.stats.map((s, i) => (
            <li
              key={i}
              className={cn(
                "py-10 pe-20 text-primary font-medium",
                i < props.stats!.length - 1 &&
                  "border-e-2 border-e-secondary",
              )}
            >
              <span className="lg:text-8xl">{s.number}</span>
              <p className="uppercase lg:text-xl mt-3">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
