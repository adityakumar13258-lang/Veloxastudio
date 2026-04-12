import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel card-3d rounded-2xl overflow-hidden",
          hoverEffect && "glass-panel-hover transition-colors duration-300",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
