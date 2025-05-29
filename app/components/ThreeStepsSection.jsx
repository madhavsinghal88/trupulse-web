import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./common/Button";

export default function ThreeStepsSection() {
  return (
    <section className="bg-primary-text text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start leading-tight mb-6">
          AI-Powered Discussions in 3 Steps | <br/>
          From Setup to Smart Reports
        </h2>

        {/* CTA Button and Text */}
        <div className="flex items-center justify-start gap-4 mt-6 mb-14">
          <Button text="Jets Start Journey" icon={ArrowRight} />

          <span className="text-sm italic">7 Days free trial</span>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/s1.png"
                alt="Step 1"
                width={400}
                height={240}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/play.png"
                  alt="Step 3"
                  width={50}
                  height={40}
                />
              </div>
            </div>
            <h3 className="mt-6 font-bold text-lg">Create & Define with AI</h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              Start by opening a new discussion. Use AI to define your goals,
              structure your conversation, and get smart suggestions based on
              intent.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/s2.png"
                alt="Step 2"
                width={400}
                height={240}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/play.png"
                  alt="Step 3"
                  width={50}
                  height={40}
                />
              </div>
            </div>
            <h3 className="mt-6 font-bold text-lg">Connect & Schedule</h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              Upload or connect your contact list. Easily schedule your
              discussions — let the system handle invites, reminders, and
              availability.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/s3.png"
                alt="Step 3"
                width={400}
                height={240}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/play.png"
                  alt="Step 3"
                  width={50}
                  height={40}
                />
              </div>
            </div>
            <h3 className="mt-6 font-bold text-lg">
              Distribute, Collect & Review
            </h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              Once discussions are live, the platform will handle distribution
              and response collection. Finally, review smart reports with
              insights that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
