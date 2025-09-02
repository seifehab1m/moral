import type { NextConfig } from "next";
import { env } from "./src/env";

console.log(new URL(env.NEXT_PUBLIC_CMS_URL));

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

console.dir(nextConfig, {
  depth: null,
});

export default nextConfig;
