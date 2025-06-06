"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) =>
    pathname === path
      ? " underline underline-offset-10 decoration- duration-300 text-primary-text scale-105 font-bold"
      : "";

  return (
    <header className="w-full  ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 md:px-6">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between gap-6 font-semibold text-sm ">
          {/* Nav links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/usecases"
              className={`hover:text-secondary-text transition ${isActive(
                "/usecases"
              )}`}
            >
              Usecases
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-secondary-text transition ${isActive(
                "/pricing"
              )}`}
            >
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex cursor-pointer items-center gap-1 hover:text-secondary-text transition focus:outline-none ${isActive(
                  "/company"
                )}`}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-2">
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/company">
                    <h4 className="font-semibold text-primary-text">
                      About Company
                    </h4>
                    <p className="text-secondary-text text-sm">
                      Driven by innovation and excellence, we provide
                      cutting-edge solutions
                    </p>
                  </Link>
                </div>
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/blogs">
                    <h4 className="font-semibold text-primary-text">
                      Our Blogs
                    </h4>
                    <p className="text-secondary-text text-sm">
                      Insights, trends, and tips to keep you ahead—explore our
                      latest blogs.
                    </p>
                  </Link>
                </div>
                <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  <Link href="/support">
                    <h4 className="font-semibold text-primary-text">Support</h4>
                    <p className="text-secondary-text text-sm">
                      Real stories, real results—hear how we've helped our
                      clients succeed.
                    </p>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#"
              className={`hover:text-secondary-text transition ${isActive(
                "/tryIt"
              )}`}
            >
              Try It
            </Link>
            <Link
              href="#"
              className={`hover:text-secondary-text transition ${isActive(
                "/contactUs"
              )}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            {/* <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Signup
            </button> */}
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden ">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 font-semibold text-sm space-y-3">
          <Link
            href="/usecases"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-secondary-text transition"
          >
            Usecases
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-secondary-text transition"
          >
            Pricing
          </Link>

          {/* Company Dropdown Toggle */}
          <div>
            <button
              onClick={() => setShowCompanyDropdown((prev) => !prev)}
              className="flex items-center gap-1 hover:text-secondary-text transition cursor-pointer"
            >
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown Items */}
            {showCompanyDropdown && (
              <div className="pl-4 pt-2 space-y-2">
                <p className="hover:text-secondary-text cursor-pointer">
                  <Link href="/company" onClick={() => setMenuOpen(false)}>
                    About Company
                  </Link>
                </p>
                <p className="hover:text-secondary-text cursor-pointer">
                  <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                    Our Blogs
                  </Link>
                </p>
                <p className="hover:text-secondary-text cursor-pointer">
                  <Link href="/support" onClick={() => setMenuOpen(false)}>
                    {" "}
                    Support
                  </Link>
                </p>
              </div>
            )}
          </div>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-secondary-text transition"
          >
            Try It
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-secondary-text transition"
          >
            Contact Us
          </Link>

          <hr />

          <div className="flex flex-col gap-2 pt-2">
            <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
