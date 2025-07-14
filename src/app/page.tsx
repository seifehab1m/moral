import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>seif</h1>
      <h2>sss</h2>
      <Button variant="primary">contact us <ArrowUpRight className="size-5"/></Button>
      <Button variant="secondary">
        Contact us <ArrowUpRight className="size-5"/>
      </Button>
    </div>

  );
}
