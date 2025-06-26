// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// const testimonials = [
//   {
//     name: "Daniel Martinez",
//     title: "Manager of People Ops",
//     company: "Omicron Labs",
//     image: "/images/1.png",
//     quote:
//       "Our managers love the AI-generated discussion prompts—every 1:1 is structured, relevant, and requires zero prep on their part.",
//   },
//   {
//     name: "Michael Chen",
//     title: "Head of HR Analytics",
//     company: "Zeta Group",
//     image: "/images/5.png",
//     quote:
//       "The automated executive reports are a game-changer—clear summaries, key themes, and recommended actions right in my inbox, no manual analysis needed.",
//   },
//   {
//     name: "Anthony Brown",
//     title: "Talent Acquisition Lead",
//     company: "NuVentures",
//     image: "/images/7.png",
//     quote:
//       "The real-time probing AI follows up on employee responses dynamically, giving us deeper insights than static surveys ever could.",
//   },
//   {
//     name: "Robert Williams",
//     title: "Global HR Director",
//     company: "Lambda Industries",
//     image: "/images/1.png",
//     quote:
//       "Scaling feedback across multiple departments is now effortless—the platform supports unlimited sessions without adding headcount or complexity.",
//   },
//   {
//     name: "Emma Johnson",
//     title: "Culture Program Manager",
//     company: "Kappa Solutions",
//     image: "/images/2.png",
//     quote:
//       "Deep analysis across 15 different employee metrics highlighted cultural issues we never saw before, guiding our leadership to make informed changes.",
//   },
//   {
//     name: "Lisa Nguyen",
//     title: "People Manager",
//     company: "Gamma Solutions",
//     image: "/images/3.png",
//     quote:
//       "Our 1:1 check-ins went from manual scheduling nightmares to automated, personalized sessions—resulting in higher participation and more candid feedback from employees.",
//   },
//   {
//     name: "Sarah Lee",
//     title: "VP People Operations",
//     company: "Orion Industries",
//     image: "/images/5.png",
//     quote:
//       "We thought it was just an HR tool, but managers now rely on TruPulse for 1:1s, performance reviews, and progress reports—and no extra work required!",
//   },
//   {
//     name: "Jane Roberts",
//     title: "HR Director",
//     company: "Acme Technologies",
//     image: "/images/7.png",
//     quote:
//       "TruPulse Feedback cut our survey setup time in half and delivered actionable insights within minutes, freeing our team to focus on strategic initiatives rather than tedious admin tasks.",
//   },
//   {
//     name: "Priya Singh",
//     title: "Compliance Officer",
//     company: "MuTech",
//     image: "/images/1.png",
//     quote:
//       "Anonymized data and built-in compliance features gave us confidence to collect honest feedback while maintaining privacy and regulatory standards.",
//   },
//   {
//     name: "Mark Thompson",
//     title: "Talent Lead",
//     company: "Beta Enterprises",
//     image: "/images/2.png",
//     quote:
//       "With AI moderation, our focus groups ran seamlessly without hiring external consultants, and we received comprehensive summaries the same day, saving time and budget.",
//   },
//   {
//     name: "Carlos Ruiz",
//     title: "Employee Experience Lead",
//     company: "Iota LLC",
//     image: "/images/3.png",
//     quote:
//       "We’ve eliminated survey fatigue by sending targeted pulses only to relevant groups, resulting in significantly higher response rates and richer data.",
//   },
//   {
//     name: "Olivia Davis",
//     title: "VP People & Culture",
//     company: "Pi Innovations",
//     image: "/images/4.png",
//     quote:
//       "Automated pulse surveys, focus groups, and interviews deliver a holistic view of employee experience, enabling data-driven HR strategies.",
//   },
//   {
//     name: "Sarah Patel",
//     title: "HR Systems Manager",
//     company: "Epsilon Inc",
//     image: "/images/5.png",
//     quote:
//       "Integration with our HRIS meant we could target specific demographics effortlessly, delivering relevant surveys and discussions without manual cohort management.",
//   },
//   {
//     name: "Elena Garcia",
//     title: "HR Operations Manager",
//     company: "Xi Consulting",
//     image: "/images/7.png",
//     quote:
//       "TruPulse Feedback replaces three separate tools and consultants, centralizing feedback, reducing costs, and simplifying the technology stack.",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="bg-white max-w-7xl m-auto py-16 px-6 md:px-20">
//       {/* Heading */}
//       <div className="flex flex-col xl:flex-row justify-between">
//         <div className="relative">
//           <h2 className="text-4xl w-fit md:text-5xl font-bold max-w-xl leading-tight">
//             What HR Leaders Say
//           </h2>
//           <Image
//             src="/images/curve.png"
//             alt="Decoration"
//             width={100}
//             height={100}
//             className="absolute right-0 -bottom-16 hidden xl:block"
//           />
//         </div>
//         <div className="mt-6 max-w-xl">
//           <p className="text-base leading-relaxed">
//             HR leaders rave about saving time, boosting engagement, and gaining
//             actionable insights using TruPulse’s AI-powered feedback sessions.
//           </p>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="mt-16">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 1000 }}
//           pagination={{ clickable: true }}
//           speed={2000}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <div className="border my-10 rounded-xl p-6 shadow-sm h-full bg-gray-50 flex min-h-[250px] flex-col justify-between">
//                 <p className="text-sm leading-relaxed mb-4 text-gray-800">
//                   {t.quote}
//                 </p>
//                 <div className="flex items-center gap-4 mt-auto pt-4 border-t">
//                   <Image
//                     src={t.image}
//                     alt={t.name}
//                     width={48}
//                     height={48}
//                     className="rounded-full"
//                   />
//                   <div>
//                     <p className="font-semibold text-sm">{t.name}</p>
//                     <p className="text-xs text-gray-600">
//                       {t.title}, {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const testimonials = [
 {
    name: 'Danielle Strazzo',
    position: 'VP of HR, BD',
    content:
      "We cannot fully deliver for our customers, and execute the business agenda, without an engaged workforce. TruPulse delivers insights into your employees' state, arming you to make positive changes to the experience without the burden of surveys.",
    profilePic: '/images/danielle.png',
  },
  {
    name: 'Richard E. Beyer',
    position: 'Fmr Secretary of Labor, State of Kansas',
    content:
      'For years, I administered surveys in organizations. Although invaluable, feedback represented a snapshot in time. To monitor the pulse of organizations on a realtime, continual basis, the AI-driven TruPulse platform is a highly effective strategy.',
    profilePic: '/images/richard.png',
  },
  {
    name: 'Dan Mcculloch',
    position: 'VP, GM of Full Circle, EA',
    content:
      'Employee surveys are amazing but usually very high level. With TruPulse I can see insights on employee morale at any altitude. I used to look forward to having survey results quarterly, now I can see those same results whenever I need them.',
    profilePic: '/images/dan.png',
  },
  {
    name: 'Nathan Mondragon, Ph.D.',
    position: 'Chief IO Psychologist, HireVue',
    content:
      'Improving the workplace experience improves employee engagement and retention. The dynamic insights uncovered by TruPulse will help HR teams improve your workplace with real time, AI driven data that other departments have had for years',
    profilePic: '/images/nathan.png',
  },
  {
    name: 'Mani Sundaram',
    position: 'EVP & GM, Akamai Technologies',
    content:
      'The idea of being able to call up a report on what employee morale is like at any time I want to is a powerful feature of TruPulse. Demographic breakdowns make the insights even more useful.',
    profilePic: '/images/mani.png',
  },
];

export default function TestimonialsSection() {
  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleCount + 1 > testimonials.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <section id="testimonials" className="bg-white py-20 px-4 ">
      <div className="max-w-6xl w-[90vw] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          What HR Leaders Say
        </h2>
        <p className="text-secondary-text text-base md:text-lg max-w-2xl mx-auto mb-12">
          HR leaders rave about saving time, boosting engagement, and gaining
          actionable insights using TruPulse’s AI-powered feedback sessions.
        </p>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl mx-auto">
          {testimonials.slice(0, visibleCount).map((t, index) => (
            <Fade

              key={index}
              className={`flex flex-col gap-6 items-start px-4 m-auto max-w-lg ${
                index % 2 === 0
                  ? "md:border-r md:border-gray-300 md:pr-20"
                  : "md:pr-20"
              }`}
             direction="up"
                triggerOnce
                delay={100}
              >
              <div className="flex items-start gap-4">
                <Image
                  src={t.profilePic}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm sm:text-base mb-2">“{t.content}”</p>
                  <p className="font-semibold text-sm sm:text-base text-black">
                    — {t.name}, {t.position},
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Mobile View with Swiper */}
        <div className="md:hidden">
          <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={16}
            modules={[Autoplay]}
            className="max-w-sm mx-auto"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <Image
                      src={t.profilePic}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm mb-2">“{t.content}”</p>
                      <p className="font-semibold text-sm text-black">
                        — {t.name}, {t.position}, 
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Toggle Button */}
        <div className="mt-10 hidden md:block">
          <button
            onClick={handleToggle}
            className="cursor-pointer underline font-medium hover:opacity-80 transition md:mr-14"
          >
            {visibleCount + 1 > testimonials.length ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
