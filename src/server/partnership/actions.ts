"use server";

import { client } from "@/cms";
import { actionClient } from "../client";
import { partnershipFormSchema } from "./schemas";
import { mailer } from "@/lib/mailer";

export const partnershipFormAction = actionClient
  .inputSchema(partnershipFormSchema)
  .action(async ({ parsedInput }) => {
    mailer.sendMail({
      from: "mrbfemailer@gmail.com",
      to: ["info@mrbf.com", "moeislearning@gmail.com"],
      subject: "New MRBF Partnership Form Submission",
      html: `
          <h1>New MRBF Partnership Form Submission</h1>
          <h2>${parsedInput.firstName} ${parsedInput.lastName}</h2>
          <h3>Phone: ${parsedInput.mobile}</h3>
          <p>E-Mail: ${parsedInput.email}</p> 
          <p>Country: ${parsedInput.country}</p>
          <p>Enquiry Type: ${parsedInput.enquiryType}</p>
      `,
    });

    client.partnershipForms.postPartnershipForms({
      data: {
        firstName: parsedInput.firstName,
        lastName: parsedInput.lastName,
        mobile: parsedInput.mobile,
        email: parsedInput.email,
        enquiryType: parsedInput.enquiryType,
        country: parsedInput.country,
      },
    });

    return {
      success: true,
    };
  });
