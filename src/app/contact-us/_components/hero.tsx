"use client";

import { ContactHeroComponent } from "@/cms/Api";
import { env } from "@/env";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

type Props = {
  section?: ContactHeroComponent | undefined;
};

export function Hero({ section }: Props) {
  useHeaderTheme(true);
  if (!section) return null;
  return (
    <section className="pt-[132px] lg:pt-[230px]">
      <div className="container">
        <span className="sub-header font-medium">{section.subHeader}</span>
        <h1
          className="heading-1 text-secondary font-medium mt-3 lg:max-w-[650px] lg:mt-10 [&_b]:text-primary [&_b]:font-medium"
          dangerouslySetInnerHTML={{ __html: section.header! }}
        />
        {/*   <span className=""> Connect with MRBF Holding</span> */}
        {/* </h1> */}
        <p className="lg:text-2xl font-medium mt-3 lg:mt-10">
          {section.paragraph?.split("\n").map((p) => (
            <>
              {p}
              <br />
            </>
          ))}
        </p>
      </div>
      {section?.map && (
        <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY}>
          <Map
            mapId={env.NEXT_PUBLIC_GOOGLE_JS_MAPS_STYLE_ID}
            className="h-[274px] lg:h-[864px] mt-7 lg:mt-[60px]"
            defaultZoom={12}
            defaultCenter={{
              lat: section.map.lat!,
              lng: section.map.lng!,
            }}
          >
            <Marker
              title={section.map.markerTitle!}
              // title="Emirates Towers"
              onClick={() =>
                window.open(
                  // `https://maps.app.goo.gl/MhJkkGvMFnqef7ie8`,
                  section.map?.markerLink!,
                  "_blank",
                )
              }
              position={{
                // lat: 25.218117442614076,
                // lng: 55.28246259259558,
                lat: section.map.lat!,
                lng: section.map.lng! as unknown as number,
              }}
            />
          </Map>
        </APIProvider>
      )}
    </section>
  );
}
