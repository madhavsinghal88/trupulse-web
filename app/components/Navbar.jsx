"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 md:px-6">
        {/* Logo */}
        <Link href="/">
        <Image
          width={200}
          height={150}
          src="/images/logo.png"
          alt="logo"
          className="object-contain"
        /></Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between gap-6 font-semibold text-sm ">
          {/* Nav links */}
          <nav className="flex items-center gap-6">
            <Link href="/usecases" className="hover:text-secondary-text transition">
              Usecases
            </Link>
            <Link href="/pricing" className="hover:text-secondary-text transition">
              Pricing
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-secondary-text transition">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Signup
            </button>
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden "
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 font-semibold text-sm  space-y-3">
          <Link href="/usecases" className="block hover:text-secondary-text transition">
            Usecases
          </Link>
          <Link href="/pricing" className="block hover:text-secondary-text transition">
            Pricing
          </Link>
          <div className="flex items-center gap-1 hover:text-secondary-text transition cursor-pointer">
            <span>Company</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <hr />
          <div className="flex flex-col gap-2 pt-2">
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Signup
            </button>
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
