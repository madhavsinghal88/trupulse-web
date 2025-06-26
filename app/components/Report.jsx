import Image from "next/image";
import Button from "./common/Button";
import { Fade } from "react-awesome-reveal";

export default function Report() {
  return (
    <section className="py-10 px-6  ">
      <div className="max-w-7xl w-[90vw] m-auto">
        <div className="flex flex-col w-fit justify-center items-center m-auto gap-5 ">
          {/* Title */}
          <h2 className="text-4xl text-center md:text-5xl w-full font-bold mb-3">
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

        <Fade className="my-12 relative " direction="up"
                triggerOnce
                delay={100}
              >
            <Image
              width={2000}
              height={2000}
              className="md:p-4"
              src="/images/sales.png"
              alt="video"
            />
        </Fade>

      </div>
    </section>
  );
}
