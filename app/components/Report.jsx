import Image from "next/image";
import Button from "./common/Button";

export default function Report() {
  return (
    <section className="py-10 px-6  ">
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col w-fit justify-center items-center m-auto gap-5 ">
          {/* Title */}
          <h2 className="text-4xl w-fit md:text-5xl font-bold max-w-3xl leading-tight">
        Management Ready Reports
          </h2>

          {/* Paragraphs */}
          <div className=" max-w-4xl">
            <p className="text-base text-center leading-relaxed">
            Automatically create polished reports featuring executive summaries, highlighted findings, and more than fifteen AI generated, HR-centric employee metrics for instant insights.
            </p>
          </div>
          <Button text="Book a demo"/>
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
