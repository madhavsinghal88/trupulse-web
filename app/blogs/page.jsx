import React from 'react'
import BlogHeroSection from './components/BlogHeroSection'
import BlogGrid from './components/BlogGrid'
import CtaSection from '../components/common/CtaSection'

const page = () => {
  return (
    <div>
        <BlogHeroSection/>
        <BlogGrid/>
        <CtaSection/>
    </div>
  )
}

export default page

// test