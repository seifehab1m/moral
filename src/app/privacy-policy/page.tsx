import PrivacyPolicyCard from "@/components/privacy-policy/PrivacyPolicyCard";
import React from "react";

export default function page() {
  return (
    <section className="pt-[92px] lg:pt-[230px] container">
      <h1 className="md:text-[48px] text-2xl text-primary font-medium pb-8">
        Privacy Policy
      </h1>
      <p className="text-black font-medium heading-4">
        We&apos;re committed to protecting your privacy and ensuring
        transparency about how we collect, use, and safeguard your personal
        information on our educational platform.
      </p>
      <div className="flex flex-col gap-y-8 mt-16">
        {privacyPolicy?.map((item, index) => (
          <PrivacyPolicyCard key={index} title={item.title} number={index + 1}>
            {item.children}
          </PrivacyPolicyCard>
        ))}
      </div>
    </section>
  );
}

const privacyPolicy = [
  {
    title: "Introduction",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          Welcome to MRBF. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our
          educational platform and use our services.
          <br /> By accessing or using our platform, you agree to the collection
          and use of information in accordance with this policy. We are
          committed to protecting your privacy and ensuring your personal
          information is handled responsibly.
        </p>
      </div>
    ),
  },
  {
    title: "Data Collection",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          We collect information you provide directly to us, such as when you:
        </p>
        <ul className="list-disc ml-6 text-black my-3">
          <li className="font-medium">Create an account or profile</li>
          <li className="font-medium">Enroll in courses or educational programs</li>
          <li className="font-medium">Submit assignments or participate in discussions</li>
          <li className="font-medium">Contact us for support or inquiries</li>
          <li className="font-medium">Subscribe to our newsletters or updates</li>
        </ul>
        <p className="text-black font-medium heading-4 mt-2">
          The types of information we may collect include your name, email
          address, educational background, course progress, and any other
          information you choose to provide.
        </p>
      </div>
    ),
  },
  {
    title: "Use of Data",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc ml-6 text-black my-3">
          <li className="font-medium">Provide, maintain, and improve our educational services</li>
          <li className="font-medium">Process enrollments and track course progress</li>
          <li className="font-medium">Send you important updates about your courses and account</li>
          <li className="font-medium">Respond to your comments, questions, and support requests</li>
          <li className="font-medium">Analyze usage patterns to enhance user experience</li>
          <li className="font-medium">Comply with legal obligations and protect our rights</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Cookies and Tracking",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          We use cookies and similar tracking technologies to enhance your
          experience on our platform. Cookies help us remember your preferences
          and provide personalized content.
        </p>
        <p className="text-black font-medium heading-4 mt-2">
          Types of cookies we use:
        </p>
        <ul className="list-disc ml-6 text-black my-3">
          <li className="font-medium">Essential Cookies: Required for basic platform functionality</li>
          <li className="font-medium">
            Performance Cookies: Help us understand how you use our platform
          </li>
          <li className="font-medium">
            Preference Cookies: Remember your settings and preferences
          </li>
          <li className="font-medium">
            Marketing Cookies: Used to deliver relevant educational content
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Third-Party Services",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          We may use third-party services to enhance our educational platform.
          These services have their own privacy policies and may collect
          information about you.
        </p>
        <p className="text-black font-medium heading-4 mt-2">
          Third-party services we use include:
        </p>
        <ul className="list-disc ml-6 text-black my-3">
          <li className="font-medium">Analytics services to understand platform usage</li>
          <li className="font-medium">Payment processors for course enrollments</li>
          <li className="font-medium">Email services for communications</li>
          <li className="font-medium">Cloud storage providers for content delivery</li>
          <li className="font-medium">Video hosting platforms for educational content</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Your Rights",
    children: (
      <div>
        <p className="text-black font-medium heading-4">
          You have several rights regarding your personal information:
        </p>
        <ul className="list-disc ml-6 text-black my-3">
          <li className="font-medium">
            Access: Request a copy of the personal information we hold about you
          </li>
          <li className="font-medium">
            Correction: Ask us to correct any inaccurate or incomplete
            information
          </li>
          <li className="font-medium">Deletion: Request deletion of your personal information</li>
          <li className="font-medium">
            Portability: Request a copy of your data in a structured format
          </li>
          <li className="font-medium">
            Restriction: Ask us to limit how we use your information
          </li>
          <li className="font-medium">
            Objection: Object to certain uses of your personal information
          </li>
        </ul>
        <p className="text-black font-medium heading-4 mt-2">
          To exercise any of these rights, please contact us using the
          information provided in the Contact Us section below.
        </p>
      </div>
    ),
  },
];
