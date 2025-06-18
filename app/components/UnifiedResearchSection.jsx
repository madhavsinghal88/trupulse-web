"use client";

import Image from "next/image";

export default function UnifiedResearchSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold  mb-6">
            Unified Research, Powered <br />
            by AI Conversations
          </h2>
          <p className="text-base md:text-lg text-secondary-text max-w-xl">
            AI-powered conversations, focus groups, and surveys that deliver deep insights—
            <span className="font-medium"> faster, smarter, and at scale</span>.
          </p>
        </div>

        {/* Right Image Block */}
        <div className="flex justify-center">
          <Image
            src="/images/10.png" 
            alt="10x Research Graphic"
            width={400}
            height={400}
            className="object-contain w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
