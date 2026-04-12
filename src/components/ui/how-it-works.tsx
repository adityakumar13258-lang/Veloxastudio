"use client";

import { cn } from "@/src/lib/utils";
import { ClipboardEdit, Cpu, Rocket } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  benefits: string[];
  time?: string;
  badge?: string;
}

/**
 * A single step card within the "How It Works" section.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
  time,
  badge,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-white/10 bg-surface p-8 text-primary transition-all duration-300 ease-in-out flex flex-col",
      "hover:scale-105 hover:shadow-lg hover:border-white/30 hover:bg-white/5"
    )}
  >
    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap z-10">
        {badge}
      </div>
    )}
    {/* Icon */}
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-3 text-2xl font-display font-semibold tracking-tight uppercase leading-tight">{title}</h3>
    <p className="mb-8 text-secondary text-sm leading-relaxed">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-4 mb-10 flex-grow">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10 mt-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
          </div>
          <span className="text-secondary text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
    {/* Time */}
    {time && (
      <div className="mt-auto pt-5 border-t border-white/10 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        <span className="text-sm font-medium text-white tracking-wide">{time}</span>
      </div>
    )}
  </div>
);

export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <ClipboardEdit className="h-6 w-6" />,
      title: <>SHARE YOUR<br/>VISION</>,
      description:
        "Fill a quick 10-minute form. We learn everything about your restaurant — brand, menu, vibe, goals.",
      benefits: [
        "Brand colors & logo",
        "Menu & gallery photos",
        "Target customers",
      ],
      time: "Day 1",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: <>WE BUILD<br/>WITH AI</>,
      description:
        "Our AI-augmented workflow builds your conversion-focused website with speed and precision. No compromise on craft.",
      benefits: [
        "AI-generated layouts",
        "Human-refined design",
        "WhatsApp & booking setup",
        "Mobile-first build",
      ],
      time: "Day 2 – 3",
      badge: "Most Exciting",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: <>YOU GO<br/>LIVE</>,
      description:
        "Site launches. Customers find you on Google. Direct calls, walk-ins and table bookings start — no Zomato cut.",
      benefits: [
        "Domain & hosting setup",
        "SEO basics configured",
        "30-day support included",
      ],
      time: "Day 4",
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-32 relative z-10", className)}
      {...props}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-primary">
            How it works
          </h2>
          <p className="mt-6 text-lg text-secondary max-w-2xl mx-auto">
            From first message to live website — faster than you think.
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-16 w-full max-w-5xl hidden md:block">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-white/10"
          ></div>
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                className="flex h-12 w-12 items-center justify-center justify-self-center rounded-full bg-surface border border-white/20 font-display font-semibold text-primary ring-8 ring-background z-10"
              >
                0{index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
              time={step.time}
              badge={step.badge}
            />
          ))}
        </div>

        {/* BOTTOM STATS STRIP */}
        <div className="mx-auto max-w-5xl mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-display font-semibold text-white mb-3">10<span className="text-2xl text-secondary font-normal ml-1">min</span></div>
            <div className="text-xs text-secondary uppercase tracking-widest font-medium">To onboard you</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-display font-semibold text-white mb-3">3<span className="text-2xl text-secondary font-normal ml-1">days</span></div>
            <div className="text-xs text-secondary uppercase tracking-widest font-medium">Average delivery</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-display font-semibold text-white mb-3">0<span className="text-2xl text-secondary font-normal ml-1">%</span></div>
            <div className="text-xs text-secondary uppercase tracking-widest font-medium">Hidden charges</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-display font-semibold text-white mb-3">30<span className="text-2xl text-secondary font-normal ml-1">day</span></div>
            <div className="text-xs text-secondary uppercase tracking-widest font-medium">Free support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
