import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
      {/* Abstract 3D Background Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] opacity-50"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-3xl rotate-12"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent border border-white/5 rounded-full backdrop-blur-2xl -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-secondary">Accepting new clients for Q3</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[1.1] mb-8"
        >
          Websites that <br className="hidden md:block" />
          <span className="text-gradient">engineer revenue.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Veloxa Studio is an AI-augmented agency building premium, conversion-focused digital experiences for hospitality and beyond.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/enquiry")}>Start a Project</Button>
          <Button size="lg" variant="glass" className="w-full sm:w-auto" onClick={() => navigate("/projects")}>View Our Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
