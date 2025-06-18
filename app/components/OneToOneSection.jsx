"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "./common/Button";

const messages = [
  {
    sender: "ai",
    avatar: "/images/2.png",
    text: "An AI Agent will conduct defined discussions based on your specific requirements.",
  },
  {
    sender: "ai",
    text: "Hi Rahul, do you have a few minutes to discuss your health insurance coverage?",
  },
  {
    sender: "user",
    avatar: "/images/1.png",
    text: "Sure,. Is everything okay?",
  },
  {
    sender: "ai",
    text: "Yes, all good! We’re reviewing employee health insurance benefits this month",
  },
];

export default function OneToOneSection() {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="text-xl font-semibold border-b-2 w-fit border-black mb-2 ">
            1:1 Conversations
          </h3>
          <h2 className="text-3xl max-w-lg md:text-5xl font-semibold  mb-2 leading-14">
            Smarter 1:1 Conversations, Powered by AI Agent
          </h2>

          <div className="space-y-6 mb-4 text-base ">
            {[
              "AI-led Conversations: Automate meaningful one-on-one chats that feel personal and engaging.",
              "Deep Follow-ups: Uncover hidden insights with intelligent, context-aware follow-up questions.",
              "Actionable Summaries: Instantly generate summaries for individuals and groups to accelerate decision-making.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className=" mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <Button text="Book a demo"/>
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
          <Image width={600} height={600} className="absolute -top-24 -right-0 -z-1 " src="/images/purple.png" alt="purple" />
        </div>
      </div>
    </section>
  );
}
