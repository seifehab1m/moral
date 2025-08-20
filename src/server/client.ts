import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  defaultValidationErrorsShape: "flattened",
  throwValidationErrors: true,
  handleServerError: (error) => {
    if (process.env.NODE_ENV === "development") console.log(error);
  },
});
