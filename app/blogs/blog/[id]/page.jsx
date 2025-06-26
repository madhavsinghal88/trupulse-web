import React from 'react'
import BlogHero from './components/BlogHero'
import BlogContent from './components/BlogContent'
import RelatedBlogs from './components/RelatedBlogs'
import CtaSection from '@/app/components/common/CtaSection'

const page = () => {
  return (
    <div>
        <BlogHero/>
        <BlogContent/>
        <RelatedBlogs/>
        <CtaSection/>
    </div>
  )
}

export default page