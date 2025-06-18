import React from 'react'
import PricingHeroSection from './components/PricingHeroSection'
import PricingSection from './components/PricingSection'
import CtaSection from '../components/common/CtaSection'
import FaqAccordion from '../support/components/FaqAccordion'

const page = () => {
  return (
<>
<PricingHeroSection/>
<PricingSection/>
<FaqAccordion/>
<CtaSection/>
</>
)
}

export default page