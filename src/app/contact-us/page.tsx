import { getContactPage } from "@/cms/contact";
import { Hero, ContactForm } from "./_components";
import { notFound } from "next/navigation";

export default async function ContactUs() {
  const [page, err] = await getContactPage();
  if (err) notFound();
  return (
    <>
      <Hero section={page.data?.hero} />
      <ContactForm />
    </>
  );
}
