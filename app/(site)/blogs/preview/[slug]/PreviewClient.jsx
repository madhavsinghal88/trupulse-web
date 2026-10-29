"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { ArticleHeader } from "../../../_components/InnerHeader";
import SiteFooter from "../../../_components/SiteFooter";
import ArticleView from "../../../_components/blog/ArticleView";

const PUBLISHERS = ["hitesh@trupulse.ai", "dirk@trupulse.ai"];

// Inline styles: the article stylesheet is the only CSS on this page.
const bar = { position: "fixed", left: 16, bottom: 16, zIndex: 60, display: "flex", gap: 10 };
const button = (bg) => ({ padding: "12px 22px", border: 0, borderRadius: 10, background: bg, color: "#fff", font: "700 14px Inter, sans-serif", cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,.18)" });

export default function PreviewClient({ post }) {
  const [user, loading] = useAuthState(auth);
  const [published, setPublished] = useState(post?.data.isPublished === true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/blogs/login");
  }, [user, loading, router]);

  async function togglePublish() {
    try {
      // updateDoc rather than setDoc, to keep fields such as created_at.
      await updateDoc(doc(db, "posts", post.id), { isPublished: !published });
      if (!published) {
        await fetch("https://hooks.zapier.com/hooks/catch/14238222/3t7o2n2/", {
          method: "POST",
          body: JSON.stringify({ ...post.data, isPublished: true }),
        });
      }
      alert(`Blog ${!published ? "Published" : "Unpublished"} Successfully`);
      setPublished(!published);
      window.location.href = "/blogs/dashboard";
    } catch (err) {
      console.error(err);
      alert("Failed to update publish status");
    }
  }

  if (loading || !user) return <div className="tp-article article-page" />;

  if (!post) {
    return (
      <div className="tp-article article-page">
        <main className="shell" style={{ padding: "120px 0", textAlign: "center" }}>
          <h1>Blog not found</h1>
          <a className="btn primary" href="/blogs/dashboard">Back to Dashboard</a>
        </main>
      </div>
    );
  }

  return (
    <div className="tp-article article-page">
      <div style={bar}>
        <a href="/blogs/dashboard" style={button("#110f35")}>← Dashboard</a>
        {PUBLISHERS.includes(user.email) && (
          <button type="button" onClick={togglePublish} style={button(published ? "#c2410c" : "#078b7c")}>
            {published ? "Unpublish" : "Publish"}
          </button>
        )}
      </div>
      <ArticleView article={post.article} header={<ArticleHeader />} />
      <SiteFooter />
    </div>
  );
}
