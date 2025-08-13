import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFixedPosition(element: HTMLElement) {
  const btnRect = element.getBoundingClientRect();

  const centerX = btnRect.left + btnRect.width / 2;
  const centerY = btnRect.top + btnRect.height / 2;

  const centerXPct = (centerX / window.innerWidth) * 100;
  const centerYPct = (centerY / window.innerHeight) * 100;

  return { centerXPct, centerYPct };
}
