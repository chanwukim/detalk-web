import { createContext, useContext } from "react";

export default function createSafeContext<T>(
  errorMessage: string = "useSafeContext must be used within a SafeProvider",
) {
  const Context = createContext<T | null>(null);

  function useSafeContext() {
    const context = useContext(Context);

    if (context === null) {
      throw new Error(errorMessage);
    }

    return context;
  }

  function Provider({ value, children }: { value: T; children: React.ReactNode }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  return [Provider, useSafeContext] as const;
}
