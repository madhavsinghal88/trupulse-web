import Image from "next/image";

export default function Report() {
  return (
    <section className="py-10 px-6  ">
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col xl:flex-row justify-between">
          {/* Title */}
          <h2 className="text-4xl w-fit md:text-5xl font-bold max-w-2xl leading-tight">
            Report Compared to <br />
            traditional tools
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

        <div className="my-12 relative">
          <div className="absolute -top-2 sm:-top-4 inset-x-6 rounded-2xl h-full border z-[-1]"></div>
          <div className="p-4 border max-w-7xl bg-white m-auto rounded-2xl">
            <Image
              width={2000}
              height={2000}
              className="md:p-4"
              src="/images/dashboard.png"
              alt="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
