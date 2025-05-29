import React from "react";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import HeroSection from "./components/HeroSection";
import Group from "./components/Group";
import Goals from "./components/Goals";
import MeetAssistantSection from "./components/MeetAssistantSection";
import HowWeUseAi from "./components/HowWeUseAi";
import Report from "./components/Report";
import TestimonialsSection from "./components/TestimonialsSection";
import ThreeStepsSection from "./components/ThreeStepsSection";
import BlogShowcaseSection from "./components/BlogShowcaseSection";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <HeroSection/>
      <Group/>
      <Goals/>
      <MeetAssistantSection/>
      <HowWeUseAi/>
      <Report/>
      <TestimonialsSection/>
      <ThreeStepsSection/>
      <BlogShowcaseSection/>
      <Footer/>
    </>
  );
};

export default page;
