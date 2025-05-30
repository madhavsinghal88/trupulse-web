import React from "react";
import HeroSection from "./components/HeroSection";
import Group from "./components/Group";
import Goals from "./components/Goals";
import MeetAssistantSection from "./components/MeetAssistantSection";
import HowWeUseAi from "./components/HowWeUseAi";
import Report from "./components/Report";
import TestimonialsSection from "./components/TestimonialsSection";
import ThreeStepsSection from "./components/ThreeStepsSection";
import BlogShowcaseSection from "./components/BlogShowcaseSection";

const page = () => {
  return (
    <>
      <HeroSection/>
      <Group/>
      <Goals/>
      <MeetAssistantSection/>
      <HowWeUseAi/>
      <Report/>
      <TestimonialsSection/>
      <ThreeStepsSection/>
      <BlogShowcaseSection/>
    </>
  );
};

export default page;
