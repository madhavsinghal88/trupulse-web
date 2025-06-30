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

export default function Report() {
  const images = [
    "/images/nnn.png",
    "/images/q.png",
    "/images/w.png",
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl w-[90vw] m-auto">
        <div className="flex flex-col w-fit justify-center items-center m-auto gap-5">
          {/* Title */}
          <h2 className="text-4xl text-center md:text-5xl w-full font-bold mb-3">
            Management Ready Reports
          </h2>

          {/* Paragraph */}
          <div className="max-w-4xl">
            <p className="text-base text-center leading-relaxed">
              Automatically create polished reports featuring executive summaries, highlighted findings, and more than fifteen AI generated, HR-centric employee metrics for instant insights.
            </p>
          </div>

          <Button triggerCalendly text="Book a demo" />
        </div>

        {/* Swiper Image Carousel */}
        <div className="my-12 lg:my-18 relative w-full max-w-7xl h-auto mx-auto">
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
                  className="w-full border rounded-3xl object-contain p-2 sm:p-4"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
