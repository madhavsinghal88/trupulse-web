// import React from 'react'
// import PricingHeroSection from './components/PricingHeroSection'
// import PricingSection from './components/PricingSection'
// import CtaSection from '../components/common/CtaSection'
// import FaqAccordion from '../support/components/FaqAccordion'

// const page = () => {
//   return (
// <>
// <PricingHeroSection/>
// <PricingSection/>
// <FaqAccordion/>
// <CtaSection/>
// </>
// )
// }

// export default page


// app/pricing/page.jsx
import Script from "next/script";
import PricingHeroSection from "./components/PricingHeroSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "../components/common/CtaSection";
import FaqAccordion from "../support/components/FaqAccordion";

export default function Page() {
  return (
    <>
      {/* Tawk.to only on Pricing */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68ba8a2e3c8ad919211982bf/1j4cani0j';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      
      <PricingHeroSection />
      <PricingSection />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
