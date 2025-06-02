import React from 'react'
import CompanyHeroSection from './components/companyHeroSection'
import Guided from './components/Guided'
import CtaSection from '../components/common/CtaSection'
import TeamSection from './components/TeamSection'

const page = () => {
  return (
    <div>
        <CompanyHeroSection/>
        <Guided/>
        <TeamSection/>
        <CtaSection/>
    </div>
  )
}

export default page