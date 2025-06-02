"use client";

import Image from "next/image";

const team = [
  {
    name: "Dirk Peters",
    title: "Co-Founder, TruPulse",
    image: "/images/p.png",
    description:
      "Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    name: "Aisha Grant",
    title: "Chief Technology Officer, TruPulse",
    image:"/images/p2.png",
    description:
      "Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    name: "Liam Chen",
    title: "Head of Product, TruPulse",
    image: "/images/p4.png",
    description:
      "Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    name: "Natalie Rivera",
    title: "Director of Marketing, TruPulse",
    image: "/images/p3.png",
    description:
      "Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    name: "Marcus Osei",
    title: "Lead Data Scientist, TruPulse",
    image: "/images/p1.png",
    description:
      "Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
];

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        The Minds Powering Our Mission
      </h2>
      <p className="text-secondary-text text-lg mb-10 max-w-2xl">
        Dccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {team.map((member, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="absolute bottom-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold">{member.name}</h4>
              <p className="font-semibold text-sm mb-2">{member.title}</p>
              <p className="text-secondary-text text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
