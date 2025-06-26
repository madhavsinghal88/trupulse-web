"use client";
import { InlineWidget } from "react-calendly";
import { useCalendly } from "@/lib/CalendlyContext";

export default function CalendlyModal() {
  const { isOpen, closeCalendly } = useCalendly();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-full max-w-3xl relative">
        <button
          onClick={closeCalendly}
          className="absolute top-2 right-4 cursor-pointer hover:scale-110 duration-300 text-gray-500 hover:text-black"
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
