"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logos/Logo";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { cn } from "@/lib/utils";
import { useHeaderContext } from "../providers/header-context";

export function Header() {
  const [scroll] = useWindowScroll();
  const { forceDark } = useHeaderContext();

  const isScrolled = (scroll?.y ?? 0) > 100;

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
              "w-[450px] transition-all text-white duration-500",
              isScrolled && "text-primary lg:w-50",
              forceDark && "text-primary",
            )}
          />
        </Link>
        <div className="flex items-center gap-8">
          <div
            className={cn(
              "text-white font-semibold transition duration-500 hidden lg:flex items-center gap-1",
              isScrolled && "text-primary",
              forceDark && "text-primary",
            )}
          >
            <Link href="/">EN</Link>
            <span>|</span>
            <Link href="/">AR</Link>
          </div>
          <button className="cursor-pointer">
            <Menu
              size={30}
              className={cn(
                "text-white transition duration-500",
                isScrolled && "text-primary",
                forceDark && "text-primary",
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
