// import { ArrowRight } from "lucide-react";

import Image from "next/image";

// export default function Button({
//   text,
//   icon: Icon = ArrowRight,
//   onClick,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base flex items-center justify-between gap-2 hover:opacity-90 transition">
//       <span>{text}</span>
//       <Icon className="w-4 h-4" />
//     </button>
//   );
// }


export default function Button({
  text,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-gradient-to-r from-[#FF9000] to-[#FF5900] text-white px-8 py-2 rounded-full font-semibold text-base md:text-lg flex items-center gap-4 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
    >
      {/* Profile Images */}
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full  overflow-hidden bg-white">
          <Image width={50} height={50} 
            src="/images/1.png" 
            alt="Profile 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
          <Image width={50} height={50} 
            src="/images/2.png" 
            alt="Profile 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Button Text */}
      <span className="flex-1">{text}</span>
    </button>
  );
}