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
import CtaSection from "./components/common/CtaSection";
import FaqAccordion from "./support/components/FaqAccordion";
import ManagementReadyReports from "./components/ManagementReadyReports";
import SurveySection from "./components/SurveySection";
import OneToOneSection from "./components/OneToOneSection";
import UnifiedResearchSection from "./components/UnifiedResearchSection";

const page = () => {
  return (
    <>
      <HeroSection/>
      <UnifiedResearchSection/>
      <OneToOneSection/>
      <Group/>
      {/* <Goals/> */}
      <SurveySection/>
      <MeetAssistantSection/>
            <Report/>
      <ManagementReadyReports/>
      <HowWeUseAi/>
      {/* <ThreeStepsSection/> */}
      {/* <BlogShowcaseSection/> */}
            <TestimonialsSection/>
      <FaqAccordion/>
      <CtaSection/>
    </>
  );
};

export default page;
