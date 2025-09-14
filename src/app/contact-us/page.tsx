import { getContact } from "@/cms/contact";
import { Hero, ContactForm } from "./_components";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const [page] = await getContact();
  return createMetadata(page?.data?.seo);
}

export default async function ContactUs() {
  const [page, err] = await getContact();
  if (err) notFound();
  return (
    <>
      <Hero section={page.data?.hero} />
      <ContactForm />
    </>
  );
}
