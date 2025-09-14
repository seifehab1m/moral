"use client";

import { GlobalFooterComponent } from "@/cms/Api";
import { StrapiImage } from "@/components/ui";
import Link from "next/link";

type Props = {
  footer: GlobalFooterComponent | undefined;
};

export function Footer({ footer }: Props) {
  if (!footer) return null;

  return (
    <footer className="bg-primary relative z-10 px-4 py-8 lg:py-[42px]">
      <div className="container flex flex-col lg:flex-row lg:justify-between lg:gap-32">
        {footer?.logo && (
          <Link href="/" className="flex-[.3]">
            <StrapiImage
              className="max-w-[148px] lg:max-w-[393px]"
              image={footer?.logo}
            />
          </Link>
        )}
        <div className="flex-[.7] text-grey-2 grid grid-cols-3 lg:gap-10 mt-5 lg:mt-0">
          {footer?.links?.map((list, i) => (
            <nav key={"nav " + i} className="">
              <h2 className="font-medium text-sm lg:text-[28px]">
                {list.header}
              </h2>

              <ul key={"ul " + i} className="mt-4 space-y-2.5 lg:space-y-4">
                {list?.items?.map((i, j) => {
                  if (i.type === "address")
                    return (
                      <li key={j}>
                        <Link href={i.href!}>
                          <address className="mt-4 font-medium text-xs lg:text-xl not-italic">
                            {i.label?.split("\n").map((s) => (
                              <>
                                {s}
                                <br />
                              </>
                            ))}
                          </address>
                        </Link>
                      </li>
                    );
                  else
                    return (
                      <li key={j}>
                        <Link
                          className="font-medium text-xs lg:text-xl transition hover:text-whtie"
                          href={i.href!}
                          target={i.type === "default" ? "_self" : "_blank"}
                        >
                          {i.label}
                        </Link>
                      </li>
                    );
                })}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
