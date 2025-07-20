import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "cursor-pointer font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] lg:rounded-[20px] text-sm px-[12px] py-[6px] lg:text-[24px] lg:px-[32px] lg:py-[10px] w-fit uppercase",
  {
    variants: {
      variant: {
        default: "bg-white text-secondary",
        primary: "bg-white text-secondary",
        secondary: "bg-primary text-white",
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
  },
);

type TButton = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    Icon?: LucideIcon | null;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  Icon = ArrowUpRight,
  ...props
}: TButton) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {!!Icon ? <Icon className="size-5" /> : null}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
