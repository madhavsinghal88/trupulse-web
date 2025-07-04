"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Zoom } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Danielle Strazzo",
    position: "VP of HR, BD",
    content: "TruPulse empowers HR and Business Leaders to turn employee insights into strategic changes that uplift culture and drive organizational performance  - with notable speed.",
    profilePic: "/images/danielle.png",
  },
  {
    name: "Richard E. Beyer",
    position: "Fmr Secretary of Labor, State of Kansas",
    content:
      "The AI agent in TruPulse transforms employee voice into a catalyst for collective operational improvements—setting the stage for enhancing culture, accelerating team success, and transforming organizational performance.",
    profilePic: "/images/richard.png",
  },
  {
    name: "Dan Mcculloch",
    position: "VP, GM of Full Circle, EA",
    content:
      "Employee surveys are amazing but usually very high level. With TruPulse I can see insights on employee morale at any altitude. I used to look forward to having survey results quarterly, now I can see those same results whenever I need them.",
    profilePic: "/images/dan.png",
  },
  {
    name: "Nathan Mondragon, Ph.D.",
    position: "Chief IO Psychologist, HireVue",
    content:
      "TruPulse simplifies the HR tech stack by replacing three separate tools and consultants with an AI engine that runs your bespoke survey, feedback, and strategic planning discussions.",
    profilePic: "/images/nathan.png",
  },
  {
    name: "Mani Sundaram",
    position: "EVP & GM, Akamai Technologies",
    content:
      "The idea of being able to call up a report on what employee morale is like at any time I want to is a powerful feature of TruPulse. Demographic breakdowns make the insights even more useful.",
    profilePic: "/images/mani.png",
  },
];

export default function TestimonialsSection() {
  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleCount + 1 > testimonials.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <section className="bg-white py-20 px-4 ">
      <div className="max-w-6xl w-[90vw] mx-auto text-center">
        <h2 id="testimonials" className="text-3xl md:text-5xl font-bold mb-4">
          What HR Leaders Say
        </h2>
        <p className="text-secondary-text text-base md:text-lg max-w-2xl mx-auto mb-12">
          HR leaders rave about saving time, boosting engagement, and gaining
          actionable insights using TruPulse’s AI-powered feedback sessions.
        </p>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl mx-auto">
          {testimonials.slice(0, visibleCount).map((t, index) => (
            <Zoom
              key={index}
              className={`flex flex-col gap-6 items-start px-4 m-auto max-w-lg ${
                index % 2 === 0
                  ? "md:border-r md:border-gray-300 md:pr-20"
                  : "md:pr-20"
              }`}
              duration={600}
              triggerOnce
              delay={100}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={t.profilePic}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm sm:text-base mb-2">“{t.content}”</p>
                  <p className="font-semibold text-sm sm:text-base text-black">
                    — {t.name}, {t.position},
                  </p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        {/* Mobile View with Swiper */}
        <div className="md:hidden">
          <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={16}
            modules={[Autoplay]}
            className="max-w-sm mx-auto"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <Image
                      src={t.profilePic}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm mb-2">“{t.content}”</p>
                      <p className="font-semibold text-sm text-black">
                        — {t.name}, {t.position},
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Toggle Button */}
        <div className="mt-10 hidden md:block">
          <button
            onClick={handleToggle}
            className="cursor-pointer underline font-medium hover:opacity-80 transition md:mr-14"
          >
            {visibleCount + 1 > testimonials.length ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
