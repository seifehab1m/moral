"use client";

import { env } from "@/env";
import NextImage from "next/image";
import type { CMSStrapiImage } from "@/types";

type Props = {
  image: CMSStrapiImage | undefined;
} & Omit<
  React.ComponentProps<typeof NextImage>,
  "src" | "alt" | "width" | "height"
>;

export function StrapiImage({ image, ...props }: Props) {
  if (!image) return null;

  const url = new URL(image.url!, env.NEXT_PUBLIC_CMS_URL);

  const width = props.fill ? undefined : image.width!;
  const height = props.fill ? undefined : image.height!;

  return (
    <NextImage
      {...props}
      src={url.href}
      alt={image.alternativeText ?? ""}
      width={width}
      height={height}
    />
  );
}
