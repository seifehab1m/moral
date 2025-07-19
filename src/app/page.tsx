import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" container bg-gray-500 py-10">
      <h1 className="heading-1">seif1</h1>
      <h2 className="heading-2">seif2</h2>
      <h3 className="heading-3">seif3</h3>
      <h4 className="heading-4">seif4</h4>
      <p className="heading-5">seif5</p>
      <div className="space-y-10 my-10">
        <Button variant="primary" asChild Icon={null}>
          <Link href="/about">Contact us </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/about">Contact us </Link>
        </Button>
      </div>
    </div>
  );
}
