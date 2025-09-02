import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CMS_API: z.string().min(1),
    CMS_DOCUMENTATION: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_JS_MAPS_STYLE_ID: z.string().min(1),
    NEXT_PUBLIC_CMS_URL: z.url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_JS_MAPS_STYLE_ID:
      process.env.NEXT_PUBLIC_GOOGLE_JS_MAPS_STYLE_ID,
    NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_JS_MAPS_API_KEY,
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
  },
});

export type Env = typeof env;
