import Image from "next/image";

export default function PricingHeroSection() {
  return (
    <section className="bg-[#E07800]/10 h-fit px-6 md:px-20 pt-20 pb-32 md:pb-60  ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 mt-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center max-w-5xl m-auto font-bold leading-tight mb-6">
            Power Up Your AI Discussions – Pick the Plan That Fits{" "}
          </h2>
          <p className="text-xl lg:text-3xl text-center max-w-4xl m-auto  ">
            Explore how our solution powers real-world results. From driving
            high-intent leads to automating your goals{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
