// import Image from "next/image";

// export default function HowWeUseAi() {
//   return (
//     <section className="py-10 sm:py-16 px-6 max-w-7xl m-auto">
//       <div className="flex flex-col xl:flex-row justify-between">
//         {/* Title */}
//         <h2 className="text-4xl relative w-fit md:text-5xl font-bold max-w-xl leading-tight">
//           Why TruPulse Feedback Beats Conventional Employee Feedback Solutions
//           <Image
//             width={70}
//             height={70}
//             className="absolute right-16 md:right-28 top-10 md:top-14"
//             src="/images/orange.png"
//             alt="decorative"
//           />
//         </h2>

//         {/* Paragraph */}
//         <div className="mt-6 max-w-xl">
//           <p className="text-base leading-relaxed">
//             With zero-effort setup, dynamic AI run sessions, instant executive
//             summaries, and automatic employee metric generation, TruPulse solves
//             every traditional feedback tool limitation.
//           </p>
//         </div>
//       </div>

//       {/* Image */}
//       <div className="my-12">
//         <div className="p-4 max-w-7xl bg-white m-auto rounded-2xl">
//           <Image
//             width={2000}
//             height={2000}
//             className="md:p-4"
//             src="/images/img.png"
//             alt="how we use ai"
//           />
//         </div>
//       </div>

//       {/* Feature Grid */}
//       <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
//         <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
//           <h4 className="font-semibold text-base mb-2">Save Time</h4>
//           <p className="text-sm text-gray-600">
//             Reclaim hours weekly by eliminating manual feedback sessions.
//           </p>
//         </div>
//         <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
//           <h4 className="font-semibold text-base mb-2">AI Moderation</h4>
//           <p className="text-sm text-gray-600">
//             Live, dynamic, interactive interviews without manual facilitation.
//           </p>
//         </div>
//         <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
//           <h4 className="font-semibold text-base mb-2">Automated Metrics</h4>
//           <p className="text-sm text-gray-600">
//             Auto-calculate morale, engagement, retention risk, and more.
//           </p>
//         </div>
//         <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
//           <h4 className="font-semibold text-base mb-2">Instant Reports</h4>
//           <p className="text-sm text-gray-600">
//             No manual effort—reports delivered moments after completion.
//           </p>
//         </div>
//         <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm md:col-span-2">
//           <h4 className="font-semibold text-base mb-2">Unified Toolset</h4>
//           <p className="text-sm text-gray-600">
//             Pulse surveys, 1:1 discussions, and focus groups in one platform.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Button from "./common/Button";
import {
  Clock,
  BrainCircuit,
  BarChart4,
  FileBarChart,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Time",
    desc: "Reclaim hours weekly by eliminating manual feedback sessions.",
  },
  {
    icon: BrainCircuit,
    title: "AI Moderation",
    desc: "Live, dynamic, interactive interviews without manual facilitation.",
  },
  {
    icon: BarChart4,
    title: "Automated Metrics",
    desc: "Auto-calculate morale, engagement, retention risk, and more.",
  },
  {
    icon: FileBarChart,
    title: "Instant Reports",
    desc: "No manual effort reports delivered moments after completion.",
  },
  {
    icon: Workflow,
    title: "Unified Toolset",
    desc: "Pulse surveys, 1:1 discussions, and focus groups in one platform.",
  },
];
export default function WhyTruPulseSection() {
  return (
    <section className="relative py-10 px-4 overflow-hidden">
      {/* Background image layer – replace src */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/why.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left content */}
        <div className="m-auto">
          <h2 className="text-3xl md:text-5xl font-semibold max-w-xl mb-6">
           Why TruPulse Beats Conventional Solutions
          </h2>

          <Button text="Book a demo" />
        </div>

        {/* Right content */}
        <div className="space-y-14 m-auto">
          {features.map((item, id) => {
            const Icon = item.icon;
            return (
              <div key={id} className="flex items-start gap-4">
                <div className="md:min-w-[80px] md:min-h-[80px] bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                  <Icon className="w-10 h-10 text-primary-text" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-text">
                    {item.title}
                  </h4>
                  <p className="text-sm max-w-sm text-secondary-text">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
