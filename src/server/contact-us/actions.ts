"use server";

import { actionClient } from "../client";
import { contactFormSchema } from "./schemas";
import { mailer } from "@/lib/mailer";

export const contactFormAction = actionClient
  .inputSchema(contactFormSchema)
  .action(async ({ parsedInput }) => {
    mailer.sendMail({
      from: "mrbfemailer@gmail.com",
      to: ["info@mrbf.com", "moeislearning@gmail.com"],
      subject: "New MRBF Contact Form Submission",
      html: `
          <h1>New MRBF Contact Form Submission</h1>
          <h2>${parsedInput.firstName} ${parsedInput.lastName}</h2>
          <h3>Phone: ${parsedInput.mobile}</h3>
          <p>E-Mail: ${parsedInput.email}</p> 
          <p>Country: ${parsedInput.country}</p>
          <p>Message: ${parsedInput.message}</p>
      `,
    });

    return {
      success: true,
    };
  });
