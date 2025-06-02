"use client";

import Button from "@/app/components/common/Button";
import { ArrowRight } from "lucide-react";

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
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl text-[#F37C0C] font-semibold mb-6">
        HR Department
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border rounded-xl text-lg sm:text-xl shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                {plan.title}
              </h3>
              <p className=" text-2xl md:text-3xl font-semibold mb-4">
                {plan.price}
              </p>
              <Button text="Select" icon={ArrowRight} />

              {plan.features.map((featureGroup, idx) => (
                <div key={idx} className="my-8">
                  <h4 className="font-semibold">{featureGroup.section}</h4>
                  <ul className="list-disc list-inside text-secondary-text text-sm mt-1 space-y-1">
                    {featureGroup.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Button text="Select" icon={ArrowRight} />
          </div>
        ))}
      </div>
    </section>
  );
}
