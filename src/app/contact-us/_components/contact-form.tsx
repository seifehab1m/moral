"use client";

import { useState, useLayoutEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { zodResolver } from "@hookform/resolvers/zod";
import { COUNTRIES } from "@/lib";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { contactFormAction, contactFormSchema } from "@/server/contact-us";
import {
  Checkbox,
  Input,
  SelectWrapper,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PhoneInput,
} from "@/components/ui";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form, handleSubmitWithAction, resetFormAndAction } =
    useHookFormAction(contactFormAction, zodResolver(contactFormSchema), {
      actionProps: { onSuccess: () => setSubmitted(true) },
    });

  const handleReset = () => {
    resetFormAndAction();
    setSubmitted(false);
  };

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get();
  }, []);

  return (
    <section className="top-rounded-section bg-grey-2 max-lg:!py-7">
      <div className="container">
        {submitted ? (
          <div className="flex flex-col items-center gap-5 text-center">
            <h3 className="heading-2 uppercase text-primary">
              Thank you for your submission!
            </h3>
            <p className="text-sm lg:text-xl">We will get back to you soon!</p>
            <Button variant="primary" onClick={handleReset}>
              Back
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={handleSubmitWithAction}
              className="grid grid-cols-2 gap-x-3 gap-y-6 lg:gap-10 items-start"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        international
                        defaultCountry="AE"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="col-span-2 lg:col-span-1">
                    <FormLabel>Country</FormLabel>
                    <SelectWrapper
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="PLEASE SELECT" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {COUNTRIES.map((c) => (
                          <SelectItem key={c.code} value={c.name}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectWrapper>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 space-y-5">
                <FormField
                  control={form.control}
                  name="over18"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked)
                            }
                          />
                        </FormControl>
                        <FormLabel className="!my-0 !normal-case !leading-[1.2]">
                          I confirm that i am over 18 years of age, or over the
                          legal age of majority in my country of residence
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex gap-3">
                        <FormControl>
                          <Checkbox
                            checked={!!field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked)
                            }
                          />
                        </FormControl>
                        <FormLabel className="!my-0 !normal-case !leading-[1.2]">
                          I consent to having this website store my submitted
                          information so they can respond to my inquiry.
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Button type="submit" className="col-span-2">
                send
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
