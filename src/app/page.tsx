import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" container">
      <h1 className="heading-1">seif1</h1>
      <h2 className="heading-2">seif2</h2>
      <h3 className="heading-3">seif3</h3>
      <h4 className="heading-4">seif4</h4>
      <p className="heading-5">seif5</p>

      <Button variant="primary">
        Contact us <ArrowUpRight className="size-5" />
      </Button>
      <Button variant="secondary">
        Contact us <ArrowUpRight className="size-5" />
      </Button>
    </div>
  );
}
