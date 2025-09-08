import { z } from "zod";
import { zPhone } from "@/lib/phone";

export const partnershipFormSchema = z.object({
  firstName: z.string({ error: "Please enter your first name" }).min(3),
  lastName: z.string({ error: "Please enter your last name" }).min(3),
  mobile: zPhone,
  email: z.email({ error: "Please enter a valid email" }),
  enquiryType: z.enum(["Partnership", "Support", "Other"], {
    error: "Please select a valid enquiry type",
  }),
  country: z.string({ error: "Please select a country" }).min(3),
  over18: z.literal(true, { error: "You must be over 18" }),
  consent: z.literal(true, {
    error: "You must consent to our terms and conditions",
  }),
});

export type PartnershipFormSchema = z.infer<typeof partnershipFormSchema>;
