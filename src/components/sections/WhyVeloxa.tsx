import { motion } from "motion/react";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { Utensils, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export function WhyVeloxa() {
  return (
    <section id="why-veloxa" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">The Veloxa Advantage</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6"
          >
            Why Veloxa Studio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary max-w-2xl mx-auto"
          >
            We don't just build websites. We engineer digital assets that reduce platform dependency and drive direct revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Specialization */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassCard hoverEffect className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
              <Utensils className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-display font-semibold mb-3">Hospitality Specialized</h3>
              <p className="text-secondary mb-8">Deep understanding of customer behavior. Built specifically for restaurants, cafés, and hotels to maximize conversions.</p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Conversion-optimized layouts</div>
                <div className="flex items-center gap-3 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Menu & booking integration</div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Speed */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <GlassCard hoverEffect className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
              <Zap className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-display font-semibold mb-3">Lightning Execution</h3>
              <p className="text-secondary mb-8">AI-augmented workflow combined with human craftsmanship. We deliver premium sites in days, not weeks.</p>
              <div className="mt-auto bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex justify-between text-xs text-secondary mb-3 uppercase tracking-wider">
                  <span>Traditional Agency</span>
                  <span className="text-white">Veloxa Studio</span>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "15%" }} transition={{ duration: 1, delay: 0.5 }} className="absolute top-0 left-0 h-full bg-white/30" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.5 }} className="absolute top-0 left-[15%] h-full bg-white" />
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-white/50">4-6 Weeks</span>
                  <span className="text-white">3 Days</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Transparency */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <GlassCard hoverEffect className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500" />
              <ShieldCheck className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-display font-semibold mb-3">Pricing Transparency</h3>
              <p className="text-secondary mb-8">No hidden costs. No recurring agency retainers. You pay once and own 100% of your digital asset.</p>
              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-semibold text-white mb-1">0%</div>
                  <div className="text-xs text-secondary uppercase tracking-wider">Hidden Fees</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-semibold text-white mb-1">100%</div>
                  <div className="text-xs text-secondary uppercase tracking-wider">Ownership</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4: Business Results */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <GlassCard hoverEffect className="h-full p-8 md:p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
              <TrendingUp className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-display font-semibold mb-3">Direct Business Results</h3>
              <p className="text-secondary mb-8">Stop paying 30% commissions to third-party platforms. We build engines that drive direct customers to you.</p>
              
              {/* Visual Comparison */}
              <div className="mt-auto space-y-5">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-secondary">3rd Party Apps</span>
                    <span className="text-red-400 font-medium">-30% Margin</span>
                  </div>
                  <div className="h-8 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex">
                    <div className="w-[70%] bg-white/20 h-full" />
                    <div className="w-[30%] bg-red-500/20 h-full flex items-center justify-center border-l border-red-500/30">
                      <span className="text-[10px] text-red-400 uppercase tracking-wider font-medium">Fee</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white font-medium">Direct via Veloxa</span>
                    <span className="text-green-400 font-medium">100% Margin</span>
                  </div>
                  <div className="h-8 bg-white/5 border border-white/10 rounded-lg overflow-hidden flex">
                    <motion.div 
                      initial={{ width: "70%" }} 
                      whileInView={{ width: "100%" }} 
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="bg-white h-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
