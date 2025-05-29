import Image from "next/image";

export default function Goals() {
  return (
    <section className="py-16 px-6 max-w-7xl m-auto">
      <div className="flex flex-col xl:flex-row justify-between">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
          Goals You Can Achieve <br />
          with Generative AI
        </h2>

        {/* Paragraphs */}
        <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-4xl">
          <p className="text-base leading-relaxed xl:max-w-[200px]">
            Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore
          </p>
          <p className="text-base leading-relaxed xl:max-w-[200px]">
            Deritatis et quasi architecto beatae vitae dicta architecto beatae
            vitae dicta sunt explicabo
          </p>
        </div>
      </div>
      {/* Tabs UI (no interactivity) */}
      <div className="mt-10 flex flex-col sm:flex-row max-w-lg rounded-2xl w-fit sm:rounded-full border overflow-hidden text-sm font-medium">
        <div className="px-6 py-3 bg-purple-100">One on one Chat</div>
        <div className="px-6 py-3 ">Group discussion</div>
        <div className="px-6 py-3 ">Digital Survey</div>
      </div>

      <div className="my-12 relative w-fit">
          <div className="p-4 border max-w-7xl bg-white m-auto rounded-2xl">
            <Image
              width={2000}
              height={2000}
              className="md:p-4"
              src="/images/video.png"
              alt="video"
            />
             <Image
              width={750}
              height={700}
              className="absolute right-0 top-0 size-72 sm:size-[600px] lg:size-[700px]"
              src="/images/white.png"
              alt="video"
            />
             <Image
              width={500}
              height={500}
              className="absolute right-0 -top-5 size-52 sm:size-[400px] lg:size-[500px]"
              src="/images/msg.png"
              alt="video"
            />

        </div>
      </div>
    </section>
  );
}
