import React from "react";

export default function PrivacyPolicyCard({
  title,
  number,
  children,
}: {
  title: string;
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="sub-header">{number>9?'':`0${number}`}</h5>
      <h2 className="md:text-[48px] text-2xl text-primary font-medium pb-8 pt-3">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
