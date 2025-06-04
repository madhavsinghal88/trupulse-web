import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./common/Button";

export default function ThreeStepsSection() {
  return (
    <section className="bg-primary-text text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl max-w-4xl lg:text-5xl font-bold text-start leading-tight mb-6">
          See How TruPulse Automates Creation, Execution, and Analysis
          End-to-End
        </h2>

        {/* CTA Button and Text */}
        <div className="flex items-center justify-start gap-4 mt-6 mb-14">
          <Button text="Lets Start Journey" icon={ArrowRight} />

          <span className="text-sm italic">7 Days free trial</span>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left relative">
          {/* Step 1 */}
          <div className="flex relative flex-col items-center text-center md:text-left md:items-start">
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
            <h3 className="mt-6 font-bold text-lg">
              Design Sessions in Seconds
            </h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              Experience AI creating the perfect set of discussion topics and
              survey questions based on any use case you choose.
            </p>
            <Image
              src="/images/c1.png"
              alt="Avatar"
              width={150}
              height={150}
              className="absolute -right-40 -top-16 hidden xl:block"
            />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center md:text-left md:items-start">
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
            <h3 className="mt-6 font-bold text-lg">
              AI-Led Discussions and Interviews
            </h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              Watch AI moderators conduct interviews and focus groups,
              generating topic-focused questions with real-time follow-up probes
              for deeper understanding of employee sentiment.
            </p>
            <Image
              src="/images/c2.png"
              alt="Avatar"
              width={200}
              height={200}
              className="absolute -right-20 -top-22 hidden xl:block"
            />
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
              Automated Reporting and Insights
            </h3>
            <p className="text-sm mt-2 max-w-[400px] ">
              See AI transform sessions into executive summaries, actionable
              insights, and visual dashboards—no manual analysis required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
