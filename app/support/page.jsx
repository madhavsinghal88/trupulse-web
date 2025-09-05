import React from 'react'
import CtaSection from '../components/common/CtaSection'
import RelatedBlogs from '../blogs/blog/[id]/components/RelatedBlogs'
import SupportHero from './components/SupportHero'
import FaqAccordion from './components/FaqAccordion'
import SupportContact from './components/SupportContact'
import { getAllBlogs } from '@/lib/getBlogs'

const page = async () => {
  const posts = await getAllBlogs()
  
  // Serialize Firebase Timestamps to plain objects for Client Components
  const serializedPosts = posts.map(post => ({
    ...post,
    created_at: post.created_at ? {
      seconds: post.created_at.seconds,
      nanoseconds: post.created_at.nanoseconds
    } : null,
    last_edit: post.last_edit ? {
      seconds: post.last_edit.seconds,
      nanoseconds: post.last_edit.nanoseconds
    } : null
  }))
  
  return (
    <div>
        <SupportHero/>
        <FaqAccordion/>
        <SupportContact/>
        <RelatedBlogs posts={serializedPosts}/>
        <CtaSection/>
    </div>
  )
}

export default page