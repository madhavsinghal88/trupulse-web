import "../../../../styles/article.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { postSlug, toArticle } from "@/lib/articles";
import PreviewClient from "./PreviewClient";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function PreviewPage({ params }) {
  const { slug } = await params;
  const snapshot = await getDocs(collection(db, "posts"));
  const doc = snapshot.docs.find((d) => postSlug(d.data()) === slug);
  if (!doc) return <PreviewClient post={null} />;

  const data = doc.data();
  // Plain values only: Firestore Timestamps cannot be passed to a client component.
  const plain = {
    ...data,
    created_at: data.created_at?.seconds ? data.created_at.seconds * 1000 : null,
    last_edit: data.last_edit?.seconds ? data.last_edit.seconds * 1000 : null,
  };
  return <PreviewClient post={{ id: doc.id, data: plain, article: toArticle({ id: doc.id, ...plain }, { withContent: true }) }} />;
}
