"use client";

import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export function Intro() {
  useHeaderTheme(true);

  return (
    <section className="pt-[132px] lg:pt-[230px]">
      <div className="container">
        <span className="sub-header font-medium">Contact Us</span>
        <h1 className="heading-1 text-secondary font-medium mt-3 lg:max-w-[650px] lg:mt-10">
          A 40-year legacy
          <br />
          of
          <span className="text-primary"> Connect with MRBF Holding</span>
        </h1>
        <p className="lg:text-2xl font-medium mt-3 lg:mt-10">
          MRBF Holding is headquartered in Dubai, UAE, with interests across
          Europe, APAC and the Americas. <br /> Please get in touch using the
          details below, or simply fill out the form and the correct team will
          reach out shortly.
        </p>
      </div>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY!}>
        <Map
          mapId={process.env.NEXT_PUBLIC_GOOGLE_JS_MAPS_STYLE_ID}
          className="h-[274px] lg:h-[864px] mt-7 lg:mt-[60px]"
          defaultZoom={12}
          defaultCenter={{
            lat: 25.218117442614076,
            lng: 55.28246259259558,
          }}
        >
          <Marker
            title="Emirates Towers"
            onClick={() =>
              window.open(`https://maps.app.goo.gl/MhJkkGvMFnqef7ie8`, "_blank")
            }
            position={{
              lat: 25.218117442614076,
              lng: 55.28246259259558,
            }}
          />
        </Map>
      </APIProvider>
    </section>
  );
}
