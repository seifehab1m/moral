import { z } from "zod";
import { zPhone, zFile } from "@/lib/schemas";

export const careerFormSchema = z.object({
  mobile: zPhone,
  email: z.email({ error: "Please enter a valid email" }),
  country: z.string({ error: "Please select a country" }).min(3),
  resume: zFile(["application/pdf"]),
  over18: z.literal(true, { error: "You must be over 18" }),
  consent: z.literal(true, {
    error: "You must consent to our terms and conditions",
  }),
});

export type CareerFormSchema = z.infer<typeof careerFormSchema>;
