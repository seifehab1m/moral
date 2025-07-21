import { useLayoutEffect } from "react";
import { useHeaderContext } from "@/components/providers/header-context";

export function useHeaderTheme(forceDark?: boolean) {
  const { setForceDark } = useHeaderContext();
  useLayoutEffect(() => {
    forceDark ??= true;
    setForceDark(forceDark);
  }, []);
}
