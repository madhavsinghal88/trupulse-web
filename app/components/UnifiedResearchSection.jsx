"use client";

import Image from "next/image";

export default function UnifiedResearchSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold  mb-6">
           Choose Your Feedback Mode and Accelerate Insights
          </h2>
          <p className="text-base md:text-lg text-secondary-text max-w-xl">
           Engage teams via 1:1 chats, AI-moderated focus groups, or smart surveys for faster, deeper employee understanding.
          </p>
        </div>

        {/* Right Image Block */}
        <div className="flex justify-center" data-aos="zoom-in">
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
