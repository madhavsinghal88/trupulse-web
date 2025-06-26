"use client";

import { useState } from "react";
export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function using IDs
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // Close mobile menu if open
    setMenuOpen(false);
  };

  return (
    <footer className="  py-4 px-6 md:px-20 text-sm ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* About Company */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-base mb-4">About Scanta </h3>
          <p className="mb-4">
            Scanta develops AI agents and automation solutions that transform
            employee feedback. We empower HR leaders and managers to
            effortlessly generate, conduct, and analyze 1:1 discussions, focus
            groups, and surveys. With enterprise-grade security and privacy
            controls, we deliver real-time insights to foster data-driven
            cultures.{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => scrollToSection("ourProduct")}
              >
                Our product
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => scrollToSection("whyTrupulse")}
              >
                Why Trupulse
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        {/* Key Usecases */}
        <div>
          <h3 className="font-bold text-base mb-4">Contact Us</h3>
          <p>General Questions</p>
          <p className="mb-3">hello@trupulse.ai</p>
          <p>Technical Support </p>
          <p className="mb-3">support@trupulse.ai</p>
          <p>Sales </p>
          <p className="mb-3">sales@trupulse.ai</p>
        </div>

        {/* Contacts + Social */}
        <div>
          <h3 className="font-bold text-base mb-3">Follow us on</h3>
          <ul className="">
            <li>
              <a
                href="https://www.linkedin.com/company/trupulse/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-3 flex justify-between border-t pt-2 text-center text-xs">
        <p>Copyright © 2025 Scanta Inc. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a className="hover:underline">Terms of Use</a>
          <span>|</span>
          <a className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
