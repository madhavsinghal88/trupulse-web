// import Image from "next/image";
// import Button from "./common/Button";
// import { Fade } from "react-awesome-reveal";

// export default function Report() {
//   return (
//     <section className="py-10 px-6  ">
//       <div className="max-w-7xl w-[90vw] m-auto">
//         <div className="flex flex-col w-fit justify-center items-center m-auto gap-5 ">
//           {/* Title */}
//           <h2 className="text-4xl text-center md:text-5xl w-full font-bold mb-3">
//         Management Ready Reports
//           </h2>

//           {/* Paragraphs */}
//           <div className=" max-w-4xl">
//             <p className="text-base text-center leading-relaxed">
//             Automatically create polished reports featuring executive summaries, highlighted findings, and more than fifteen AI generated, HR-centric employee metrics for instant insights.
//             </p>
//           </div>
//           <Button triggerCalendly text="Book a demo"/>
//         </div>

//         <Fade className="my-12 relative " direction="up"
//                 triggerOnce
//                 delay={100}
//               >
//             <Image
//               width={2000}
//               height={2000}
//               className="md:p-4"
//               src="/images/sales.png"
//               alt="video"
//             />
//         </Fade>

//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Button from "./common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Zoom } from "react-awesome-reveal";

export default function Report() {
  const images = [
    "/images/np.png",
    // "/images/q.png",
    // "/images/w.png",
  ];

  return (
    <section className="py-10 px-6 relative">
      <div className="max-w-7xl w-[90vw] m-auto ">
        <div className="flex flex-col w-fit justify-center items-center m-auto gap-5">
          {/* Title */}
          <h2 className="text-4xl text-center md:text-5xl w-full font-bold mb-3">
            Management Ready Reports
          </h2>

          {/* Paragraph */}
          <div className="max-w-4xl">
            <p className="text-base text-center leading-relaxed">
              Automatically create polished reports featuring executive
              summaries, highlighted findings, and more than fifteen AI
              generated, HR-centric employee metrics for instant insights.
            </p>
          </div>

          <Button triggerCalendly text="Book a demo" />
        </div>

        {/* Swiper Image Carousel */}
        <Zoom
          duration={600}
          triggerOnce
          delay={100}
          className="my-12 z-10 lg:my-18 relative w-full max-w-7xl h-auto mx-auto"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000 }}
            loop={true}
            effect="fade"
            className="rounded-3xl"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  width={2000}
                  height={2000}
                  className="w-full rounded-3xl object-contain  sm:p-4"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Zoom>
        <Image
          className="absolute top-36 hidden xl:block left-[15%]"
          width={1000}
          height={1000}
          src="/images/pur.png"
          alt="img"
        /> 
        <Image
          className="absolute -bottom-12 hidden xl:block  left-[15%]"
          width={1000}
          height={1000}
          src="/images/green.png"
          alt="img"
        /> 
      </div>
    </section>
  );
}
