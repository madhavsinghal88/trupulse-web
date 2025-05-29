import Image from "next/image";
import React from "react";

const Group = () => {
  return (
    <>
      <section className="bg-purple-50 mt-52 lg:mt-40 relative h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-screen ">
        <div className="absolute -top-28  w-full px-4 md:px-10 ">
        <div className=" h-4 border rounded-t-2xl hidden xl:block  max-w-5xl m-auto "></div>
        <div className="p-4 relative border max-w-7xl bg-white m-auto rounded-2xl">
          <Image
            width={2000}
            height={2000}
            className="md:p-4"
            src="/images/video.png"
            alt="video"
          />
          <Image
            width={100}
            height={1-0}
            className="size-12 sm:size-16 lg:size-24 absolute top-[40%] right-[45%] z-10"
            src="/images/play.png"
            alt="video"
          />
    
        </div>
        </div>
      </section>
    </>
  );
};

export default Group;
