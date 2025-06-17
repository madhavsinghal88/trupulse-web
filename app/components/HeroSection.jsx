"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./common/Button";

const avatars = [
  {
    src: "/images/1.png",
    alt: "user 1",
    style:
      "top-16 cursor-pointer hover:scale-105 duration-300 left-6 hidden lg:block",
    popupText: "I set the strategy, and AI did all the work",
  },
  {
    src: "/images/2.png",
    alt: "user 2",
    style:
      "top-20 right-40 z-10  hidden lg:block  cursor-pointer hover:scale-105 duration-300",
    popupText: "Saved 10 hours on my weekly 1:1!",
  },
  {
    src: "/images/2.png",
    alt: "user 3",
    style:
      "top-1/2 left-40 z-10 hidden lg:block  cursor-pointer hover:scale-105 duration-300",
    popupText: "Survey creation took seconds, not weeks.",
  },
  {
    src: "/images/3.png",
    alt: "user 4",
    style:
      "bottom-10 left-4 md:left-[15%] z-10  hidden lg:block  cursor-pointer hover:scale-105 duration-300",
    popupText: "Got our Focus Group report on the same day…",
  },
  {
    src: "/images/4.png",
    alt: "user 5",
    style:
      "top-[45%] right-[15%] z-10  hidden lg:block  cursor-pointer hover:scale-105 duration-300",
    popupText: "It’s so easy, every department wants to use it now!",
  },
  {
    src: "/images/5.png",
    alt: "user 6",
    style:
      "bottom-0 right-[20%] z-10  hidden lg:block  cursor-pointer hover:scale-105 duration-300",
    popupText: "I get better feedback with less work!",
  },
];

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative max-w-7xl m-auto text-center px-4 py-16 md:py-24">
      {/* Floating avatars */}
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`absolute ${avatar.style}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={50}
            height={50}
            className="rounded-full shadow-md"
          />

          {hoveredIndex === index && (
            <div className="absolute -top-16 left-0  bg-green-100 text-sm text-black text-start px-4 py-2 rounded-md shadow-md z-20 w-60">
              <span>{avatar.popupText}</span>
              <Image
                src="/images/pacman.png"
                alt="pacman"
                width={20}
                height={20}
                className="absolute bottom-2 right-2 rounded-full shadow-md"
              />
            </div>
          )}
        </div>
      ))}

      {/* Content */}
      <div className="relative max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-medium mb-3">
          AI Powered Employee Engagement Sessions
        </p>

        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Revolutionize Employee Feedback
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-xl mb-6">
          Our AI agent creates, conducts, & analyzes 1:1 discussions, focus
          groups and surveys on any topic. TruPulse eliminates the work of
          understanding employees.
        </p>

        <div className="flex flex-col items-center gap-2">
          <Button text="Lets Start" icon={ArrowRight} />
          <Image
            width={200}
            height={100}
            className="mt-5"
            src="/images/7.png"
            alt="7 days trial"
          />
          <Image width={250} height={50} src="/images/line.png" alt="line" />
        </div>
      </div>
    </section>
  );
}
