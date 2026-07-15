"use client";

import { motion } from "motion/react";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative max-w-4xl w-full mx-auto  border-x-2 border-primary/10">
      <motion.div
        className="absolute -left-0.5 h-80 w-0.5 rounded-t-full bg-linear-to-b from-primary from-50% to-transparent blur-[1px]"
        initial={{ top: "100%" }}
        animate={{ top: "-6rem" }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -right-0.5 h-80 w-0.5 rounded-t-full bg-linear-to-b from-primary from-50% to-transparent blur-[1px]"
        initial={{ top: "100%" }}
        animate={{ top: "-6rem" }}
        transition={{
          duration: 1.1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {children}
    </div>
  );
};

export default Container;
