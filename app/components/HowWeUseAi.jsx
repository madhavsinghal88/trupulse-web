import Image from "next/image";

export default function HowWeUseAi() {
  return (
    <section className="pt-16 px-6  max-w-7xl m-auto">
      <div className="flex flex-col xl:flex-row justify-between">
        {/* Title */}
        {/* <div className="relative"> */}
        <h2 className="text-4xl relative w-fit md:text-5xl font-bold max-w-2xl leading-tight">
          How we use AI will <br />
          redefine the way <br />
          discussions happen
           <Image
              width={70}
              height={70}
              className="absolute right-16 md:right-28 top-10 md:top-14 "
              src="/images/orange.png"
              alt="video"
            />
        </h2>
         
        {/* </div> */}


        {/* Paragraphs */}
        <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-4xl">
          <p className="text-base leading-relaxed xl:max-w-[200px]">
            Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore
          </p>
          <p className="text-base leading-relaxed xl:max-w-[200px]">
            Deritatis et quasi architecto beatae vitae dicta architecto beatae
            vitae dicta sunt explicabo
          </p>
        </div>
      </div>

      <div className="my-12">
          <div className="p-4 max-w-7xl bg-white m-auto rounded-2xl">
            <Image
              width={2000}
              height={2000}
              className="md:p-4"
              src="/images/img.png"
              alt="video"
            />
        </div>
      </div>
    </section>
  );
}
