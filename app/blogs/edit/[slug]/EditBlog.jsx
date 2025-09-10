"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "@/firebase";
import { doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loader from "@/app/components/common/Loader";
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

// Use the compatible editor!
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const fontSizeArr = [
  "21px",
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "42px",
  "54px",
  "68px",
  "84px",
  "98px",
];

export default function EditBlog({ posts }) {
  const pathname = usePathname();
  const currentId = pathname.split("/")[3];
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [altTag, setAltTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);
  const [createDate, setCreateDate] = useState("");
  const [tags, setTags] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [postLoading, setPostLoading] = useState(true);

  // Image cropping states
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(16 / 9);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/blogs/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    setMounted(true);
    // Load CSS on client side
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.quilljs.com/1.3.6/quill.snow.css";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const selectedPost = posts.find((p) => String(p.id) === currentId);
      if (selectedPost) {
        console.log("Found post:", selectedPost); // Debug log
        setPost(selectedPost);
        setTitle(selectedPost.data.title || "");
        setCoverImage(selectedPost.data.cover_image || "");
        setAltTag(selectedPost.data.altTag || "");
        setMetaTitle(selectedPost.data.metaTitle || "");
        setMetaDescription(selectedPost.data.metaDes || "");
        setCustomURL(selectedPost.data.customURL || "");
        setContent(selectedPost.data.content || "");
        setTags(
          selectedPost.data.tags ? selectedPost.data.tags.split(",") : []
        );
        setCreateDate(selectedPost.data.created_at || "");
        setPostLoading(false);
      } else {
        console.log("Post not found for ID:", currentId); // Debug log
        console.log(
          "Available posts:",
          posts.map((p) => ({ id: p.id, title: p.data.title }))
        ); // Debug log
        setPostLoading(false);
      }
    }
  }, [posts, currentId]);

  useEffect(() => {
    if (!posts) {
      console.log("Posts missing!");
      return;
    }
    if (posts.length === 0) {
      console.log("Posts empty!");
      return;
    }
    const selectedPost = posts.find((p) => String(p.data.id) === currentId);
    if (!selectedPost) {
      console.log("Could not find post with id", currentId);
      return;
    }
    // Then set prefill fields
  }, [posts, currentId]);

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

  const handleUpload = () => {
    if (!file) return alert("Please crop and process the image first!");
    const storageRef = ref(storage, `/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(prog);
      },
      (err) => console.error(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setCoverImage(url);
          alert('Image uploaded successfully!');
        });
      }
    );
  };

  const handleSubmit = async () => {
    if (!title || !coverImage || !content) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      await updateDoc(doc(db, "posts", post.id), {
        title,
        cover_image: coverImage,
        altTag,
        metaTitle,
        metaDes: metaDescription,
        customURL: customURL.includes("-")
          ? customURL
          : customURL
              .toLowerCase()
              .replace(/[^a-zA-Z ]/g, "")
              .split(" ")
              .join("-"),
        content,
        tags: tags.join(","),
        last_edit: serverTimestamp(),
        isPublished: post.data.isPublished,
      });
      alert("Blog updated successfully.");
      router.push("/blogs/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to update blog.");
    }
  };

  const modules = useMemo(
    () => ({
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
    }),
    []
  );

  if (!mounted) {
    return (
      <div className="mx-auto mt-20 max-w-3xl px-4 py-5 xl:max-w-5xl">
        <div className="flex items-center gap-5 mb-6">
          <button
            onClick={() => router.push("/blogs/dashboard")}
            className="py-2 rounded hover:scale-125 duration-300 cursor-pointer"
          >
            ←
          </button>
          <h2 className="text-lg font-bold">Edit Blog</h2>
        </div>
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
          Loading...
        </div>
      </div>
    );
  }

  if (postLoading) {
    return <Loader text="Loading blog for editing..." full />;
  }

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 py-5 xl:max-w-5xl">
      <div className="flex items-center gap-5 mb-6">
        <button
          onClick={() => router.push("/blogs/dashboard")}
          className="py-2 rounded hover:scale-125 duration-300 cursor-pointer"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">Edit Blog</h2>
      </div>
      <div className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full border rounded p-2"
        />

        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Image * (16:9 aspect ratio, max 400KB)
          </label>
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

        <input
          value={altTag}
          onChange={(e) => setAltTag(e.target.value)}
          placeholder="Image Alt Tag"
          className="w-full border rounded p-2"
        />

        <input
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          placeholder="Meta Title"
          className="w-full border rounded p-2"
        />

        <input
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Meta Description"
          className="w-full border rounded p-2"
        />

        <input
          value={customURL}
          onChange={(e) => setCustomURL(e.target.value)}
          placeholder="Custom URL"
          className="w-full border rounded p-2"
        />

        <label className="block font-medium">Blog Content</label>
        <div className="bg-white border border-gray-300 rounded-md">
          <ReactQuill
            theme="snow"
            placeholder="Write your blog content here..."
            modules={modules}
            value={content}
            onChange={setContent}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
}
