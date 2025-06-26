import React from 'react'
import CtaSection from '../components/common/CtaSection'
import BlogShowcaseSection from '../components/BlogShowcaseSection'
import SupportHero from './components/SupportHero'
import FaqAccordion from './components/FaqAccordion'
import SupportContact from './components/SupportContact'
import OfficeLocations from './components/OfficeLocations'

const page = () => {
  return (
    <div>
        <SupportHero/>
        <FaqAccordion/>
        <SupportContact/>
        <OfficeLocations/>
        <BlogShowcaseSection/>
        <CtaSection/>
    </div>
  )
}

export default page