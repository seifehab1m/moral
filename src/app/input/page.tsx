import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="container my-96 space-y-10 ">
      <div className="bg-primary p-10">
        <Label>First Name</Label>
        <Input variant="secondary" />
      </div>
      <div className="bg-grey-2 p-10">
        <Label htmlFor='firstName' variant="secondary">First Name</Label>
        <Input id='firstName' variant="primary" />
      </div>
    </div>
  );
}
