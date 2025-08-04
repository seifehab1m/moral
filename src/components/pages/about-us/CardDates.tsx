export default function CardDates() {
  return (
    <div className="relative aspect-[2/3] bg-white hover:bg-[#D8D8D6] duration-500 max-lg:min-w-[196px] max-w-[196px] lg:max-w-[300px] rounded group flex flex-col justify-between p-3.5 lg:p-4">
      <div className="font-medium">
        <h3 className="uppercase font-semibold heading-1 text-secondary group-hover:text-primary lg:max-w-[200px] relative z-10 transition-colors duration-500">
          1979
        </h3>
        <h6 className="sub-header text-secondary group-hover:text-primary transition-colors duration-500">
          company start-up
        </h6>
      </div>
      <p className="text-secondary font-medium text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        We entered dubai and sharjah’s growing real state market by acquiring
        large parcels of land for development
      </p>
    </div>
  );
}
