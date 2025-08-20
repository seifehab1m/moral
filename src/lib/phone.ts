import { PhoneNumberUtil } from "google-libphonenumber";
import z from "zod";

const phoneUtil = PhoneNumberUtil.getInstance();

export type Result =
  | {
      success: false;
      error: string;
    }
  | {
      success: true;
      number: number | undefined;
      countryCode: number | undefined;
      regionCode: string | undefined;
      fullNumber: string;
    };

export function safeParsePhone(phone: string): Result {
  try {
    const phonenumber = phoneUtil.parse(phone);

    const isValid = phoneUtil.isValidNumber(phonenumber);

    if (!isValid) throw new Error("Invalid phone number");

    return {
      success: true,
      number: phonenumber.getNationalNumber(),
      countryCode: phonenumber.getCountryCode(),
      regionCode:
        phoneUtil.getRegionCodeForNumber(phonenumber) ??
        phoneUtil.getRegionCodeForCountryCode(
          phonenumber.getCountryCode() as number,
        ),
      fullNumber: phone,
    };
  } catch (error) {
    let message = "Couldn't parse the provided phone";
    if (error instanceof Error) message = error.message;
    return {
      success: false,
      error: message,
    };
  }
}

export const zPhone = z
  .string({ error: "Please enter a valid phone number" })
  .refine((value) => safeParsePhone(value).success, "Invalid Phone Number");
