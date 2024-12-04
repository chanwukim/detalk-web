"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { PropsWithChildren } from "@/lib/types";

export default function Portal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, document.body);
}
