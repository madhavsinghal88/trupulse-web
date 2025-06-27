// import React from "react";
// import Button from "./Button";
// import { ArrowRight } from "lucide-react";

// const CtaSection = () => {
//   return (
//     <>
//       <div className="relative max-w-7xl m-auto my-16 z-10">
//         {/* Layered Backgrounds */}
//         <div className="absolute -top-3 inset-x-3 rounded-2xl h-full bg-indigo-300 z-[-2]"></div>
//         <div className="absolute -top-6 inset-x-6 rounded-2xl h-full bg-indigo-200 z-[-3]"></div>

//         <div className="bg-primary-text text-white rounded-2xl px-6 md:px-12 py-12 text-center">
//           <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-start max-w-3xl ">
//             Revolutionize feedback with TruPulse: Seamless session creation, dynamic moderation, and instant reporting for smarter HR decisions.
//           </h2>
//           <Button text="Lets Start Journey" icon={ArrowRight} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CtaSection;


import React from "react";
import Image from "next/image";
import Button from "./Button";

const CtaSection = () => {
  return (
    <section className="relative px-4 py-20 md:py-28 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/color.png"
          alt="Background gradient"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 max-w-3xl w-[90vw] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-text leading-tight md:leading-snug">
          Revolutionize feedback with TruPulse: <br />
          Seamless session creation, dynamic moderation, and instant reporting for smarter HR decisions.
        </h2>

        <div className="mt-8 flex justify-center">
           <Button triggerCalendly text="Book a demo" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
