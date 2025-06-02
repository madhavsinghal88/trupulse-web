"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  "What is an AI-driven discussion platform?",
  "How does the platform facilitate one-on-one AI conversations?",
  "What types of surveys can I create with this platform?",
  "Is the AI capable of understanding complex user responses?",
  "Can the AI personalize conversations based on user input?",
  "How does the platform ensure real-time interaction during surveys?",
  "Can I integrate the surveyor with other tools or CRMs?",
  "Does the AI support multiple languages?",
  "Can I track user engagement and response quality?",
  "Is there an option to create branching logic in surveys?",
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="">
            Got questions? We’ve got answers to the most common ones right here.
          </p>
        </div>
        <div className="md:col-span-2 space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
              className="border-b py-3 flex justify-between cursor-pointer"
            >
              <span className="text-sm sm:text-base font-bold">{question}</span>
              {openIndex === index ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
