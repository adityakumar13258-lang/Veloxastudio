import { motion } from "motion/react";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { Zap, Target, BarChart3, Cpu } from "lucide-react";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Conversion-First",
    description: "Every pixel is designed to drive actions. We optimize for bookings, calls, and revenue."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-Augmented",
    description: "We leverage advanced AI tools to accelerate development and enhance user personalization."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Built on modern edge infrastructure. Sub-second load times that keep users engaged."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-Driven",
    description: "Decisions backed by analytics, not assumptions. Continuous iteration for maximum ROI."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-6">
            A system built for <span className="text-gradient">performance.</span>
          </h2>
          <p className="text-lg text-secondary">
            We don't just build websites. We engineer digital products that serve as the primary growth engine for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hoverEffect className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
