'use client'

import React, { useEffect, useState, useRef } from 'react'
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
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

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

  // Image cropping states
  const [imgSrc, setImgSrc] = useState('')
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(16 / 9)
  const imgRef = useRef(null)
  const previewCanvasRef = useRef(null)

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

  // Image cropping utility functions
  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 90,
          },
          aspect,
          width,
          height
        ),
        width,
        height
      ))
    }
  }

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const pixelRatio = window.devicePixelRatio

    canvas.width = crop.width * pixelRatio * scaleX
    canvas.height = crop.height * pixelRatio * scaleY

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = 'high'

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    )

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error('Canvas is empty')
            return
          }
          blob.name = fileName
          resolve(blob)
        },
        'image/jpeg',
        1
      )
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (400KB = 400 * 1024 bytes)
      const maxSize = 400 * 1024 // 400KB in bytes
      if (file.size > maxSize) {
        alert('Image size must be less than 400KB. Please choose a smaller image.')
        e.target.value = '' // Clear the input
        return
      }

      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgSrc(reader.result?.toString() || '')
      })
      reader.readAsDataURL(file)
    }
  }

  const handleCropComplete = async () => {
    if (!completedCrop || !imgRef.current) return

    try {
      const croppedImageBlob = await getCroppedImg(
        imgRef.current,
        completedCrop,
        'cropped-image.jpg'
      )
      
      setFile(croppedImageBlob)
      setCoverImage(URL.createObjectURL(croppedImageBlob))
    } catch (error) {
      console.error('Error cropping image:', error)
      alert('Error cropping image. Please try again.')
    }
  }

  const handleUpload = async () => {
    if (!file) return alert('Please crop and process the image first!')

    const storageRef = ref(storage, `/${Date.now()}-${file.name}`)
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
        alert('Image uploaded successfully!')
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

        {/* Image Upload and Crop */}
        <div>
          <label className="block text-sm font-medium mb-1">Cover Image * (16:9 aspect ratio, max 400KB)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 border border-gray-300 p-2 rounded-lg mb-4"
          />
          
          {imgSrc && (
            <div className="space-y-4">
              <div className="max-w-2xl">
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspect}
                  minWidth={160}
                  minHeight={90}
                >
                  <img
                    ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    style={{ maxHeight: '400px', maxWidth: '100%' }}
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              </div>
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCropComplete}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Crop Image
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setImgSrc('')
                    setCrop(undefined)
                    setCompletedCrop(undefined)
                    setFile(null)
                    setCoverImage('')
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
          
          {coverImage && (
            <div className="mt-4">
              <p className="text-sm text-green-600 mb-2">✓ Image cropped successfully!</p>
              <div className="max-w-md">
                <img
                  src={coverImage}
                  alt="Cropped preview"
                  className="w-full h-auto rounded-lg border"
                />
              </div>
              <button
                type="button"
                onClick={handleUpload}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                disabled={percent > 0}
              >
                {percent > 0 ? `Uploading... ${percent}%` : 'Upload to Storage'}
              </button>
            </div>
          )}
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
