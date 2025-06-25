"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "./common/Button";

const messages = [
  {
    sender: "ai",
    avatar: "/images/2.png",
    text: "This is your TruPulse Discussion session on the company reorg. What positive changes have you noticed so far?",
  },
  {
    sender: "ai",
    text: "Improved decision speed—fewer approval layers than before.",
  },
  {
    sender: "user",
    avatar: "/images/1.png",
    text: "That’s great. Any downsides to faster decisions?",
  },
  {
    sender: "ai",
    text: "Sometimes we move forward without full stakeholder alignment, causing rework.",
  },
];

export default function OneToOneSection() {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="text-xl font-semibold border-b-2 w-fit border-black mb-2 ">
            1:1 Discussions
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-10 max-w-lg  mb-2 md:leading-14">
            Personalized, AI-driven chats that capture real employee sentiment.{" "}
          </h2>

          <div className="space-y-6 mb-4 text-base ">
            {[
              "Automated chat sessions deliver structured, one-on-one conversations without scheduling hassles, anytime.",
              "Intelligent follow-up questions continuously probe responses to extract deeper, meaningful insights.",
              "Session transcripts and executive summaries are automatically generated for quick review.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className=" mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <Button text="Book a demo" />
        </div>

        {/* Right - Chat */}
        <div className="space-y-4 max-w-md m-auto relative">
          {messages.map((msg, index) => {
            const isUser = msg.sender === "user";
            const isIntro = index === 0;

            return (
              <div
                key={index}
                className={`rounded-xl px-4 py-3 bg-white border border-gray-300 flex ${
                  isUser ? "justify-end" : "justify-start"
                }`}
                data-aos="zoom-in"
              >
                {isIntro ? (
                  <div className="flex items-start gap-3">
                    <Image
                      src={msg.avatar}
                      alt="AI"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p className=" text-sm">{msg.text}</p>
                  </div>
                ) : isUser ? (
                  <div className="flex items-center gap-3">
                    <p className=" text-sm bg-gray-100 rounded-xl px-3 py-2">
                      {msg.text}
                    </p>
                    <Image
                      src={msg.avatar}
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <p className=" text-sm">{msg.text}</p>
                )}
              </div>
            );
          })}

          {/* Typing Placeholder */}
          <div className="flex justify-end">
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm text-gray-600">
              ...
            </div>
          </div>
          <Image
            width={600}
            height={600}
            className="absolute -top-24 -right-0 -z-1 "
            src="/images/purple.png"
            alt="purple"
          />
        </div>
      </div>
    </section>
  );
}
