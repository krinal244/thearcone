"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Samantha Rai",
    company: "Founder, BloomCrafts",
    feedback:
      "TheArcone turned our messy idea into a polished, high-converting website. Absolutely love the attention to detail!",
    image: "/clients/1.jpg",
  },
  {
    name: "Arjun Mehta",
    company: "CTO, MehtaTech",
    feedback:
      "Fast delivery, pixel-perfect frontend and modern animations. Will definitely work with them again.",
    image: "/clients/2.jpg",
  },
  {
    name: "Laura Kim",
    company: "Marketing Head, GlowVibe",
    feedback:
      "Professional team with great communication. They brought our brand identity to life beautifully.",
    image: "/clients/3.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0d0d0e] text-white py-28 px-6 md:px-20 overflow-hidden relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold mb-16 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] via-[#3333ff] to-[#00ffe0]"
      >
        Client Testimonials
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-[#2e2e2e] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#00ffe0]/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">“{testimonial.feedback}”</p>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
