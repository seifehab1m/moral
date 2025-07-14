import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" container">
      <h1>seif1</h1>
      <h2>seif2</h2>
      <h3>seif3</h3>
      <h4>seif456</h4>
      <h5>seif456</h5>
      <h6>seif456</h6>
      <p>seif456</p>
      <Button variant="primary">
        Contact us <ArrowUpRight className="size-5" />
      </Button>
      <Button variant="secondary">
        Contact us <ArrowUpRight className="size-5" />
      </Button>
    </div>
  );
}
