import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[50px] text-2xl h-[50px] px-[24px] w-fit",
  {
    variants: {
      variant: {
        default: "bg-primary text-white ", // we need to check the height of the button
        primary: "bg-primary text-white ",
        secondary: "bg-white text-primary",
      },
      size: {
        default: "flex items-center gap-2 ",
        sm: "rounded-md ",
        lg: "rounded-md ",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
// if has svg has-[>svg]:px-2.5
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
