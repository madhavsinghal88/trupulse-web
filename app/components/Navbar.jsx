// "use client";

// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Button from "./common/Button";

// export default function Navbar() {
//   const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path) =>
//     pathname === path
//       ? " underline underline-offset-10 decoration- duration-300 text-theme scale-105 font-bold"
//       : "";

//   return (
//     <header className="w-full absolute top-0 backdrop-blur-sm z-30">
//       <div className="max-w-7xl mx-auto  px-6 py-4">
//         {/* Desktop Nav */}
//         <div className="hidden xl:flex items-center justify-between gap-8">
//           {/* Logo */}
//           <Link href="/">
//             <Image
//               width={180}
//               height={140}
//               src="/images/logo.png"
//               alt="logo"
//               className="object-contain"
//             />
//           </Link>
//           {/* Nav links */}
//           <nav className="flex items-center gap-8">
//             <a
//               href="/#ourProduct"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "ourProduct"
//               )}`}
//             >
//               Our Product
//             </a>
//             <a
//               href="/#whyTrupulse"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "whyTrupulse"
//               )}`}
//             >
//               Why Trupulse
//             </a>

//             <a
//               href="/#testimonials"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/testimonials"
//               )}`}
//             >
//               Testimonials
//             </a>

//             {/* <Link
//               href="/pricing"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/pricing"
//               )}`}
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/blogs"
//               )}`}
//             >
//               Blogs
//             </Link> */}
//           </nav>

//           {/* Auth buttons */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/"
//               className="px-10  py-2 border rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
//             >
//               Login
//             </Link>
//             <Link
//               href="/"
//                 className="text-center px-6 py-2.5 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient text-white font-medium rounded-full  hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] transition-all shadow-sm"
//             >
//               Book a demo
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <Image
//               width={180}
//               height={140}
//               src="/images/logo.png"
//               alt="logo"
//               className="object-contain xl:hidden"
//             />
//           </Link>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="xl:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="xl:hidden bg-white border-t border-pink-100 shadow-lg">
//           <div className="px-6 py-4 space-y-4">
//             <a
//               href="/#ourProduct"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Our Product
//             </a>

//             <a
//               href="/#whyTrupulse"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Why Trupulse
//             </a>

//             <a
//               href="/#testimonials"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Testimonials
//             </a>

//             {/* <Link
//               href="/pricing"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Blogs
//             </Link> */}

//             <hr className="border-pink-200" />

//             <div className="flex flex-col  gap-3 pt-2">
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-center   hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradientpx-6 py-2.5 text-white font-medium rounded-full transition-all shadow-sm"
//               >
//                 Book a demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path) =>
//     pathname === path
//       ? " underline underline-offset-10 decoration- duration-300 text-theme scale-105 font-bold"
//       : "";

//   // Smooth scroll function
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       });
//     }
//     // Close mobile menu if open
//     setMenuOpen(false);
//   };

//   return (
//     <header className="w-full absolute top-0 backdrop-blur-sm z-30">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         {/* Desktop Nav */}
//         <div className="hidden xl:flex items-center justify-between gap-8">
//           {/* Logo */}
//           <Link href="/">
//             <Image
//               width={180}
//               height={140}
//               src="/images/logo.png"
//               alt="logo"
//               className="object-contain"
//             />
//           </Link>
//           {/* Nav links */}
//           <nav className="flex items-center gap-8">
//             <button
//               onClick={() => scrollToSection('ourProduct')}
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "ourProduct"
//               )}`}
//             >
//               Our Product
//             </button>
//             <button
//               onClick={() => scrollToSection('whyTrupulse')}
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "whyTrupulse"
//               )}`}
//             >
//               Why Trupulse
//             </button>

//             <button
//               onClick={() => scrollToSection('testimonials')}
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/testimonials"
//               )}`}
//             >
//               Testimonials
//             </button>

//             {/* <Link
//               href="/pricing"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/pricing"
//               )}`}
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
//                 "/blogs"
//               )}`}
//             >
//               Blogs
//             </Link> */}
//           </nav>

//           {/* Auth buttons */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/"
//               className="px-10 py-2 border rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
//             >
//               Login
//             </Link>
//             <Link
//               href="/"
//               className="text-center px-6 py-2.5 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient text-white font-medium rounded-full hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] transition-all shadow-sm"
//             >
//               Book a demo
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <Image
//               width={180}
//               height={140}
//               src="/images/logo.png"
//               alt="logo"
//               className="object-contain xl:hidden"
//             />
//           </Link>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="xl:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="xl:hidden bg-white border-t border-pink-100 shadow-lg">
//           <div className="px-6 py-4 space-y-4">
//             <button
//               onClick={() => scrollToSection('ourProduct')}
//               className="block font-medium hover:text-theme  transition-colors w-full text-left"
//             >
//               Our Product
//             </button>

//             <button
//               onClick={() => scrollToSection('whyTrupulse')}
//               className="block font-medium hover:text-theme  transition-colors w-full text-left"
//             >
//               Why Trupulse
//             </button>

//             <button
//               onClick={() => scrollToSection('testimonials')}
//               className="block font-medium hover:text-theme  transition-colors w-full text-left"
//             >
//               Testimonials
//             </button>

//             {/* <Link
//               href="/pricing"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-theme  transition-colors"
//             >
//               Blogs
//             </Link> */}

//             <hr className="border-pink-200" />

//             <div className="flex flex-col gap-3 pt-2">
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-center hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient px-6 py-2.5 text-white font-medium rounded-full transition-all shadow-sm"
//               >
//                 Book a demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./common/Button";
import { useCalendly } from "@/lib/CalendlyContext";
export default function Navbar() {
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCalendly } = useCalendly();

  const isActive = (path) =>
    pathname === path
      ? " underline underline-offset-10 decoration- duration-300 text-theme scale-105 font-bold"
      : "";

  return (
    <header className="w-full absolute top-0 backdrop-blur-sm z-30">
      <div className="max-w-7xl mx-auto px-6 py-4">
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
            <Link href="/#ourProduct">
              <button
                className={`hover:text-theme min-w-28  transition-colors font-medium cursor-pointer ${isActive(
                  "ourProduct"
                )}`}
              >
                Our Product
              </button>
            </Link>
            <Link href="/#whyTrupulse">
              <button
                className={`hover:text-theme min-w-28 transition-colors font-medium cursor-pointer ${isActive(
                  "whyTrupulse"
                )}`}
              >
                Why TruPulse
              </button>
            </Link>

            <Link href="/#testimonials">
              <button
                className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
                  "/testimonials"
                )}`}
              >
                Testimonials
              </button>
            </Link>
            <Link href="/blogs">
            <button
                className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
                  "/blogs"
                )}`}
              >
                Blogs
              </button>
              </Link>


            {/* <Link
              href="/pricing"
              className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
                "/pricing"
              )}`}
            >
              Pricing
            </Link> */}
            {/* <Link
              href="/blogs"
              className={`hover:text-theme transition-colors font-medium cursor-pointer ${isActive(
                "/blogs"
              )}`}
            >
              Blogs
            </Link> */}
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://dashboard.trupulse.ai/"
              className="px-10 py-2 border rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Login
            </a>
            <button
              className="text-center cursor-pointer px-6 py-2.5 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient text-white font-medium rounded-full hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] transition-all shadow-sm"
              onClick={openCalendly}
            >
              Book a demo
            </button>
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
            <Link href="/#ourProduct"  onClick={() => setMenuOpen(!menuOpen)}
              className="block font-medium hover:text-theme  transition-colors w-full text-left"
            >
              Our Product
            </Link>

            <Link href="/#whyTrupulse"  onClick={() => setMenuOpen(!menuOpen)}
              className="block font-medium hover:text-theme  transition-colors w-full text-left"
            >
              Why TruPulse
            </Link>

            <Link href="/#testimonials"  onClick={() => setMenuOpen(!menuOpen)}
              className="block font-medium hover:text-theme  transition-colors w-full text-left"
            >
              Testimonials
            </Link>
            <Link href="/blogs"  onClick={() => setMenuOpen(!menuOpen)}
              className="block font-medium hover:text-theme  transition-colors w-full text-left"
            >
              Blogs
            </Link>

            {/* <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-theme  transition-colors"
            >
              Pricing
            </Link> */}
            {/* <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-theme  transition-colors"
            >
              Blogs
            </Link> */}

            <hr className="border-pink-200" />

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://dashboard.trupulse.ai/"
                onClick={() => setMenuOpen(false)}
                className="text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all"
              >
                Login
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openCalendly();
                }}
                className="text-center hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient px-6 py-2.5 text-white font-medium rounded-full transition-all shadow-sm"
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
