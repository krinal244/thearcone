"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Samantha Rai",
    company: "Founder, BloomCrafts",
    feedback:
      "TheArcone turned our messy idea into a polished, high-converting website. Absolutely love the attention to detail! They handled every revision with patience and really understood our brand vision. I’m impressed with the speed, quality, and professionalism throughout the project.",
    image: "/clients/1.jpg",
  },
  {
    name: "Arjun Mehta",
    company: "CTO, MehtaTech",
    feedback:
      "Fast delivery, pixel-perfect frontend, and modern animations. They used the latest tech stack and ensured mobile responsiveness flawlessly. The team’s communication was top-notch — we were always in the loop. Our internal devs were also impressed with the code quality!",
    image: "/clients/2.jpg",
  },
  {
    name: "Laura Kim",
    company: "Marketing Head, GlowVibe",
    feedback:
      "Professional team with great communication. They brought our brand identity to life beautifully, from wireframes to launch. The site performs well and looks stunning. We received amazing feedback from our audience, and conversions have already improved!",
    image: "/clients/3.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const handleNext = (i) => {
    setIndex(i);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-black py-24 px-4 text-white flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#00ffe0] via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
        What Our Clients Say
      </h2>
      {/* Subtitle */}
      <p className="mt-2 text-center text-lg text-gray-300 bg-gradient-to-r from-white to-[#00ffe0] bg-clip-text text-transparent animate-pulse">
        Real feedback from the people we’ve proudly worked with
      </p>

      {/* Testimonial Card */}
      <div className="min-h-[500px] w-full flex flex-col items-center justify-center pt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, filter: "brightness(1.1)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1.2)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "brightness(1)" }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="relative max-w-3xl w-full bg-[#1a1a1d] rounded-2xl p-10 md:p-14 border border-[#00ffe0] shadow-lg"
          >
            {/* Glow animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-[#00ffe035] blur-xl pointer-events-none rounded-2xl"
            />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={100}
                height={100}
                className="rounded-full object-cover border-2 border-[#00ffe0]"
              />
              <div className="text-left">
                <p className="text-lg md:text-xl leading-relaxed text-white mb-4">
                  {testimonials[index].feedback}
                </p>
                <div className="font-semibold text-[#00ffe0]">
                  {testimonials[index].name}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonials[index].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Navigation */}
        <div className="mt-8 flex space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNext(i)}
              className={`w-4 h-4 rounded-full border border-[#00ffe0] transition-all duration-300 ${
                index === i
                  ? "bg-[#00ffe0] scale-110 shadow-md"
                  : "bg-transparent hover:bg-[#00ffe080]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
