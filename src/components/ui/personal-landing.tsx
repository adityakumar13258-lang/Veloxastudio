import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Github,
  Instagram,
  Globe,
} from "lucide-react";


const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center gap-6">
      <div className="relative mb-2">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-orange-400 opacity-60 blur-lg animate-glow" />
        <img
          src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Aditya"
          alt="avatar"
          className="relative size-32 rounded-full border-4 border-zinc-800 shadow-xl z-10"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-lg">
        Hi, I'm Aditya
      </h1>
      <p className="text-xl md:text-2xl text-zinc-300 max-w-lg mx-auto font-inter font-normal">
        I craft beautiful, performant web experiences with React, TypeScript, and modern UI frameworks.
      </p>
    </section>
  );
};

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.instagram.com/itz_adityaa69/?hl=en',
    label: 'Instagram',
    icon: <Instagram size={28} />,
    bg: 'bg-pink-600',
    text: 'text-white',
  },
  {
    href: 'https://github.com/adityakumar13258-lang',
    label: 'GitHub',
    icon: <Github size={28} />,
    bg: 'bg-zinc-800',
    text: 'text-white',
  },
  {
    href: '#',
    label: 'Portfolio Website',
    icon: <Globe size={28} />,
    bg: 'bg-zinc-50',
    text: 'text-zinc-900',
  },
];

const SocialsBlock: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-4 w-full font-inter">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={twMerge(
          'flex items-center gap-2 rounded-full border border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-opacity-80',
          link.bg,
          link.text,
        )}
        style={{ minWidth: 140, minHeight: 56 }}
        tabIndex={0}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

const AboutBlock = () => (
  <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 shadow-lg text-center font-inter">
    <p className="text-lg md:text-xl text-zinc-200 font-normal">
      Passionate about building elegant, accessible, and high-performance web apps.<br />Always learning, always sharing.
    </p>
  </div>
);

export const PersonalLanding = () => {
  return (
    <div className="w-full flex items-center justify-center bg-transparent px-4 py-24 text-zinc-50 font-inter relative overflow-hidden">
    {/* Animated background blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-red-500 to-orange-400 opacity-10 rounded-full blur-3xl animate-pulse-slow z-0" />
    <div className="w-full max-w-2xl flex flex-col items-center gap-12 z-10">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-4">
          Meet Our <span className="text-gradient">Founder</span>
        </h2>
      </div>
      <HeroSection />
      <AboutBlock />
      <SocialsBlock />
    </div>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
      .font-inter { font-family: 'Inter', 'Geist', system-ui, sans-serif; }
      .font-geist { font-family: 'Geist', 'Inter', system-ui, sans-serif; }
    `}</style>
  </div>
  );
};
