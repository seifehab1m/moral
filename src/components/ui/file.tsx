"use client";

import { cn } from "@/lib";
import { PaperclipIcon } from "lucide-react";
import type { MIMEType } from "@/types";

type Props = Omit<
  React.ComponentProps<"input">,
  "type" | "children" | "className" | "accept" | "onChange" | "value"
> & {
  accept?: Array<MIMEType>;
  onChange?: (files: FileList | null) => void;
  value: FileList | File[] | null;
};

export function FileInput({ value: files, ...props }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props?.onChange?.(e.target.files);
  };

  const label = !!files?.length
    ? Array.from(files)
        .map((f) => f.name)
        .join(", ")
    : "No file selected";

  const accept = props.accept?.join(",");

  return (
    <div className="relative">
      <input
        {...props}
        type="file"
        className={cn("absolute opacity-0 w-full h-full")}
        accept={accept}
        onChange={handleFileChange}
      />

      <div
        aria-hidden
        role="presentation"
        className="pointer-events-none border-b border-b-primary py-3 -mt-1 text-primary flex gap-3 items-center"
      >
        <PaperclipIcon className="shrink-0" size={20} />
        <span className="font-medium uppercase text-base lg:text-xl overflow-ellipsis line-clamp-1">
          {label}
        </span>
      </div>
    </div>
  );
}
