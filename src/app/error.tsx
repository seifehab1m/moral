"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useHeaderTheme } from "@/hooks";

export default function Error() {
  useHeaderTheme(true);
  return (
    <main className="container pt-[100px] lg:pt-[300px]">
      <span className="sub-header">Error</span>
      <h1 className="heading-1 font-medium text-primary mt-2">
        An error just happened
      </h1>
      <p className="heading-4 mt-2 lg:mt-3">
        You can retry, or go back to the home page.
      </p>
      <Button className="mt-3 lg:mt-5" variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>
    </main>
  );
}
