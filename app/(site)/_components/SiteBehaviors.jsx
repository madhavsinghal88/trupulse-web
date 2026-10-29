"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDemo } from "./DemoProvider";

function message(el) {
  const v = el.validity;
  if (v.valueMissing) return el.type === "email" ? "Please enter your email address." : el.type === "password" ? "Please enter your password." : "Please fill in this field.";
  if (v.typeMismatch && el.type === "email") return "Please enter a valid email address, like name@company.com.";
  return el.validationMessage || "Please check this field.";
}

function clearError(el) {
  el.classList.remove("tp-invalid");
  el.removeAttribute("aria-invalid");
  const id = el.getAttribute("data-tp-err");
  if (!id) return;
  document.getElementById(id)?.remove();
  el.removeAttribute("data-tp-err");
  const rest = (el.getAttribute("aria-describedby") || "").split(" ").filter((x) => x && x !== id).join(" ");
  if (rest) el.setAttribute("aria-describedby", rest);
  else el.removeAttribute("aria-describedby");
}

// Replace the browser's validation bubbles with inline messages under each field.
function useInlineValidation() {
  useEffect(() => {
    let first = null, timer = null;
    function onInvalid(event) {
      const el = event.target;
      event.preventDefault();
      clearError(el);
      const id = "tp-err-" + Math.random().toString(36).slice(2, 8);
      const note = document.createElement("span");
      note.className = "tp-err";
      note.id = id;
      note.setAttribute("role", "alert");
      note.textContent = message(el);
      const host = el.closest(".field,label") || el;
      if (host === el) el.insertAdjacentElement("afterend", note);
      else host.appendChild(note);
      el.classList.add("tp-invalid");
      el.setAttribute("aria-invalid", "true");
      el.setAttribute("data-tp-err", id);
      el.setAttribute("aria-describedby", ((el.getAttribute("aria-describedby") || "") + " " + id).trim());
      if (!first) {
        first = el;
        clearTimeout(timer);
        timer = setTimeout(() => { try { first.focus({ preventScroll: false }); } catch {} first = null; }, 0);
      }
    }
    function onInput(event) {
      const el = event.target;
      if (el.getAttribute?.("data-tp-err") && el.checkValidity()) clearError(el);
    }
    document.addEventListener("invalid", onInvalid, true);
    document.addEventListener("input", onInput, true);
    return () => {
      document.removeEventListener("invalid", onInvalid, true);
      document.removeEventListener("input", onInput, true);
      clearTimeout(timer);
    };
  }, []);
}

// Sections fade up as they scroll into view.
function useReveal(pathname) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}

// Where the reader was before this page; document.referrer does not change on
// client-side navigation.
let currentPath = null;
let lastPath = "";
export const previousPath = () => lastPath;

function usePathHistory(pathname) {
  useEffect(() => {
    if (currentPath === null) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) lastPath = ref.pathname;
      } catch {}
    } else if (currentPath !== pathname) {
      lastPath = currentPath;
    }
    currentPath = pathname;
  }, [pathname]);
}

export default function SiteBehaviors() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openDemo } = useDemo();

  useInlineValidation();
  useReveal(pathname);
  usePathHistory(pathname);

  // Existing campaign links use ?calendly=1 to open scheduling directly.
  useEffect(() => {
    const value = searchParams.get("calendly");
    if (value !== "true" && value !== "1") return;
    openDemo("form", { step: "calendly" });
    const params = new URLSearchParams(searchParams);
    params.delete("calendly");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [searchParams, pathname, router, openDemo]);

  return null;
}
