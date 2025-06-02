import Image from "next/image";

export default function PricingHeroSection() {
  return (
    <section className="bg-[#E07800]/10 h-fit px-6 md:px-20 pt-10 pb-32 md:pt-20 md:pb-40  ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 mt-14">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let’s dive into our use <br />
            cases and see the <br />
            magic in action!
          </h2>
          <p className="text-lg sm:text-2xl max-w-xl ">
            Explore how our solution powers real-world results. From driving
            high-intent leads to automating your goals
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 max-w-[500px]">
          <Image
            src="/images/video.png"
            alt="Use Case Demo"
            width={500}
            height={300}
            className="rounded-md border p-4 bg-blue-100 rotate-2"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#3F2AEF] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              ▶
            </button>
          </div>

          {/* "How to use Trupulse" Handwriting text + arrow */}
          <div className="absolute -bottom-16 left-10 text-center text-black">
            <Image
              width={100}
              height={200}
              src="/images/use.png"
              alt="how to use"
            />
          </div>
          <Image
            className="absolute left-40 -bottom-20 rotate-145"
            width={100}
            height={200}
            src="/images/curve.png"
            alt="how to use"
          />
        </div>
      </div>
    </section>
  );
}
