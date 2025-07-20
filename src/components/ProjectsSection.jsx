"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/1.jpg",
    demoLink: "https://yourportfolio.live",
    codeLink: "https://github.com/yourname/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "Full-featured store with filters, cart & checkout.",
    image: "/projects/2.jpg",
    demoLink: "https://mystore.live",
    codeLink: "https://github.com/yourname/store",
  },
  {
    title: "Dashboard UI",
    description: "Analytics dashboard with charts, stats & dark mode.",
  image: "/projects/3.jpg",
    demoLink: "https://dashboarddemo.live",
    codeLink: "https://github.com/yourname/dashboard",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#0f0f10] py-24 px-4 md:px-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 glow-text tracking-widest uppercase">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1b1b1e] rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105 hover:rotate-[-1deg]"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={240}
                className="rounded-md object-cover w-full h-60"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-3">
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
                className="bg-transparent border border-[#00ffe0] text-[#00ffe0] font-bold py-2 px-4 rounded hover:bg-[#00ffe0] hover:text-black transition"
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
