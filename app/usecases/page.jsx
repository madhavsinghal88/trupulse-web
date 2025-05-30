import React from "react";
import UseCaseHeroSection from "./components/UseCaseHeroSection";
import SurveySolutionsSection from "./components/SurveySolutionsSection";
import Letstry from "./components/Letstry";
import HowWeUseAi from "../components/HowWeUseAi";
import Report from "../components/Report";
import TestimonialsSection from "../components/TestimonialsSection";
import ThreeStepsSection from "../components/ThreeStepsSection";
import BlogShowcaseSection from "../components/BlogShowcaseSection";

const page = () => {
  return (
    <>
      <UseCaseHeroSection />
      <SurveySolutionsSection />
      <Letstry />
      <HowWeUseAi />
      <Report />
      <TestimonialsSection />
      <ThreeStepsSection />
      <BlogShowcaseSection />
    </>
  );
};

export default page;
