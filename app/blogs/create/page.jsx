'use client'

import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '@/firebase'

// Dynamic import with no SSR to avoid React Quill issues
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">Loading editor...</div>,
})

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block', 'link'],
    ['image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['clean'],
  ],
}

export default function CreateBlogPage() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [altTag, setAltTag] = useState('')
  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [customURL, setCustomURL] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)
  const [percent, setPercent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!loading && !user) router.push('/blogs/login')
  }, [loading, user])

  useEffect(() => {
    setMounted(true)
    // Load CSS on client side
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
    document.head.appendChild(link)
  }, [])

  const handleChange = (e) => setFile(e.target.files[0])

  const handleUpload = async () => {
    if (!file) return alert('Please upload an image first!')

    const storageRef = ref(storage, `/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setPercent(progress)
      },
      (error) => console.error(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
        setCoverImage(downloadURL)
      }
    )
  }

  const handleSubmit = async () => {
    if (!title || !coverImage || !content) {
      alert('Please fill all required fields')
      return
    }

    try {
      await addDoc(collection(db, 'posts'), {
        title,
        cover_image: coverImage,
        content,
        altTag,
        metaTitle,
        metaDes: metaDescription,
        customURL: customURL.includes('-')
          ? customURL
          : customURL.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-'),
        created_at: serverTimestamp(),
        last_edit: serverTimestamp(),
        isPublished: false,
      })

      alert('Blog created successfully!')
      router.push('/blogs/dashboard')
    } catch (err) {
      console.error(err)
      alert('Something went wrong while creating the blog.')
    }
  }
  console.log("content:",content)

  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
 <div className="flex items-center gap-5 mb-6">
     <button 
          onClick={() => router.push('/blogs/dashboard')}
          className="py-2 rounded hover:scale-125 duration-300 cursor-pointer"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">Create New Blog</h2>
        
      </div>
      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter blog title"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block  text-sm font-medium mb-1">Cover Image *</label>
          <input
            type="file"
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 cursor-pointer  bg-gray-50 border border-gray-300 p-2 rounded-lg"
          />
          {percent > 0 && <p className="text-sm mt-1">{percent}%</p>}
          <button
            type="button"
            onClick={handleUpload}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Upload Image
          </button>
        </div>

        {/* Alt tag */}
        <div>
          <label className="block text-sm font-medium mb-1">Alt Tag</label>
          <input
            type="text"
            value={altTag}
            onChange={(e) => setAltTag(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Image alt text"
          />
        </div>

        {/* Meta title */}
        <div>
          <label className="block text-sm font-medium mb-1">Meta Title</label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Meta title for SEO"
          />
        </div>

        {/* Meta description */}
        <div>
          <label className="block text-sm font-medium mb-1">Meta Description</label>
          <input
            type="text"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Meta description for SEO"
          />
        </div>

        {/* Custom URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Custom URL</label>
          <input
            type="text"
            value={customURL}
            onChange={(e) => setCustomURL(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Custom slug for the URL"
          />
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium mb-1">Content *</label>
          <div className="bg-white border border-gray-300 rounded-md">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Write your blog here..."
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-2 cursor-pointer  bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Create Blog
        </button>
      </div>
    </div>
  )
}
