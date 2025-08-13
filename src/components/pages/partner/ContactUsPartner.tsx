import ContactUsPartnerForm from "./ContactUsPartnerForm";

export default function ContactUsPartner() {
  return (
    <div>
      <div className="container py-22">
        <h6 className="sub-header pb-5">Contact Us</h6>
        <h2 className="text-primary font-medium heading-1 md:max-w-[768px]">
          If you would like to know more about MRBF And opportunities,{} please
          complete the form below
        </h2>
      </div>
      <ContactUsPartnerForm />
    </div>
  );
}
