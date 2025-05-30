import Image from "next/image";

const surveyCards = [
  {
    title: "Onboarding Feedback",
    img: "/images/feedback.png",
  },
  {
    title: "New Hire Evaluation",
    img: "/images/new.png",
  },
  {
    title: "Stay Interviews",
    img: "/images/stay.png",
  },
  {
    title: "Exit Interviews",
    img: "/images/exit.png",
  },
  {
    title: "Real Time afrod",
    img: "/images/real.png",
  },
  {
    title: "Ai Automation",
    img: "/images/ai.png",
  },
];

export default function SurveySolutionsSection() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Smart Surveys, Stronger Teams,
            Drive Culture, Growth, <br />
            and Retention.
          </h2>
          <p className="sm:text-xl max-w-sm">
            Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveyCards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 px-6 py-8 text-center bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="font-bold text-base mb-2">{card.title}</h3>
              <p className="text-sm text-secondary-text">
                <strong>Purpose:</strong> Measure how connected and motivated employees feel at work. <br />
                <strong>Impact:</strong> Identifies drivers of satisfaction, morale dips, and opportunities for improving culture and productivity.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
