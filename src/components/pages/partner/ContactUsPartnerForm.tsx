import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import React from "react";

export default function ContactUsPartnerForm() {
  return (
    <div className="bg-grey-2 top-rounded-section">
      <div className="container">
        <div className=" grid grid-cols-2 md:gap-11 gap-4 md:pb-7 pb-4">
          <div>
            <Label variant="primary">First Name</Label>
            <Input />
          </div>
          <div>
            <Label variant="primary">Last Name</Label>
            <Input />
          </div>
          <div>
            <Label variant="primary">Mobile</Label>
            <Input />
          </div>
          <div>
            <Label variant="primary">Email</Label>
            <Input id="email" />
          </div>
          {/* <Select
            label="business sector"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
          /> */}

          <Select
            label="type of enquiry"
            options={[
              { label: "Partnership", value: "Partnership" },
              { label: "Support", value: "Support" },
              { label: "Other", value: "Other" },
            ]}
          />
          <Select
            label="Country"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
          />
          <div />
        </div>
        <div className="flex items-center gap-2 ">
          <Checkbox />
          <Label className="pt-3 !lowercase">
            <span className="!uppercase">I </span>confirm that i am over 18
            years of age, or over the legal age of majority in my country of
            residence.
          </Label>
        </div>
        <div className="flex items-center gap-2 ">
          <Checkbox />
          <Label className="pt-3 !lowercase">
            <span className="!uppercase">I </span> consent to having this
            website store my submitted information so they can respond to my
            inquiry.
          </Label>
        </div>
        <Button className="mt-9">Send</Button>
      </div>
    </div>
  );
}
