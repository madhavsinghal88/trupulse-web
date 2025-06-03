"use client";

import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="bg-[#f3d6ff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium mb-4">Blog / Insights & Ideas</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Insights & Ideas to Power <br className="hidden sm:block" /> Your
          Business Forward
        </h1>
        <p className="text-xl sm:text-2xl max-w-xl leading-relaxed mb-6">
          Explore how our solution powers real-world results. From driving
          high-intent leads to automating your goals
        </p>

        <div className="flex items-center gap-3">
          <Image
            src="/images/1.png"
            alt="Philip Darville"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p>
              <span className="font-semibold">Philip Darville</span> is the
              founder of Digital Bite Media,
            </p>
            <p className="text-sm text-gray-600">3 Days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
