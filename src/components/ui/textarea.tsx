import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-b-[1.5px] border-b-primary placeholder:text-muted-foreground focus-visible: focus-visible: aria-invalid:ring-destructive/20",
        "text-primary placeholder:text-primary/40 text-base lg:text-xl",
        "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full",
        "rounded-md bg-transparent pb-2 pt-1 text-base transition-[color,box-shadow] outline-none focus-visible:",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
