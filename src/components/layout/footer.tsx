import Logo from "@/assets/logos/Logo";
import { Input } from "../ui/input";
import Link from "next/link";

type FooterNavigationLinks = {
  header: string;
  children?: Array<{ label: string; href: string }> | string;
};

const links: FooterNavigationLinks[] = [
  {
    header: "Quick Links",
    children: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "What We Do", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "Media", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    header: "Social",
    children: [
      { label: "Linkedin", href: "#" },
      { label: "Instagram", href: "#" },
      // { label: "X", href: "#" },
    ],
  },
  {
    header: "Location ",
    children:
      "Level 22, Office No. 22A & 22C Jumeirah Emirates Towers PO Box 416131 Dubai, UAE",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary relative z-10 px-4 py-8 lg:py-[42px]">
      <div className="container flex flex-col lg:flex-row lg:justify-between lg:gap-32">
        <div className="flex-[.3]">
          <Logo className="text-grey-2 max-w-[148px] lg:max-w-[393px]" />
          <p className="text-grey-2 font-semibold text-sm lg:text-xl mt-8 lg:mt-10">
            Join Our Newsletter
          </p>
          <Input variant="secondary" />
        </div>
        <div className="flex-[.7] text-grey-2 grid grid-cols-3 lg:gap-10 mt-5 lg:mt-[162px]">
          {links.map((c, i) =>
            Array.isArray(c.children) ? (
              <nav key={"nav " + i} className="">
                <h2 className="font-medium text-sm lg:text-[28px]">
                  {c.header}
                </h2>
                {
                  <ul key={"ul " + i} className="mt-4 space-y-2.5 lg:space-y-4">
                    {c.children?.map((l, j) => (
                      <li key={j}>
                        <Link
                          className="font-medium text-xs lg:text-xl transition hover:text-whtie"
                          href={l.href}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
              </nav>
            ) : (
              <div key={"div " + i}>
                <h2 className="font-medium text-sm lg:text-[28px]">
                  {c.header}
                </h2>
                <address className="mt-4 font-medium text-xs lg:text-xl not-italic">
                  {c.children}
                </address>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
