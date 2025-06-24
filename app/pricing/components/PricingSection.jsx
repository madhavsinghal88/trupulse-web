// "use client";

// import Button from "@/app/components/common/Button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

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
//     <section className="max-w-7xl mx-auto py-12 md:pb-0 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {plans.map((plan) => (
//           <div
//             key={plan.title}
//             className={`relative border ${
//               plan.title === "Pro" ? "border-orange-500" : ""
//             } rounded-xl text-lg sm:text-xl shadow-sm p-6 flex flex-col justify-between bg-white absolute md:-top-44`}
//           >
//             {/* Ribbon */}
//             {plan.title === "Pro" && (
//               <Image width={200} height={200} className="absolute -top-1 right-0" src="/images/ribbon.png" alt="ribbon" />
//             )}

//             {/* Header */}
//             <div>
//               <div
//                 className={`border-b mb-4 ${
//                   plan.title === "Pro" ? "border-orange-500" : ""
//                 }`}
//               >
//                 <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-primary-text">
//                   {plan.title}
//                 </h3>
//                 <p className="text-2xl md:text-3xl font-semibold mb-4 text-primary-text">
//                   {plan.price}
//                 </p>
//               </div>

//               {/* Select Button */}
//               <button className="cursor-pointer text-center w-full bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-8 py-2 rounded-full font-semibold text-base md:text-lg gap-4 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
//                 Select
//               </button>

//               {/* Features */}
//               {plan.features.map((featureGroup, idx) => (
//                 <div key={idx} className="my-8">
//                   <h4 className="font-semibold text-primary-text">
//                     {featureGroup.section}
//                   </h4>
//                   <ul className="list-disc list-inside text-secondary-text text-sm mt-1 space-y-1">
//                     {featureGroup.items.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Button from "@/app/components/common/Button";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (planTitle) => {
    setExpandedCards(prev => ({
      ...prev,
      [planTitle]: !prev[planTitle]
    }));
  };

  return (
    <section className="max-w-7xl mx-auto py-12 md:pb-0 px-4 sm:px-6 lg:px-8">
      {/* Desktop View - Keep original layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div                 data-aos="zoom-in-up"

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
                <div                 data-aos="zoom-in"
 key={idx} className="my-8">
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

      {/* Mobile View - New collapsible layout */}
      <div className="md:hidden space-y-4">
        {plans.map((plan) => (
          <div                 data-aos="zoom-in-up"

            key={plan.title}
            className={` ${
              plan.title === "Pro" ? "border-orange-500" : ""
            } bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden`}
          >
            {/* Card Header - Always Visible */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {plan.price === "Custom Pricing" ? "Custom" : plan.price}
                  </p>
                </div>
                <button className="bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                  Select
                </button>
              </div>

              {/* View Details Toggle */}
              <button
                onClick={() => toggleCard(plan.title)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-gray-600 font-medium">View Details</span>
                {expandedCards[plan.title] ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>

            {/* Expandable Content */}
            {expandedCards[plan.title] && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4 space-y-6">
                  {plan.features.map((featureGroup, idx) => (
                    <div                 data-aos="zoom-in-up"
 key={idx}> 
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {featureGroup.section}
                      </h4>
                      <ul className="space-y-2">
                        {featureGroup.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-gray-600 text-sm">• {item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}