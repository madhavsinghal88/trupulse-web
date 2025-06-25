// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Button from "./common/Button";
// import { ArrowRight } from "lucide-react";

// const tabContent = {
//   creating: {
//     title: "TruPulse Creates It",
//     description:
//       "AI generates discussion topics and survey questions based on the use case you choose.",
//     image: "/images/assist.png",
//   },
//   exicuter: {
//     title: "TruPulse Runs It",
//     description:
//       "AI conducts sessions, dynamically probing discussion topics and participant replies.",
//     image: "/images/dashboard.png",
//   },
//   analysing: {
//     title: "TruPulse Analyzes It",
//     description:
//       "AI distills feedback into themes, metrics, and polished executive summaries automatically.",
//     image: "/images/video.png",
//   },
// };

// export default function MeetAssistantSection() {
//   const [activeTab, setActiveTab] = useState("creating");
//   const current = tabContent[activeTab];

//   return (
//     <section className="bg-purple-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 m-auto">
//         {/* Left Side Text */}
//         <div className="w-full lg:w-1/2">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Meet TruPulse, Your AI Agent!
//           </h2>
//           <p className="text-lg sm:text-2xl mb-8  max-w-md">
//             You set the strategy, TruPulse creates, runs, and analyzes your
//             feedback sessions.
//           </p>

//           <div className="space-y-6 text-sm">
//             {Object.entries(tabContent).map(([key, item]) => (
//               <div
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`cursor-pointer hover:scale-105 duration-300 rounded-xl${
//                   activeTab === key
//                     ? "font-semibold px-2 rounded-lg bg-purple-100"
//                     : ""
//                 }`}
//               >
//                 <p className="font-bold text-base">{item.title}</p>
//                 <p className="max-w-md">{item.description}</p>
//                 <hr className="my-2" />
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="mt-10">
//             <Button text="Lets Start Journey" icon={ArrowRight} />
//           </div>
//         </div>

//         {/* Right Side Card */}
//         <div className="w-full lg:w-1/2 text-secondary-text">
//           <Image
//             width={1000}
//             height={1000}
//             src={current.image}
//             alt={current.title}
//             className="rounded-xl object-contain w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Button from "./common/Button";

const steps = [
  {
    key: "create",
    title: "TruPulse Creates It",
    description:
      "TruPulse generates discussion topics and survey questions based on the use case you choose.",
    image: "/images/rr.png",
    border: "border-green-300",
  },
  {
    key: "run",
    title: "TruPulse Runs It",
    description:
      "TruPulse conducts sessions, dynamically probing discussion topics and participant replies.",
    image: "/images/r2.png",
    border: "border-cyan-300",
  },
  {
    key: "analyze",
    title: "TruPulse Analyzes It",
    description:
      "TruPulse distills feedback into themes, metrics, and polished executive summaries automatically.",
    image: "/images/r3.png",
    border: "border-blue-300",
  },
];

export default function MeetAssistantSection() {
  return (
    <section className="bg-[#F3FFE6] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-4">
          Meet TruPulse, Your <span className="text-[#542EFF]">AI</span> Agent!
        </h2>
        <p className="text-secondary-text text-lg md:text-xl mb-6">
          You set the strategy, TruPulse creates, runs, and analyzes your
          feedback sessions.
        </p>

        <Button text="Book a demo" />
      </div>

      {/* Step Cards */}
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div key={step.key}>
            <div data-aos="zoom-in"
              className={`bg-white border-4 ${step.border} md:h-[350px] overflow-hidden rounded-2xl p-4 shadow-md hover:shadow-lg transition`}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={500}
                height={350}
                className="rounded-xl mb-4 w-full object-contian "
              />
            </div>
            <div className=" m-2 mt-6">
            <h3 className="text-lg md:text-xl font-semibold text-primary-text mb-1">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-secondary-text">{step.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
