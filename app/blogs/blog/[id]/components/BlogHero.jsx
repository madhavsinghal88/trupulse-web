// "use client";

// import Image from "next/image";

// export default function BlogHero() {
//   return (
//     <section className="bg-[#f3d6ff] py-16 pt-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <p className="text-sm font-medium mb-4">Blog / Insights & Ideas</p>
//         <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
//           Insights & Ideas to Power <br className="hidden sm:block" /> Your
//           Business Forward
//         </h1>
//         <p className="text-xl sm:text-2xl max-w-xl leading-relaxed mb-6">
//           Explore how our solution powers real-world results. From driving
//           high-intent leads to automating your goals
//         </p>

//         <div className="flex items-center gap-3">
//           <Image
//             src="/images/1.png"
//             alt="Philip Darville"
//             width={48}
//             height={48}
//             className="rounded-full"
//           />
//           <div>
//             <p>
//               <span className="font-semibold">Philip Darville</span> is the
//               founder of Digital Bite Media,
//             </p>
//             <p className="text-sm text-gray-600">3 Days ago</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import moment from "moment";
import Image from "next/image";

export default function BlogHero({ post }) {
  const formatDate = (value) => {
    if (!value?.seconds) return "";
    return moment(new Date(value.seconds * 1000)).format("dddd, MMMM Do YYYY");
  };

  return (
    <section className="bg-white py-8 pt-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-md font-[lora] font-semibold leading-7 text-pinkText">
          {formatDate(post?.data?.created_at)}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold font-Poppins text-gray-900 mt-4">
          {post?.data?.title}
        </h1>
        <div className="mt-8">
          <img
            src={post?.data?.cover_image}
            alt={post?.data?.altTag || "Blog cover"}
            className="rounded-md w-full max-h-[500px] object-cover md:w-4/5 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
