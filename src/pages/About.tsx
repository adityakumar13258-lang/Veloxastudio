import { motion } from "motion/react";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { Target, Cpu, Shield, Layers } from "lucide-react";
import { CTA } from "@/src/components/sections/CTA";
import { PersonalLanding } from "@/src/components/ui/personal-landing";

export default function About() {
  return (
    <main className="pt-32 pb-10 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 mb-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="text-xs font-medium tracking-widest uppercase text-secondary">Our Identity</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-[1.1] mb-8"
          >
            We build engines, <br />
            <span className="text-gradient">not just websites.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Veloxa Studio was founded on a simple premise: your digital presence should be your most powerful customer acquisition tool.
          </motion.p>
        </div>
      </section>

      {/* Core Pillars / Bento Grid */}
      <section className="px-6 mb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassCard hoverEffect className="h-full p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
              <Target className="w-10 h-10 text-white mb-8 relative z-10" />
              <h3 className="text-3xl font-display font-semibold mb-4 relative z-10">Philosophy</h3>
              <p className="text-secondary text-lg leading-relaxed relative z-10">
                Websites are not just design—they are customer acquisition tools. We focus relentlessly on results, conversions, and revenue, not just aesthetics.
              </p>
            </GlassCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <GlassCard hoverEffect className="h-full p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
              <Cpu className="w-10 h-10 text-white mb-8 relative z-10" />
              <h3 className="text-3xl font-display font-semibold mb-4 relative z-10">How We Work</h3>
              <p className="text-secondary text-lg leading-relaxed relative z-10">
                An AI-augmented workflow combining unprecedented speed with human precision. We build simple, robust systems instead of complex, fragile builds.
              </p>
            </GlassCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <GlassCard hoverEffect className="h-full p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
              <Shield className="w-10 h-10 text-white mb-8 relative z-10" />
              <h3 className="text-3xl font-display font-semibold mb-4 relative z-10">Why We Exist</h3>
              <p className="text-secondary text-lg leading-relaxed relative z-10">
                Businesses rely too much on third-party platforms they don't control. We exist to help you own your customers, your data, and your margins.
              </p>
            </GlassCard>
          </motion.div>

          {/* Card 4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <GlassCard hoverEffect className="h-full p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500" />
              <Layers className="w-10 h-10 text-white mb-8 relative z-10" />
              <h3 className="text-3xl font-display font-semibold mb-4 relative z-10">Our Approach</h3>
              <p className="text-secondary text-lg leading-relaxed relative z-10">
                Minimal. Conversion-focused. Built for real-world business outcomes. Every pixel, every interaction, and every word serves a clear purpose.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <PersonalLanding />

      <CTA />
    </main>
  );
}
