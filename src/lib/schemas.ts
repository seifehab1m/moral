import z from "zod";
import { safeParsePhone } from "./phone";
import { MIMEType } from "@/types";

export const zPhone = z
  .string({ error: "Please enter a valid phone number" })
  .refine((value) => safeParsePhone(value).success, "Invalid Phone Number");

export function zFile(mimes: Array<MIMEType>) {
  const isBrowser = typeof window !== "undefined";

  return z
    .custom<FileList | File[]>(
      (val) => {
        if (isBrowser) return val instanceof FileList && val.length > 0;
        return Array.isArray(val) && val.length > 0;
      },
      { error: "Please Select A File" },
    )
    .transform((val) =>
      isBrowser && val instanceof FileList ? Array.from(val) : (val as File[]),
    )
    .refine(
      (files) => files.every((file) => (mimes as string[]).includes(file.type)),
      { error: `${mimes.join(" or ")} Files Are Only Accepted` },
    );
}
