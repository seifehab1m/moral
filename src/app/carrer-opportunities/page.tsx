import React from "react";

export default function page() {
  return (
    <div className="container ">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div></div>
        <div>
          <div className="flex">
            <div className="horizontal-line w-[1px] h-full bg-secondary" />
            <div>
              <h2 className="heading-2 mt-4 mb-4 font-medium text-primary">01.Pioneering innovation</h2>

              <p className="pt-8 heading-5 font-medium">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
