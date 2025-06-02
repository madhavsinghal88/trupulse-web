import Image from "next/image";

export default function CompanyHeroSection() {
  return (
    <section className="h-fit px-6  pt-10 pb-32 md:pt-20 md:pb-40  ">
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
        <div className="relative lg:w-[400px]">
          <Image
            src="/images/p.png"
            alt="Use Case Demo"
            width={300}
            height={300}
            className="rounded-md bg-white rotate-2"
          />
           <Image
            className="absolute -left-40 hidden md:block top-10 rotate-145"
            width={100}
            height={200}
            src="/images/curve.png"
            alt="how to use"
          />
            <Image
            className="absolute -left-20 hidden md:block top-40 rotate-145"
            width={50}
            height={50}
            src="/images/star.png"
            alt="how to use"
          />

          {/* "How to use Trupulse" Handwriting text + arrow */}
          <div className="absolute -bottom-16 left-0 text-center text-black">
            <Image
              width={300}
              height={200}
              src="/images/nameline.png"
              alt="how to use"
            />
            <Image
              width={200}
              height={200}
              src="/images/name.png"
              alt="how to use"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
