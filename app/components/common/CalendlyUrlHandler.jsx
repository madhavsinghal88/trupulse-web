"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCalendly } from "@/lib/CalendlyContext";

export default function CalendlyUrlHandler() {
  const searchParams = useSearchParams();
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const calendlyParam = searchParams.get("calendly");
    if (calendlyParam === "true" || calendlyParam === "1") {
      openCalendly();
    }
  }, [searchParams, openCalendly]);

  return null;
}
