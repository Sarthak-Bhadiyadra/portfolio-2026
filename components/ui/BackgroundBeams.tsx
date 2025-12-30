"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-transparent [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none",
        className
      )}
    >
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Moving Beams */}
        <motion.div 
            animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(124,58,237,0.15),transparent)] opacity-50"
            style={{
                backgroundSize: "100% 100%",
            }}
        />
    </div>
  );
};
