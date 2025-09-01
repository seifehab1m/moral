import { env } from "@/env";
import { Api } from "./Api";

export const client = new Api({
  baseUrl: env.CMS_API,
});
