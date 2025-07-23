"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Pixel Perfect Design",
    description:
      "Every element is meticulously crafted to match your brand's voice. Our designs look stunning on all screen sizes with precise UI detailing.",
    icon: "🎨",
  },
  {
    title: "Latest Tech Stack",
    description:
      "We use modern technologies like Next.js, Tailwind, and Framer Motion to deliver high-performance, scalable websites that impress.",
    icon: "🚀",
  },
  {
    title: "Client-First Approach",
    description:
      "We prioritize your goals, offer continuous updates, and ensure complete satisfaction with every milestone of the project.",
    icon: "🤝",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="why-us"
      className="w-full bg-[#0f0f10] text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#00ffe0] via-pink-400 to-purple-500 bg-clip-text text-transparent mb-12">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => setActive(index === active ? null : index)}
            className={`cursor-pointer rounded-2xl border border-[#00ffe0] p-6 flex flex-col items-center justify-start transition-all duration-300 text-center ${
              active === index
                ? "bg-[#1a1a1d] scale-105 shadow-2xl"
                : "bg-[#121212] hover:scale-105 hover:shadow-xl"
            }`}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#00ffe0]">
              {card.title}
            </h3>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
