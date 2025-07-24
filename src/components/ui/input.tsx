import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  cn(
    "border-b border-b-[1.5] dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md bg-transparent py-3 lg:py-5 text-base ",
    "transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-base lg:text-xl",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:border-b-2",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  ),
  {
    variants: {
      variant: {
        primary: "border-b-primary text-primary placeholder:text-primary/40",
        secondary: "border-b-grey-2 text-grey-2 placeholder:text-grey-2/40",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type TInput = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants>;

function Input({ className, type, variant, ...props }: TInput) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input };
