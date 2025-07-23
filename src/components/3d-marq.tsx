// ThreeDMarqueeDemo.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
 const images = [
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106149/9_ol6fyy.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106139/10_bvzy8j.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106120/8_h29g4h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106110/7_ykqime.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106139/10_bvzy8j.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106120/8_h29g4h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753105830/2_nqq9do.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753105949/3_ziljov.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106065/4_c0kzf2.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106100/6_yuta0h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106110/7_ykqime.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106149/9_ol6fyy.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106139/10_bvzy8j.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106120/8_h29g4h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106110/7_ykqime.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106139/10_bvzy8j.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106120/8_h29g4h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753105830/2_nqq9do.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753105949/3_ziljov.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106065/4_c0kzf2.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106100/6_yuta0h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106110/7_ykqime.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106149/9_ol6fyy.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106139/10_bvzy8j.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106120/8_h29g4h.jpg",
  "https://res.cloudinary.com/dnyw7uyoo/image/upload/v1753106110/7_ykqime.jpg",
];


  return (
    <section
      id="about-us"
      className="relative w-full bg-black text-white py-2 px-4"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-semibold tracking-tight mb-10 text-white font-serif"
      >
        About Us
      </motion.h2>

      <div className="relative mx-auto max-w-7xl flex flex-col items-center justify-center overflow-hidden rounded-3xl py-24 min-h-[600px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 text-center text-3xl md:text-5xl lg:text-6xl font-bold text-white font-sans tracking-tight"
        >
          Empowering Freelancers, One Project at a Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 mt-8 max-w-3xl text-center text-base md:text-lg text-white leading-relaxed"
        >
          At <span className="font-semibold">TheArcone</span>, we’re building more than just a{" "}
          <span className="font-semibold">freelance platform</span>. We’re creating a space where{" "}
          <span className="font-semibold">independent creators</span>,{" "}
          <span className="font-semibold">developers</span>, and{" "}
          <span className="font-semibold">designers</span> can grow their careers, connect with{" "}
          <span className="font-semibold">meaningful opportunities</span>, and showcase their talents — all in one place.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-20 mt-6 max-w-2xl text-center text-sm md:text-base text-white"
        >
          We believe in{" "}
          <span className="font-semibold">transparency</span>,{" "}
          <span className="font-semibold">creativity</span>, and{" "}
          <span className="font-semibold">freedom</span>. With tools to manage{" "}
          <span className="font-semibold">projects</span>,{" "}
          <span className="font-semibold">payments</span>, and{" "}
          <span className="font-semibold">personal branding</span>,{" "}
          <span className="font-semibold">TheArcone</span> is designed to give freelancers the control they deserve over their work and income.
        </motion.p>

       
        {/* Background */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/30" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
    </section>
  );
}
