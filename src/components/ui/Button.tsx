import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
      secondary: "bg-white/10 text-white hover:bg-white/15",
      glass: "glass-panel glass-panel-hover text-white",
      outline: "border border-white/20 text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
