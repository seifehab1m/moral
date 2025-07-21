"use client";

import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const HeaderContext = createContext<{
  forceDark: boolean;
  setForceDark: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export function HeaderProvider({ children }: React.PropsWithChildren) {
  const [forceDark, setForceDark] = useState(false);

  return (
    <HeaderContext.Provider value={{ forceDark, setForceDark }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === null) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
}
