module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/Footer.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/components/Footer.jsx'

JSX attributes must only be assigned a non-empty expression`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/CalendlyContext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CalendlyProvider": (()=>CalendlyProvider),
    "useCalendly": (()=>useCalendly)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CalendlyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const CalendlyProvider = ({ children })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openCalendly = ()=>setIsOpen(true);
    const closeCalendly = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendlyContext.Provider, {
        value: {
            isOpen,
            openCalendly,
            closeCalendly
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/CalendlyContext.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const useCalendly = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CalendlyContext);
}}),
"[project]/app/components/common/Button.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Image from "next/image";
// export default function Button({ text, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="relative cursor-pointer  hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] overflow-hidden px-8 py-2 rounded-full font-semibold text-base md:text-lg flex items-center gap-4 text-white shadow-lg group z-10"
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient z-10" />
//       {/* Profile Images */}
//       <div className="flex -space-x-2 relative z-20">
//         <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
//           <Image
//             width={50}
//             height={50}
//             src="/images/1.png"
//             alt="Profile 1"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
//           <Image
//             width={50}
//             height={50}
//             src="/images/2.png"
//             alt="Profile 2"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       {/* Button Text */}
//       <span className="flex-1 relative z-20">{text}</span>
//     </button>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CalendlyContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Button({ text, onClick, triggerCalendly = false }) {
    const { openCalendly } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalendly"])();
    const handleClick = (e)=>{
        if (triggerCalendly) {
            openCalendly(); // 🎯 open calendly modal
        }
        if (onClick) {
            onClick(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: "relative cursor-pointer hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] overflow-hidden px-8 py-2 rounded-full font-semibold text-base md:text-lg flex items-center gap-4 text-white shadow-lg group z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient z-10"
            }, void 0, false, {
                fileName: "[project]/app/components/common/Button.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex -space-x-2 relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full overflow-hidden bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            width: 50,
                            height: 50,
                            src: "/images/1.png",
                            alt: "Profile 1",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/components/common/Button.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/common/Button.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full overflow-hidden bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            width: 50,
                            height: 50,
                            src: "/images/2.png",
                            alt: "Profile 2",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/components/common/Button.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/common/Button.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/common/Button.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 relative z-20",
                children: text
            }, void 0, false, {
                fileName: "[project]/app/components/common/Button.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/common/Button.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/Navbar.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
//       ? " underline underline-offset-10 decoration- duration-300 text-orange-500 scale-105 font-bold"
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
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "ourProduct"
//               )}`}
//             >
//               Our Product
//             </a>
//             <a
//               href="/#whyTrupulse"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "whyTrupulse"
//               )}`}
//             >
//               Why Trupulse
//             </a>
//             <a
//               href="/#testimonials"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "/testimonials"
//               )}`}
//             >
//               Testimonials
//             </a>
//             {/* <Link
//               href="/pricing"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "/pricing"
//               )}`}
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
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
//               className="block font-medium hover:text-orange-500  transition-colors"
//             >
//               Our Product
//             </a>
//             <a
//               href="/#whyTrupulse"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
//             >
//               Why Trupulse
//             </a>
//             <a
//               href="/#testimonials"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
//             >
//               Testimonials
//             </a>
//             {/* <Link
//               href="/pricing"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
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
//       ? " underline underline-offset-10 decoration- duration-300 text-orange-500 scale-105 font-bold"
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
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "ourProduct"
//               )}`}
//             >
//               Our Product
//             </button>
//             <button
//               onClick={() => scrollToSection('whyTrupulse')}
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "whyTrupulse"
//               )}`}
//             >
//               Why Trupulse
//             </button>
//             <button
//               onClick={() => scrollToSection('testimonials')}
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "/testimonials"
//               )}`}
//             >
//               Testimonials
//             </button>
//             {/* <Link
//               href="/pricing"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
//                 "/pricing"
//               )}`}
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               className={`hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive(
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
//               className="block font-medium hover:text-orange-500  transition-colors w-full text-left"
//             >
//               Our Product
//             </button>
//             <button
//               onClick={() => scrollToSection('whyTrupulse')}
//               className="block font-medium hover:text-orange-500  transition-colors w-full text-left"
//             >
//               Why Trupulse
//             </button>
//             <button
//               onClick={() => scrollToSection('testimonials')}
//               className="block font-medium hover:text-orange-500  transition-colors w-full text-left"
//             >
//               Testimonials
//             </button>
//             {/* <Link
//               href="/pricing"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
//             >
//               Pricing
//             </Link> */}
//             {/* <Link
//               href="/blogs"
//               onClick={() => setMenuOpen(false)}
//               className="block font-medium hover:text-orange-500  transition-colors"
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
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/common/Button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CalendlyContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    const [showCompanyDropdown, setShowCompanyDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { openCalendly } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalendly"])();
    const isActive = (path)=>pathname === path ? " underline underline-offset-10 decoration- duration-300 text-orange-500 scale-105 font-bold" : "";
    // Smooth scroll function using IDs
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
        // Close mobile menu if open
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full absolute top-0 backdrop-blur-sm z-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden xl:flex items-center justify-between gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    width: 180,
                                    height: 140,
                                    src: "/images/logo.png",
                                    alt: "logo",
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.jsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection("ourProduct"),
                                        className: `hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive("ourProduct")}`,
                                        children: "Our Product"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.jsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection("whyTrupulse"),
                                        className: `hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive("whyTrupulse")}`,
                                        children: "Why Trupulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.jsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection("testimonials"),
                                        className: `hover:text-orange-500 transition-colors font-medium cursor-pointer ${isActive("/testimonials")}`,
                                        children: "Testimonials"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.jsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.jsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "px-10 py-2 border rounded-full hover:bg-gray-50 transition-all duration-200 font-medium",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.jsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-center cursor-pointer px-6 py-2.5 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient text-white font-medium rounded-full hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] transition-all shadow-sm",
                                        onClick: openCalendly,
                                        children: "Book a demo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.jsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.jsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.jsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    width: 180,
                                    height: 140,
                                    src: "/images/logo.png",
                                    alt: "logo",
                                    className: "object-contain xl:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.jsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMenuOpen(!menuOpen),
                                className: "xl:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors",
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-gray-700"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6 text-gray-700"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 519,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.jsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.jsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:hidden bg-white border-t border-pink-100 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToSection("ourProduct"),
                            className: "block font-medium hover:text-orange-500  transition-colors w-full text-left",
                            children: "Our Product"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.jsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToSection("whyTrupulse"),
                            className: "block font-medium hover:text-orange-500  transition-colors w-full text-left",
                            children: "Why Trupulse"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.jsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToSection("testimonials"),
                            className: "block font-medium hover:text-orange-500  transition-colors w-full text-left",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.jsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "border-pink-200"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.jsx",
                            lineNumber: 565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "text-center px-6 py-2.5 border border-secondarytext font-medium rounded-full hover:bg-gray-50 transition-all",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "text-center hover:shadow-[0_0_20px_5px_rgba(255,144,0,0.6)] bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient px-6 py-2.5 text-white font-medium rounded-full transition-all shadow-sm",
                                    children: "Book a demo"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.jsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.jsx",
                            lineNumber: 567,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.jsx",
                    lineNumber: 528,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.jsx",
                lineNumber: 527,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.jsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/common/CalendlyModal.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CalendlyModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendly$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-calendly/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CalendlyContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function CalendlyModal() {
    const { isOpen, closeCalendly } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalendly"])();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-4 w-full max-w-3xl relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: closeCalendly,
                    className: "absolute top-2 right-4 cursor-pointer hover:scale-110 duration-300 text-gray-500 hover:text-black",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/app/components/common/CalendlyModal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[600px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendly$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineWidget"], {
                        url: "https://calendly.com/dirkpeters-scanta/30min?hide_event_type_details=1",
                        styles: {
                            height: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/common/CalendlyModal.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/common/CalendlyModal.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/common/CalendlyModal.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/common/CalendlyModal.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/ClientLayoutWrapper.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientLayoutWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CalendlyModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/common/CalendlyModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CalendlyContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ClientLayoutWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CalendlyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendlyProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/ClientLayoutWrapper.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$CalendlyModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/ClientLayoutWrapper.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/ClientLayoutWrapper.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ClientLayoutWrapper.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b9e41cd8._.js.map