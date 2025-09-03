import qs from "qs";
import { env } from "@/env";
import { Api } from "./Api";

const TAG = "cms_data";

type Options = {
  path: string;
  init?: RequestInit;
  query?: Record<string, any>;
};

export async function fromCMS<T>({ path, init = {}, query = {} }: Options) {
  init.next = { tags: [TAG], ...init.next };

  const q = qs.stringify(query, { encodeValuesOnly: true }) ?? "";
  const url = new URL("/api" + path, env.NEXT_PUBLIC_CMS_URL).toString() + "?" + q;
  const response = await fetch(url.toString(), init);
  const json = (await response.json()) as Record<string, string>;

  if (!response.ok) {
    const error = new Error(json.message);
    (error as any).statusCode = response.status;
    (error as any).statusText = response.statusText;
    throw error;
  }

  return json as T;
}

export const client = new Api({
  baseUrl: env.CMS_API,
  baseApiParams: { next: { tags: [TAG] } },
});
