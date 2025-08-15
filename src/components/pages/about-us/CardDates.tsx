type CardDatesProps = {
  year: number;
  title: string;
  description: string;
};

export default function CardDates({
  year,
  title,
  description,
}: CardDatesProps) {
  return (
    <div className="relative aspect-[2/3] bg-white hover:bg-[#D8D8D6] duration-500 max-lg:min-w-[196px] max-w-[196px] lg:max-w-[300px] rounded group flex flex-col justify-between p-3.5 lg:p-4">
      <div className="font-medium">
        <h3 className="uppercase font-semibold heading-1 text-secondary group-hover:text-primary lg:max-w-[200px] relative z-10 transition-colors duration-500">
          {year}
        </h3>
        <h6 className=" sub-header text-secondary group-hover:text-primary transition-colors duration-500">
          {title}
        </h6>
      </div>
      <p className="text-secondary font-medium text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  );
}
