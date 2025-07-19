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
    <>
      {/* ✅ Desktop layout (visible on md and up) */}
      <div className="hidden md:flex justify-between items-center">
        <h2 className="heading-2 text-primary font-medium">{title}</h2>
        <p className="heading-5 text-primary">{description}</p>
        <Button className="text-secondary">Apply Here</Button>
      </div>

      {/* ✅ Mobile layout (visible below md) */}
      <div className="flex justify-between items-center md:hidden">
        <div>
          <h2 className="heading-2 text-primary font-medium">{title}</h2>
          <p className="heading-5 text-primary pt-1">{description}</p>
        </div>
        <div className="flex justify-between">
          <Button className="text-secondary">Apply Here</Button>
        </div>
      </div>
    </>
  );
}
