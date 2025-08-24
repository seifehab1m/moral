"use client";

import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logos/Logo";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { cn } from "@/lib/utils";
import { useHeaderContext } from "../providers/header-context";
import { useRef, useState } from "react";
import { useDisableScrolling } from "@/hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getFixedPosition } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "What We Do", href: "/core-verticals" },
  { name: "Partner With Us", href: "/partnership" },
  {
    name: "Careers & Opportunities",
    href: "/carrer-opportunities",
  },
  { name: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scroll] = useWindowScroll();
  const { forceDark } = useHeaderContext();
  const navRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  useDisableScrolling(open);

  const isScrolled = (scroll?.y ?? 0) > 10;

  useGSAP(() => {
    const { centerXPct, centerYPct } = getFixedPosition(openButtonRef.current!);
    gsap.to(navRef.current, {
      clipPath: open
        ? `circle(200% at ${centerXPct}% ${centerYPct}%)`
        : `circle(0% at ${centerXPct}% ${centerYPct}%)`,
      duration: 0.5,
    });
  }, [open]);

  return (
    <header
      className={cn(
        "py-7 lg:py-[52px] transition-all fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between duration-1300 ease-in-out w-full",
        isScrolled && "bg-white shadow lg:py-7",
      )}
    >
      <div className="container w-full flex items-center justify-between">
        <Link href="/">
          <Logo
            className={cn(
              "w-[450px] transition-all text-grey-2 duration-500",
              isScrolled && "text-primary lg:w-50",
              forceDark && "text-primary",
            )}
          />
        </Link>
        <nav className={cn(!isScrolled && "lg:hidden")}>
          <ul className="hidden lg:flex items-center gap-5 text-primary font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={openButtonRef}
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className={cn("cursor-pointer", isScrolled && "lg:hidden")}
        >
          <Menu
            size={30}
            className={cn(
              "text-grey-2 transition duration-500",
              isScrolled && "text-primary",
              forceDark && "text-primary",
            )}
          />
        </button>
      </div>

      <nav
        ref={navRef}
        aria-hidden={!open}
        style={{
          clipPath: "circle(0% at 50% 50%);",
        }}
        className={cn(
          "bg-primary fixed inset-0 w-screen h-screen transition opacity-100",
          !open && "pointer-events-none",
        )}
      >
        <div className="container h-full flex flex-col justify-between py-15">
          <button
            aria-label="Close Menu"
            className="cursor-pointer text-white self-end"
            onClick={() => setOpen(false)}
          >
            <XIcon className="size-7 lg:size-10" />
          </button>
          <ul className="h-full flex flex-col md:justify-end justify-center text-xl gap-2 lg:text-4xl lg:gap-5">
            {links.map((link) => (
              <li key={link.name} onClick={() => setOpen(false)}>
                <Link
                  href={link.href}
                  className="text-grey-2 duration-600 lg:hover:font-semibold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
