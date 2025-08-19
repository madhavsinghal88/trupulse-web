"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "@/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loader from "@/app/components/common/Loader";

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
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (!file) return alert("Please select a file.");
    const storageRef = ref(storage, `/${file.name}`);
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
      await setDoc(doc(db, "posts", post.id), {
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
        created_at: createDate,
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
        [{ size: fontSizeArr }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block", "link"],
        ["image"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
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
            Cover Image *
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 border border-gray-300 p-2 rounded-lg"
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
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
}
