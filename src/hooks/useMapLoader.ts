"use client";

import { useEffect, useState, useRef } from "react";
import google, { Loader } from "@googlemaps/js-api-loader";

type MapLoaderProps = {
  ref: React.RefObject<HTMLDivElement | null>;
} & globalThis.google.maps.MapOptions;

export function useMapLoader({ ref, ...opts }: MapLoaderProps) {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY!,
      version: "weekly",
    });

    const mapLoader = async () => {
      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      if (ref?.current && !!opts) {
        const map = new Map(ref.current, opts);
        const marker = new Marker({
          position: opts.center,
          title: "Emirates Towers",
          map,
        });

        marker.addListener("click", () => {
          window.open(`https://maps.app.goo.gl/MhJkkGvMFnqef7ie8`, "_blank");
        });
      }
    };

    mapLoader();
  }, [ref.current !== null]);
}
