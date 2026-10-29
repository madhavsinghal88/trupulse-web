// Adds the 30 articles from the v100 site design to the Firestore `posts` collection,
// in the same shape the blog CMS writes, so they can be edited from the dashboard.
//
//   node scripts/seed-articles.mjs                 dry run: lists what would be added
//   SEED_EMAIL=... SEED_PASSWORD=... node scripts/seed-articles.mjs --write
//
// SEED_EMAIL / SEED_PASSWORD are a blog CMS login (the account used at /blogs/login).
// Articles whose URL already exists are skipped, so the script is safe to re-run.
// Cover images are served from public/blogs/images/<slug>.webp.

import { readFileSync } from "node:fs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDI3RSgog1zp-ecjUBrURJJFGcsY1nCSzI",
  authDomain: "scanta-blog-a8c57.firebaseapp.com",
  projectId: "scanta-blog-a8c57",
  storageBucket: "scanta-blog-a8c57.appspot.com",
  messagingSenderId: "1091655201282",
  appId: "1:1091655201282:web:2857ba57759c44a3aead1b",
});
const db = getFirestore(app);

const write = process.argv.includes("--write");
const articles = JSON.parse(readFileSync(new URL("./data/articles-v100.json", import.meta.url), "utf8"));

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function toHtml(blocks) {
  return blocks.map((b) => {
    if (b.k === "h2") return `<h2 id="${b.id}">${esc(b.t)}</h2>`;
    if (b.k === "h3") return `<h3>${esc(b.t)}</h3>`;
    if (b.k === "ul" || b.k === "ol") return `<${b.k}>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</${b.k}>`;
    return `<p>${esc(b.t)}</p>`;
  }).join("");
}

if (write) {
  const { SEED_EMAIL, SEED_PASSWORD } = process.env;
  if (!SEED_EMAIL || !SEED_PASSWORD) {
    console.error("Set SEED_EMAIL and SEED_PASSWORD to a blog CMS login to write.");
    process.exit(1);
  }
  await signInWithEmailAndPassword(getAuth(app), SEED_EMAIL, SEED_PASSWORD);
}

const existing = new Set((await getDocs(collection(db, "posts"))).docs.map((d) => d.data().customURL));

// The articles page lists newest first; space the dates a minute apart, first article
// newest, so the design's order is kept.
const now = Date.now();
let added = 0;
for (const [i, a] of articles.entries()) {
  if (existing.has(a.slug)) {
    console.log("skip (exists) ", a.slug);
    continue;
  }
  const created = Timestamp.fromMillis(now - i * 60_000);
  const post = {
    title: a.title,
    cover_image: `/blogs/images/${a.slug}.webp`,
    content: toHtml(a.blocks),
    altTag: a.title,
    metaTitle: a.metaTitle,
    metaDes: a.metaDescription,
    customURL: a.slug,
    category: a.category,
    excerpt: a.excerpt,
    readTime: a.readTime,
    tags: a.tags.join(","),
    related: a.related,
    titleInBanner: true,
    created_at: created,
    last_edit: created,
    isPublished: true,
  };
  if (write) await addDoc(collection(db, "posts"), post);
  console.log(write ? "added         " : "would add     ", a.slug);
  added++;
}
console.log(`\n${added} article(s) ${write ? "added" : "to add (dry run; pass --write to add them)"}.`);
process.exit(0);
