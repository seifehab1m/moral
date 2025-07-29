export function Info() {
  return (
    <section className="top-rounded-section py-[42px] lg:py-[120px]">
      <div className="container text-center lg:text-start">
        <h2 className="sub-header font-medium">Contact Us</h2>
        <div className="grid lg:grid-cols-3 lg:gap-[67px]">
          <div className="py-[18px] lg:py-10 max-lg:mx-10 lg:pe-20 text-primary font-medium max-lg:border-b-1 lg:border-e-2 max-lg:border-b-secondary lg:border-e-secondary">
            <h3 className="text-2xl lg:text-[clamp(20px,5vw,96px)]">Address</h3>
            <address className="uppercase text-base lg:text-xl mt-2 lg:mt-4 not-italic">
              office no.22a & 22c, level 22 emirates towers offices
            </address>
          </div>
          <div className="py-[18px] lg:py-10 max-lg:mx-10 lg:pe-20 text-primary font-medium max-lg:border-b-1 lg:border-e-2 max-lg:border-b-secondary lg:border-e-secondary">
            <h3 className="text-2xl lg:text-[clamp(20px,5vw,96px)]">Contact</h3>
            <address className="not-italic">
              <a
                className="uppercase text-base lg:text-xl mt-2 lg:mt-4 block lg:overflow-ellipsis lg:line-clamp-1"
                dir="ltr"
                href="tel:+10082624971"
              >
                +1008 262 4 971
              </a>
              <a
                className="uppercase text-base lg:text-xl mt-0.5 block overflow-ellipsis line-clamp-1"
                dir="ltr"
                href="mailto:contact@mrbfholding.com"
              >
                contact@mrbfholding.com
              </a>
            </address>
          </div>
          <div className="py-[18px] lg:py-10 max-lg:mx-10 lg:pe-20 text-primary font-medium lg:overflow-ellipsis lg:line-clamp-1">
            <h3 className="text-2xl lg:text-[clamp(20px,5vw,96px)]">Hours</h3>
            <time
              dateTime="Mo-Fr 08:00-17:00"
              className="uppercase text-base lg:text-xl mt-2 lg:mt-4 block lg:overflow-ellipsis lg:line-clamp-1"
            >
              mon - fri: 8:00am - 5:00pm
            </time>
            <time
              dateTime="Sa 08:00-12:00"
              className="uppercase text-base lg:text-xl mt-0.5 block lg:overflow-ellipsis lg:line-clamp-1"
            >
              sat: 8:00am - 12:00pm
            </time>
          </div>
        </div>
      </div>
    </section>
  );
}
