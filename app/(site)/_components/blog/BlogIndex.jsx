"use client";

import { useState } from "react";
import BlogTile from "./BlogTile";

export default function BlogIndex({ articles, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const q = query.trim().toLowerCase();
  const visible = articles.map((a) => {
    const okCat = category === "All" || a.category === category;
    const haystack = [a.title, ...a.tags].join(" ").toLowerCase();
    const okText = !q || haystack.includes(q) || a.category.toLowerCase().includes(q);
    return okCat && okText;
  });
  const shown = visible.filter(Boolean).length;

  return (
    <>
      <section className="idx-controls" aria-label="Filter articles">
        <div className="idx-search">
          <label className="sr-only" htmlFor="blog-search">Search articles</label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search articles…"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="idx-pills" role="group" aria-label="Topics">
          {["All", ...categories].map((c) => (
            <button key={c} className={`idx-pill${c === category ? " active" : ""}`} type="button" onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <p className="idx-count" aria-live="polite">
          {shown}{shown === 1 ? " article" : " articles"}{category === "All" ? "" : " in " + category}
        </p>
      </section>
      <section className="idx-grid" data-blog-grid="">
        {articles.map((a, i) => <BlogTile key={a.id} article={a} hidden={!visible[i]} />)}
      </section>
      <p className="idx-empty" hidden={shown > 0}>No articles match that search. Try another word, or choose All.</p>
    </>
  );
}
