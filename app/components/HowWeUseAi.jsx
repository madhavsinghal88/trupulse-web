import Image from "next/image";

export default function HowWeUseAi() {
  return (
    <section className="py-10 sm:py-16 px-6 max-w-7xl m-auto">
      <div className="flex flex-col xl:flex-row justify-between">
        {/* Title */}
        <h2 className="text-4xl relative w-fit md:text-5xl font-bold max-w-xl leading-tight">
          Why TruPulse Feedback Beats Conventional Employee Feedback Solutions
          <Image
            width={70}
            height={70}
            className="absolute right-16 md:right-28 top-10 md:top-14"
            src="/images/orange.png"
            alt="decorative"
          />
        </h2>

        {/* Paragraph */}
        <div className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed">
            With zero-effort setup, dynamic AI run sessions, instant executive
            summaries, and automatic employee metric generation, TruPulse solves
            every traditional feedback tool limitation.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="my-12">
        <div className="p-4 max-w-7xl bg-white m-auto rounded-2xl">
          <Image
            width={2000}
            height={2000}
            className="md:p-4"
            src="/images/img.png"
            alt="how we use ai"
          />
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-base mb-2">Save Time</h4>
          <p className="text-sm text-gray-600">
            Reclaim hours weekly by eliminating manual feedback sessions.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-base mb-2">AI Moderation</h4>
          <p className="text-sm text-gray-600">
            Live, dynamic, interactive interviews without manual facilitation.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-base mb-2">Automated Metrics</h4>
          <p className="text-sm text-gray-600">
            Auto-calculate morale, engagement, retention risk, and more.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-base mb-2">Instant Reports</h4>
          <p className="text-sm text-gray-600">
            No manual effort—reports delivered moments after completion.
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-sm md:col-span-2">
          <h4 className="font-semibold text-base mb-2">Unified Toolset</h4>
          <p className="text-sm text-gray-600">
            Pulse surveys, 1:1 discussions, and focus groups in one platform.
          </p>
        </div>
      </div>
    </section>
  );
}
