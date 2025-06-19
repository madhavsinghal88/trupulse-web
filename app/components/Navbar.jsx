// "use client";

// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// export default function Navbar() {
//   const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const isActive = (path) =>
//     pathname === path
//       ? " underline underline-offset-10 decoration- duration-300 text-primary-text scale-105 font-bold"
//       : "";

//   return (
//     <header className="w-full  ">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 xl:px-6">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             width={180}
//             height={140}
//             src="/images/logo.png"
//             alt="logo"
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden xl:flex items-center justify-between gap-6 font-semibold text-sm ">
//           {/* Nav links */}
//           <nav className="flex items-center gap-6">
//             <Link
//               href="/usecases"
//               className={`hover:text-orange-500 transition ${isActive(
//                 "/usecases"
//               )}`}
//             >
//               Usecases
//             </Link>
//             <Link
//               href="/pricing"
//               className={`hover:text-orange-500 transition ${isActive(
//                 "/pricing"
//               )}`}
//             >
//               Pricing
//             </Link>
//             <DropdownMenu>
//               <DropdownMenuTrigger
//                 className={`flex cursor-pointer items-center gap-1 hover:text-orange-500 transition focus:outline-none ${isActive(
//                   "/company"
//                 )}`}
//               >
//                 <span>Company</span>
//                 <ChevronDown className="w-4 h-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-80 p-2">
//                 <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
//                   <Link href="/company">
//                     <h4 className="font-semibold text-primary-text">
//                       About Company
//                     </h4>
//                     <p className="text-secondary-text text-sm">
//                       Driven by innovation and excellence, we provide
//                       cutting-edge solutions
//                     </p>
//                   </Link>
//                 </div>
//                 <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
//                   <Link href="/blogs">
//                     <h4 className="font-semibold text-primary-text">
//                       Our Blogs
//                     </h4>
//                     <p className="text-secondary-text text-sm">
//                       Insights, trends, and tips to keep you ahead—explore our
//                       latest blogs.
//                     </p>
//                   </Link>
//                 </div>
//                 <div className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
//                   <Link href="/support">
//                     <h4 className="font-semibold text-primary-text">Support</h4>
//                     <p className="text-secondary-text text-sm">
//                       Real stories, real results—hear how we've helped our
//                       clients succeed.
//                     </p>
//                   </Link>
//                 </div>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <Link
//               href="#"
//               className={`hover:text-orange-500 transition ${isActive(
//                 "/tryIt"
//               )}`}
//             >
//               Try It
//             </Link>
//             <Link
//               href="#"
//               className={`hover:text-orange-500 transition ${isActive(
//                 "/contactUs"
//               )}`}
//             >
//               Contact Us
//             </Link>
//           </nav>

//           {/* Auth buttons */}
//           <div className="flex items-center gap-3">
//             {/* <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
//               Signup
//             </button> */}
//             <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden ">
//           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="xl:hidden px-4 pb-4 font-semibold text-sm space-y-3">
//           <Link
//             href="/usecases"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-orange-500 transition"
//           >
//             Usecases
//           </Link>
//           <Link
//             href="/pricing"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-orange-500 transition"
//           >
//             Pricing
//           </Link>

//           {/* Company Dropdown Toggle */}
//           <div>
//             <button
//               onClick={() => setShowCompanyDropdown((prev) => !prev)}
//               className="flex items-center gap-1 hover:text-orange-500 transition cursor-pointer"
//             >
//               <span>Company</span>
//               <ChevronDown className="w-4 h-4" />
//             </button>

//             {/* Dropdown Items */}
//             {showCompanyDropdown && (
//               <div className="pl-4 pt-2 space-y-2">
//                 <p className="hover:text-orange-500 cursor-pointer">
//                   <Link href="/company" onClick={() => setMenuOpen(false)}>
//                     About Company
//                   </Link>
//                 </p>
//                 <p className="hover:text-orange-500 cursor-pointer">
//                   <Link href="/blogs" onClick={() => setMenuOpen(false)}>
//                     Our Blogs
//                   </Link>
//                 </p>
//                 <p className="hover:text-orange-500 cursor-pointer">
//                   <Link href="/support" onClick={() => setMenuOpen(false)}>
//                     {" "}
//                     Support
//                   </Link>
//                 </p>
//               </div>
//             )}
//           </div>
//           <Link
//             href="#"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-orange-500 transition"
//           >
//             Try It
//           </Link>
//           <Link
//             href="#"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-orange-500 transition"
//           >
//             Contact Us
//           </Link>

//           <hr />

//           <div className="flex flex-col gap-2 pt-2">
//             <button className="border border-secondarytext px-4 py-1.5 rounded-md hover:bg-gray-50 transition">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
//
"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
            <Link
              href="/company"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/company"
              )}`}
            >
              Our Product
            </Link>
            <Link
              href="/usecases"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/usecases"
              )}`}
            >
              Why Trupulse
            </Link>

            <Link
              href="/support"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/support"
              )}`}
            >
              Testimonials
            </Link>

            <Link
              href="/pricing"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/pricing"
              )}`}
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className={`hover:text-orange-500 transition-colors font-medium ${isActive(
                "/blogs"
              )}`}
            >
              Blogs
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-10 py-2 border border-secondarytext rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="px-6 py-2 bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
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
            <Link
              href="/company"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Our Product
            </Link>

            <Link
              href="/why-trupulse"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Why Trupulse
            </Link>

            <Link
              href="/testimonials"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Testimonials
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-orange-500 transition-colors"
            >
              Blogs
            </Link>

            <hr className="border-pink-200" />

            <div className="flex flex-col  gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all"
              >
                Login
              </Link>
              <Link
                href="/demo"
                onClick={() => setMenuOpen(false)}
                className="text-center px-6 py-2.5 bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white font-medium rounded-full hover:bg-orange-600 transition-all shadow-sm"
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
