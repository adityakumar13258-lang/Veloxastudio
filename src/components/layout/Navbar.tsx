import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/50 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">Veloxa Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Work", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block text-sm font-medium text-white hover:text-white/80 transition-colors">
            Log in
          </a>
          <Button size="sm">Book a Call</Button>
        </div>
      </div>
    </motion.header>
  );
}
