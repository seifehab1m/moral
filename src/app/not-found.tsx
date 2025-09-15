"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useHeaderTheme } from "@/hooks";

export default function NotFound() {
  useHeaderTheme(true);
  return (
    <main className="container pt-[100px] lg:pt-[300px]">
      <span className="sub-header">Error</span>
      <h1 className="heading-1 font-medium text-primary mt-2">404</h1>
      <h2 className="heading-2 mt-2">Page Not Found</h2>
      <p className="heading-4 mt-2 lg:mt-3">
        You just hit a page that doesn&#39;t exist.
      </p>
      <Button className="mt-3 lg:mt-5" variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>
    </main>
  );
}
