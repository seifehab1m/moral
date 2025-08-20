import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mrbfemailer@gmail.com",
    pass: "bwtlypixhfwcxzmd",
  },
});
