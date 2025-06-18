"use client";

import Button from "@/app/components/common/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    title: "Starter",
    price: "$0/month",
    buttonStyle: "bg-white border border-gray-300 text-black hover:bg-gray-100",
    features: [
      {
        section: "AI-Powered Conversations",
        items: [
          "Natural Language Understanding",
          "Multi-Channel Support",
          "Real-time Responses",
          "Customizable AI Personas",
          "Context-Aware Conversations",
        ],
      },
      {
        section: "Lead Sales Automation",
        items: [
          "Lead Scoring",
          "Real-time Qualification",
          "CRM Integration",
          "Sales Playbooks",
          "Pipeline Reporting",
        ],
      },
      {
        section: "Internal Team Collaboration",
        items: [
          "Internal Knowledge Base Integration",
          "Automated Onboarding",
          "Instant Q&A Support",
          "Task Management Integration (Asana, Jira)",
        ],
      },
      {
        section: "Knowledge Management",
        items: [
          "Document Upload",
          "Smart Search",
          "Content Updating",
          "FAQ Generation",
        ],
      },
    ],
  },
  {
    title: "Pro",
    price: "$29/month",
    buttonStyle: "bg-primary text-white hover:bg-primary/90",
    features: [
      {
        section: "AI-Powered Conversations",
        items: [
          "Natural Language Understanding",
          "Multi-Channel Support",
          "Real-time Responses",
          "Customizable AI Personas",
          "Context-Aware Conversations",
        ],
      },
      {
        section: "Lead Sales Automation",
        items: [
          "Lead Scoring",
          "Real-time Qualification",
          "CRM Integration",
          "Sales Playbooks",
          "Pipeline Reporting",
        ],
      },
      {
        section: "Internal Team Collaboration",
        items: [
          "Internal Knowledge Base Integration",
          "Automated Onboarding",
          "Instant Q&A Support",
          "Task Management Integration (Asana, Jira)",
        ],
      },
      {
        section: "Knowledge Management",
        items: [
          "Document Upload",
          "Smart Search",
          "Content Updating",
          "FAQ Generation",
        ],
      },
    ],
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    buttonStyle: "bg-white border border-gray-300 text-black hover:bg-gray-100",
    features: [
      {
        section: "AI-Powered Conversations",
        items: [
          "Natural Language Understanding",
          "Multi-Channel Support",
          "Real-time Responses",
          "Customizable AI Personas",
          "Context-Aware Conversations",
        ],
      },
      {
        section: "Lead Sales Automation",
        items: [
          "Lead Scoring",
          "Real-time Qualification",
          "CRM Integration",
          "Sales Playbooks",
          "Pipeline Reporting",
        ],
      },
      {
        section: "Internal Team Collaboration",
        items: [
          "Internal Knowledge Base Integration",
          "Automated Onboarding",
          "Instant Q&A Support",
          "Task Management Integration (Asana, Jira)",
        ],
      },
      {
        section: "Knowledge Management",
        items: [
          "Document Upload",
          "Smart Search",
          "Content Updating",
          "FAQ Generation",
        ],
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:pb-0 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative border ${
              plan.title === "Pro" ? "border-orange-500" : ""
            } rounded-xl text-lg sm:text-xl shadow-sm p-6 flex flex-col justify-between bg-white absolute md:-top-44`}
          >
            {/* Ribbon */}
            {plan.title === "Pro" && (
              <Image width={200} height={200} className="absolute -top-1 right-0" src="/images/ribbon.png" alt="ribbon" />
            )}

            {/* Header */}
            <div>
              <div
                className={`border-b mb-4 ${
                  plan.title === "Pro" ? "border-orange-500" : ""
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-primary-text">
                  {plan.title}
                </h3>
                <p className="text-2xl md:text-3xl font-semibold mb-4 text-primary-text">
                  {plan.price}
                </p>
              </div>

              {/* Select Button */}
              <button className="cursor-pointer text-center w-full bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-8 py-2 rounded-full font-semibold text-base md:text-lg gap-4 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                Select
              </button>

              {/* Features */}
              {plan.features.map((featureGroup, idx) => (
                <div key={idx} className="my-8">
                  <h4 className="font-semibold text-primary-text">
                    {featureGroup.section}
                  </h4>
                  <ul className="list-disc list-inside text-secondary-text text-sm mt-1 space-y-1">
                    {featureGroup.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import { ArrowRight } from "lucide-react";
// import clsx from "clsx";

// const plans = [
//   {
//     title: "Starter",
//     price: "$0/month",
//     buttonStyle: "bg-white border border-gray-300 text-black hover:bg-gray-100",
//     features: [
//       {
//         section: "AI-Powered Conversations",
//         items: [
//           "Natural Language Understanding",
//           "Multi-Channel Support",
//           "Real-time Responses",
//           "Customizable AI Personas",
//           "Context-Aware Conversations",
//         ],
//       },
//       {
//         section: "Lead Sales Automation",
//         items: [
//           "Lead Scoring",
//           "Real-time Qualification",
//           "CRM Integration",
//           "Sales Playbooks",
//           "Pipeline Reporting",
//         ],
//       },
//       {
//         section: "Internal Team Collaboration",
//         items: [
//           "Internal Knowledge Base Integration",
//           "Automated Onboarding",
//           "Instant Q&A Support",
//           "Task Management Integration (Asana, Jira)",
//         ],
//       },
//       {
//         section: "Knowledge Management",
//         items: [
//           "Document Upload",
//           "Smart Search",
//           "Content Updating",
//           "FAQ Generation",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Pro",
//     price: "$29/month",
//     buttonStyle: "bg-primary text-white hover:bg-primary/90",
//     features: [
//       {
//         section: "AI-Powered Conversations",
//         items: [
//           "Natural Language Understanding",
//           "Multi-Channel Support",
//           "Real-time Responses",
//           "Customizable AI Personas",
//           "Context-Aware Conversations",
//         ],
//       },
//       {
//         section: "Lead Sales Automation",
//         items: [
//           "Lead Scoring",
//           "Real-time Qualification",
//           "CRM Integration",
//           "Sales Playbooks",
//           "Pipeline Reporting",
//         ],
//       },
//       {
//         section: "Internal Team Collaboration",
//         items: [
//           "Internal Knowledge Base Integration",
//           "Automated Onboarding",
//           "Instant Q&A Support",
//           "Task Management Integration (Asana, Jira)",
//         ],
//       },
//       {
//         section: "Knowledge Management",
//         items: [
//           "Document Upload",
//           "Smart Search",
//           "Content Updating",
//           "FAQ Generation",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "Custom Pricing",
//     buttonStyle: "bg-white border border-gray-300 text-black hover:bg-gray-100",
//     features: [
//       {
//         section: "AI-Powered Conversations",
//         items: [
//           "Natural Language Understanding",
//           "Multi-Channel Support",
//           "Real-time Responses",
//           "Customizable AI Personas",
//           "Context-Aware Conversations",
//         ],
//       },
//       {
//         section: "Lead Sales Automation",
//         items: [
//           "Lead Scoring",
//           "Real-time Qualification",
//           "CRM Integration",
//           "Sales Playbooks",
//           "Pipeline Reporting",
//         ],
//       },
//       {
//         section: "Internal Team Collaboration",
//         items: [
//           "Internal Knowledge Base Integration",
//           "Automated Onboarding",
//           "Instant Q&A Support",
//           "Task Management Integration (Asana, Jira)",
//         ],
//       },
//       {
//         section: "Knowledge Management",
//         items: [
//           "Document Upload",
//           "Smart Search",
//           "Content Updating",
//           "FAQ Generation",
//         ],
//       },
//     ],
//   },
// ];
// export default function PricingSection() {
//   return (
//     <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-lg sm:text-xl text-[#F37C0C] font-semibold mb-6 text-center">
//         HR Department
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={plan.title}
//             className={clsx(
//               "relative bg-white rounded-xl border shadow-sm p-6 flex flex-col",
//               plan.highlight && "border-[#F37C0C] border-2"
//             )}
//           >
//             {/* Ribbon for Pro plan */}
//             {plan.highlight && (
//               <span className="absolute -top-3 -right-3 bg-[#F37C0C] text-white text-xs font-semibold px-3 py-1 rounded-br-xl rounded-tl-xl z-10 shadow">
//                 Customer Choice
//               </span>
//             )}

//             {/* Header */}
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-primary-text mb-1">
//                 {plan.title}
//               </h3>
//               <p className="text-xl font-semibold text-[#1B1440]">{plan.price}</p>
//             </div>

//             {/* Select button */}
//             <button
//               className="bg-gradient-to-r from-[#FF7A00] to-[#FF3D00] text-white font-medium rounded-full px-6 py-2 text-sm mb-6 hover:opacity-90 transition w-full"
//             >
//               Select
//             </button>

//             {/* Features */}
//             <div className="space-y-6 text-sm text-secondary-text">
//               {plan.features.map((group, idx) => (
//                 <div key={idx}>
//                   <h4 className="font-semibold text-primary-text mb-1">
//                     {group.section}
//                   </h4>
//                   <ul className="list-disc list-inside space-y-1">
//                     {group.items.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Optional repeat button at bottom */}
//             <div className="mt-8">
//               <button
//                 className="bg-gradient-to-r from-[#FF7A00] to-[#FF3D00] text-white font-medium rounded-full px-6 py-2 text-sm hover:opacity-90 transition w-full"
//               >
//                 Select
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
