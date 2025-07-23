import { Input } from "@/components/ui/input";
export default function Page() {
  return (
    <div className="container my-96 space-y-10 ">
      <div className="bg-primary p-10">
        <Input variant="secondary" placeholder="Seif" />
      </div>
      <div className="bg-grey-2 p-10">
        <Input variant="primary" placeholder="Seif" />
      </div>
    </div>
  );
}
