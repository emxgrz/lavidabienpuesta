"use client";

import { useEffect, useRef } from "react";

export function CopyrightYear({ initialYear }: { initialYear: number }) {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();

    if (yearRef.current && currentYear !== initialYear) {
      yearRef.current.textContent = String(currentYear);
    }
  }, [initialYear]);

  return (
    <span ref={yearRef} suppressHydrationWarning>
      {initialYear}
    </span>
  );
}
