import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { Button } from "@/src/components/ui/Button";

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6">
                Ready to scale your <br />
                <span className="text-gradient">digital presence?</span>
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto mb-10">
                Book a discovery call to discuss your project. We'll analyze your current setup and outline a strategy for growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/enquiry")}>Book a Discovery Call</Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Email Us</Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
