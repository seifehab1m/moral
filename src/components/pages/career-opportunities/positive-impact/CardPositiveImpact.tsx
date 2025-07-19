import { Button } from "@/components/ui/button";
import React from "react";

export default function CardPositiveImpact({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="heading-2 text-primary font-medium">{title}</h2>
      <p className="heading-5 text-primary">{description}</p>
      <Button className="text-secondary">Apply Here</Button>
    </div>
  );
}
