"use client";

import { useGSAP } from "@gsap/react";
import { gsapSplit } from "@/lib";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import gsap from "gsap";
import { PartnershipContactComponent } from "@/cms/Api";

type Props = {
  section: PartnershipContactComponent | undefined;
};

export default function ContactUsPartner({ section }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    gsapSplit(containerRef, ".contact-us-partner", {
      scrollTrigger: {
        start: "top 80%",
      },
    });

    gsap.from(formRef.current, {
      duration: 1.4,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      },
    });
  });

  if (!section) return null;

  return (
    <section ref={containerRef}>
      <div className="container py-[42px] lg:py-[90px]">
        <h6 className="sub-header pb-5 contact-us-partner">
          {section.subHeader}
        </h6>
        <h2
          className="text-secondary font-medium heading-1 md:max-w-[768px] contact-us-partner [&_b]:text-primary [&_b]:font-medium"
          dangerouslySetInnerHTML={{ __html: section.header! }}
        />
      </div>
      <form ref={formRef} className="!bg-grey-2 py-7 lg:top-rounded-section">
        <div className="container">
          <div className="grid grid-cols-2 md:gap-11 gap-4 md:pb-7 pb-4">
            {" "}
            <div>
              {" "}
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
      </form>
    </section>
  );
}
