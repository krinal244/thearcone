"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about-us" },
    { name: "Features", link: "#features" },
    { name: "Projects", link: "#projects" },
    { name: "Why Us", link: "#why-us" }, 
     { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Background Image Overlay (NO BLUR, more visible)
  const BackgroundImageOverlay = () => (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src="/bg.jpg"
        alt="Overlay"
        fill
        quality={100}
        className="object-cover brightness-[1.3]"
        priority
      />
    </div>
  );

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <BackgroundImageOverlay />

      
<div className="absolute top-0 left-0 w-full z-30 text-white drop-shadow-md">
  <Navbar>
   <NavBody className="flex items-center justify-between w-full">
  <NavbarLogo />

<div className="flex items-center gap-4 ml-auto pr-1">
    <NavItems items={navItems} />

    <div className="flex items-center gap-4">
      <NavbarButton variant="primary">Login</NavbarButton>
      <NavbarButton variant="primary">Book a call</NavbarButton>
    </div>
  </div>
</NavBody>


          {/* ✅ Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-20 pt-10">
        {/* ✅ Centered Video */}
        <video
          src="/bggg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-[24px] object-cover w-[500px] h-[300px] z-1"
        />

        <div className="absolute z-20 text-white max-w-[400px] text-center translate-x-62">
          <h1
            className="text-[8vw] md:text-6xl font-bold leading-tight drop-shadow-lg"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Freelancer
          </h1>
          <p
            className="mt-4 text-lg font-medium drop-shadow-md"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Crafting stunning websites & apps with pixel perfection.
          </p>
          <p
            className="text-lg font-medium drop-shadow-md"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Let’s collaborate and bring your vision to life.
          </p>
        </div>
      </div>

      {/* ✅ Hero Text */}
      <div className="h-[100vh] flex items-center justify-center z-20 relative">
        <h1 className="text-[10vw] leading-tight font-bold text-center text-white tracking-tighter">
          THEARCONE
        </h1>
      
      </div>
    </div>
  );
}
