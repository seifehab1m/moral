"use client";

import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logos/Logo";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { cn } from "@/lib/utils";
import { useHeaderContext } from "../providers/header-context";
import { useState } from "react";
import { useScrollLock } from "@/hooks";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Core Verticals", href: "/core-verticals" },
  { name: "Partnership", href: "/partnership" },
  { name: "Carrer Opportunities", href: "/carrer-opportunities" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scroll] = useWindowScroll();
  const { forceDark } = useHeaderContext();
  useScrollLock(open);

  const isScrolled = (scroll?.y ?? 0) > 10;

  return (
    <header
      className={cn(
        "py-7 lg:py-[52px] transition-all fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between duration-500 w-full",
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
        <button
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className="cursor-pointer"
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
        aria-hidden={!open}
        className={cn(
          "bg-primary fixed inset-0 w-screen h-screen transition",
          open && "opacity-100",
          !open && "opacity-0 pointer-events-none",
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
          <ul className="h-full flex flex-col justify-end text-xl gap-2 lg:text-5xl lg:gap-5">
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
