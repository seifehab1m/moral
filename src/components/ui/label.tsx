"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  cn(
    "uppercase flex items-center gap-2 text-base lg:text-xl leading-none font-medium select-none mb-4",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        primary: "text-primary",
        secondary: "text-grey-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type TLabel = React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

function Label({ className, variant, ...props }: TLabel) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn("", className, labelVariants({ variant }))}
      {...props}
    />
  );
}

export { Label };
