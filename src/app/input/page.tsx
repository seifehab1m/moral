"use client";

/*
 * TODO: make the select component variant
 * TODO: Don't forget about the Checkbox component
 **/

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  // SelectWrapper,
  // SelectContent,
  // SelectItem,
  // SelectTrigger,
} from "@/components/ui/select";

const schema = z.object({
  username: z.string().min(3).max(20),
});

type Schema = z.infer<typeof schema>;

export default function Page() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: Schema) => {
    console.log(values);
  };

  return (
    <div className="container my-96 space-y-10 ">
      <div className="bg-primary p-10">
        <Label variant="secondary">First Name</Label>
        <Input variant="secondary" />
      </div>

      <div className="bg-grey-2 p-10">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" variant="primary" />
      </div>

      <div className="bg-grey-2 p-10">
        <Label htmlFor="firstName">Select Something</Label>
        <Select
          label="Select an Option"
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
          ]}
        />
      </div>

      <div className="bg-grey-2 p-10">
        <Label htmlFor="firstName">Check a Box</Label>
        <Checkbox id="firstName" />
      </div>

      <div className="bg-grey-2 p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={(ff) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...ff.field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
