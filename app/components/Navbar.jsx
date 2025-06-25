"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./common/Button";
export default function Navbar() {
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? " underline underline-offset-10 decoration- duration-300 text-orange-500 scale-105 font-bold"
      : "";

  return (
    <header className="w-full absolute top-0 backdrop-blur-sm z-30">
      <div className="max-w-7xl mx-auto  px-6 py-4">
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              width={180}
              height={140}
              src="/images/logo.png"
              alt="logo"
              className="object-contain"
            />
          </Link>
          {/* Nav links */}
          <nav className="flex items-center gap-8">
            <a
              href="/#ourProduct"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "ourProduct"
              )}`}
            >
              Our Product
            </a>
            <a
              href="/#whyTrupulse"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "whyTrupulse"
              )}`}
            >
              Why Trupulse
            </a>

            <a
              href="/#testimonials"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/testimonials"
              )}`}
            >
              Testimonials
            </a>

            {/* <Link
              href="/pricing"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/pricing"
              )}`}
            >
              Pricing
            </Link> */}
            {/* <Link
              href="/blogs"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/blogs"
              )}`}
            >
              Blogs
            </Link> */}
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-10  py-2 border rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              href="/"
                className="text-center px-6 py-2.5 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient text-white font-medium rounded-full  hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] transition-all shadow-sm"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              width={180}
              height={140}
              src="/images/logo.png"
              alt="logo"
              className="object-contain xl:hidden"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-pink-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <a
              href="/#ourProduct"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Our Product
            </a>

            <a
              href="/#whyTrupulse"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Why Trupulse
            </a>

            <a
              href="/#testimonials"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Testimonials
            </a>

            {/* <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link> */}
            {/* <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Blogs
            </Link> */}

            <hr className="border-pink-200" />

            <div className="flex flex-col  gap-3 pt-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all"
              >
                Login
              </Link>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-center   hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradientpx-6 py-2.5 text-white font-medium rounded-full transition-all shadow-sm"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
