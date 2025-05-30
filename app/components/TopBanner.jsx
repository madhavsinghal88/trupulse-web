"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-white shadow-sm px-4 pr-8 py-2 relative z-10 ">
      <div className="mx-auto flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm justify-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            width={20}
            height={20}
            src="/images/rect.png"
            alt="logo"
            className="mt-0.5 sm:mt-0"
          />
          <p className="leading-snug">
            <span className="font-semibold">Trupulse.AI</span> – AI-driven
            discussions platform with the stability of low-code
            <span className="ml-1">≫</span>
            <a
              href="#"
              className="ml-1 underline font-semibold hover:text-[#000080] cursor-pointer"
            >
              Get Early Access
            </a>
          </p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3  hover:text-red-500 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
