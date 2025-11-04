"use client";
import { InlineWidget } from "react-calendly";
import { useCalendly } from "@/lib/CalendlyContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CalendlyModal() {
  const { isOpen, closeCalendly } = useCalendly();
  const router = useRouter();

  // 🔹 Clean URL when modal closes
  useEffect(() => {
    if (!isOpen) {
      const params = new URLSearchParams(window.location.search);
      if (params.has("calendly")) {
        params.delete("calendly");
        const queryString = params.toString();
        const newUrl = queryString
          ? `${window.location.pathname}?${queryString}`
          : window.location.pathname;
        // Defer router update slightly to avoid hydration conflicts
        setTimeout(() => {
          router.replace(newUrl, { scroll: false });
        }, 100);
      }
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCalendly();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    closeCalendly();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-4 w-full max-w-3xl relative">
        <button
          onClick={handleCloseClick}
          className="absolute top-2 right-4 cursor-pointer hover:scale-110 duration-300 text-gray-500 hover:text-black z-50 text-2xl font-bold"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="h-[600px]">
          <InlineWidget
            url="https://calendly.com/dirkpeters-scanta/30min?hide_event_type_details=1"
            styles={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
