export function Stats() {
  return (
    <section className="top-rounded-section">
      <div className="container flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <div className="flex-[.6]">
          <span className="sub-header">Key Numbers</span>
          <h2 className="text-gray-500 heading-1 mt-2 mb-[46px] lg:mt-6  font-medium">
            Building legacies, <br />
            <span className="text-primary">bettering lives</span>
          </h2>
          <p className="text-light-black font-medium lg:text-2xl lg:max-w-[690px] lg:mt-[99px]">
            MRBF Holding is a new kind of holding company. Built on 55 years of
            diversified success, and equipped with a keen sense of future
            demand, it operates with agility and intent – focused on
            opportunities that deliver sustainable returns for investors and
            genuine impact for communities.
          </p>
        </div>
        <div className="rounded-card flex-[.4]">
          <div>
            <p className="text-[24px] lg:text-[72px] font-medium">+1,850</p>
            <p className="mt-0 mb-10 text-xs lg:text-xl">
              Employees across the world
            </p>
          </div>
          {/* <p className="mt-auto text-xs lg:text-xl"> */}
          {/*   Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc */}
          {/*   vulputate libero et velit */}
          {/* </p> */}
        </div>
      </div>
    </section>
  );
}
