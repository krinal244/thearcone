"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and Tailwind CSS, showcasing animations, responsiveness, and developer skills.",
    image: "/projects/1.jpg",
    demoLink: "https://yourportfolio.live",
    codeLink: "https://github.com/yourname/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "Full-featured store with category filters, cart, secure checkout, and Stripe integration. Built using Next.js and Tailwind.",
    image: "/projects/2.jpg",
    demoLink: "https://mystore.live",
    codeLink: "https://github.com/yourname/store",
  },
  {
    title: "Dashboard UI",
    description: "Analytics dashboard with real-time charts, user stats, and dark mode. Built using Recharts and Tailwind.",
    image: "/projects/3.jpg",
    demoLink: "https://dashboarddemo.live",
    codeLink: "https://github.com/yourname/dashboard",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0f0f10] py-24 px-4 md:px-16 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide uppercase animated-gradient-text">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1b1b1e] rounded-2xl shadow-2xl p-6 transition-transform transform hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_0_20px_#00ffe0] group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-64 transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 uppercase tracking-widest text-[#00ffe0]">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{project.description}</p>
            <div className="flex gap-4">
              <Link
                href={project.demoLink}
                target="_blank"
                className="bg-[#00ffe0] text-black font-bold py-2 px-4 rounded hover:bg-white transition"
              >
                Live Demo
              </Link>
              <Link
                href={project.codeLink}
                target="_blank"
                className="border border-[#00ffe0] text-[#00ffe0] font-bold py-2 px-4 rounded hover:bg-[#00ffe0] hover:text-black transition"
              >
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
