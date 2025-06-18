// import Image from "next/image";
// import React from "react";

// const Group = () => {
//   return (
//     <>
//       <section className="bg-purple-50 mt-52 lg:mt-40 relative h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-screen ">
//         <div className="absolute -top-28  w-full px-4 md:px-10 ">
//                     <div className="absolute -top-2 sm:-top-4 inset-x-6 max-w-5xl m-auto lg:max-w-6xl rounded-2xl h-full border z-[-1]"></div>

//         <div className="p-4 relative border max-w-7xl bg-white m-auto rounded-2xl">
//           <Image
//             width={2000}
//             height={2000}
//             className="md:p-4"
//             src="/images/video.png"
//             alt="video"
//           />
//           <Image
//             width={100}
//             height={1-0}
//             className="size-12 sm:size-16 lg:size-24 absolute top-[40%] right-[45%] z-10"
//             src="/images/play.png"
//             alt="video"
//           />
    
//         </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Group;


"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "./common/Button";

const discussion = {
  topic: {
    title: "Anniversary Trip Ideas 2025",
    desc: "Plan a memorable company trip to celebrate our [Xth] Anniversary",
    avatars: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
    ],
  },
  messages: [
    {
      type: "ai",
      avatar: "/images/2.png",
      text: `Hey everyone! 🎉 As you know, our company anniversary is coming up next month. Leadership has approved a 2-day team trip! Let's start planning together — destination, type of trip, and activities.🔥`,
    },
    {
      type: "user",
      avatar: "/images/5.png",
      text: `That’s awesome! Can we go somewhere cooler? Like Manali or Ooty? I think a hill station would be perfect for August.`,
    },
    {
      type: "placeholder",
      avatar: "/images/1.png",
    },
  ],
};

export default function Group() {
  return (
    <section className="py-20 px-4 bg-[#EEF0FF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold border-b-2 w-fit border-black mb-2 ">
            Group Discussion
          </h3>
          <h2 className="text-3xl md:text-5xl font-semibold  mb-2 leading-14">
            AI-Powered Focus <br />
            Groups That Uncover <br />
            What Matters Most
          </h2>

          <div className="space-y-6 text-base mb-4 ">
            {[
              "Dynamic Group Moderation: Let AI guide rich, inclusive conversations across your audience.",
              "Diverse Perspectives: Capture insights from multiple voices simultaneously.",
              "Thematic Reports: Instantly surface key themes, sentiment, and takeaways in a single, clear report.",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className=" mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <Button text="Book a demo"/>
        </div>

        {/* Right Discussion Preview */}
        <div className="space-y-4 max-w-md m-auto">
          {/* Topic Card */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-center -gap-2 mb-2">
              {discussion.topic.avatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full border border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
            <h4 className="font-semibold text-center  mb-1">
              {discussion.topic.title}
            </h4>
            <p className="text-sm text-secondary-text text-center">
              {discussion.topic.desc}
            </p>
          </div>

          {/* Messages */}
          {discussion.messages.map((msg, index) => {
            if (msg.type === "placeholder") {
              return (
                <div
                  key={index}
                  className="bg-green-50 px-4 py-3 rounded-xl flex items-center gap-4"
                >
                  <Image
                    src={msg.avatar}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-green-100 rounded-md w-3/4"></div>
                    <div className="h-3 bg-green-100 rounded-md w-2/4"></div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`flex items-start gap-4 px-4 py-3 rounded-xl ${
                  msg.type === "ai"
                    ? "border border-orange-400"
                    : "border border-gray-300"
                } bg-white`}
              >
                <Image
                  src={msg.avatar}
                  alt="msg"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm ">{msg.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
