
// import Image from "next/image";
// export default function Button({
//   text,
//   onClick,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="cursor-pointer bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-8 py-2 rounded-full font-semibold text-base md:text-lg flex items-center gap-4 hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl"
//     >
//       {/* Profile Images */}
//       <div className="flex -space-x-2">
//         <div className="w-10 h-10 rounded-full  overflow-hidden bg-white">
//           <Image width={50} height={50} 
//             src="/images/1.png" 
//             alt="Profile 1" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
//           <Image width={50} height={50} 
//             src="/images/2.png" 
//             alt="Profile 2" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
      
//       {/* Button Text */}
//       <span className="flex-1">{text}</span>
//     </button>
//   );
// }

"use client";

import Image from "next/image";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden px-8 py-2 rounded-full font-semibold text-base md:text-lg flex items-center gap-4 text-white shadow-lg group z-10"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient z-10" />

      {/* Profile Images */}
      <div className="flex -space-x-2 relative z-20">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
          <Image
            width={50}
            height={50}
            src="/images/1.png"
            alt="Profile 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
          <Image
            width={50}
            height={50}
            src="/images/2.png"
            alt="Profile 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Button Text */}
      <span className="flex-1 relative z-20">{text}</span>
    </button>
  );
}
