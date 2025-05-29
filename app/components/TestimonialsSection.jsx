import Image from "next/image";

const reviews = [1, 2, 3]; // Dummy items to repeat card 3 times

export default function TestimonialsSection() {
  return (
    <section className="bg-white max-w-7xl m-auto py-10 px-6 ">
      <div className="mx-auto">
        {/* Top Section */}
         <div className="flex flex-col xl:flex-row justify-between">
        {/* Title */}
        {/* <div className="relative"> */}
        <h2 className="text-4xl w-fit md:text-5xl font-bold max-w-2xl leading-tight">
          What our customer  <br />
        say about us
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

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((_, i) => (
            <div key={i} className="rounded-xl border p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/2.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm leading-relaxed">
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore
              </p>
              <p className="text-sm font-semibold">
                veritatis et quasi architecto beatae vitae dicta architecto
                beatae vitae dicta sunt
              </p>
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 text-lg">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
