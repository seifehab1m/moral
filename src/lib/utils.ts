import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

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

export function gsapSplit(
  ref: React.RefObject<any>,
  target: gsap.DOMTarget,
  vars?: gsap.TweenVars,
) {
  const text = gsap.utils.toArray(ref.current!);

  text.forEach(() => {
    SplitText.create(target, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          ...(vars ?? {}),
          yPercent: 150,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref.current!,
            ...(vars?.scrollTrigger ?? {}),
          },
        });
      },
    });
  });
}
