"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Custom-Tailored Designs",
    description: "We build from scratch, exactly as your brand demands — no templates, no shortcuts.",
  },
  {
    title: "One-on-One Support",
    description: "Direct communication with the dev working on your project — zero miscommunication.",
  },
  {
    title: "Modern Stack, Fast Delivery",
    description: "We use Next.js, Tailwind, Framer Motion & 3D libraries for blazing-fast, stunning websites.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative z-10 bg-[#0e0e0f] py-28 px-6 md:px-20 text-white overflow-hidden">
      {/* Glowing background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,rgba(0,255,234,0.3)_0%,transparent_60%)] blur-2xl" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold mb-16 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe0] via-[#a855f7] to-[#00ffe0]"
      >
        Why Choose TheArcone?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group bg-[#16181d] border border-[#2e2e32] p-6 rounded-2xl hover:shadow-xl hover:shadow-[#00ffe0]/20 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#00ffe0] group-hover:underline">
              {point.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
