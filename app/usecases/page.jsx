import React from "react";
import UseCaseHeroSection from "./components/UseCaseHeroSection";
import Letstry from "./components/Letstry";
import HowWeUseAi from "../components/HowWeUseAi";
import Report from "../components/Report";
import TestimonialsSection from "../components/TestimonialsSection";
import ThreeStepsSection from "../components/ThreeStepsSection";
import BlogShowcaseSection from "../components/BlogShowcaseSection";
import CtaSection from "../components/common/CtaSection";

const page = () => {
  return (
    <div>
      <UseCaseHeroSection />
      <Letstry />
      <HowWeUseAi />
      <Report />
      <TestimonialsSection />
      <ThreeStepsSection />
      <BlogShowcaseSection />
            <CtaSection/>

    </div>
  );
};

export default page;
