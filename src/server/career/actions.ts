"use server";

import { client } from "@/cms";
import { actionClient } from "../client";
import { careerFormSchema } from "./schemas";
import { uploadToStrapi } from "@/cms/upload";

export const contactFormAction = actionClient
  .inputSchema(careerFormSchema)
  .action(async ({ parsedInput }) => {
    try {
      const res = await uploadToStrapi(parsedInput.resume);

      await client.careerForms.postCareerForms({
        data: {
          email: parsedInput.email,
          phone: parsedInput.mobile,
          country: parsedInput.country,
          attachment: res[0].id,
        },
      });

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        error: "Couldn't submit the form",
      };
    }
  });
