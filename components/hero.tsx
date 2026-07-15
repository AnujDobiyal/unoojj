"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const Hero = () => {
  const subheadings = [
    "Aspiring Frontend Developer",
    "React Developer",
    "Javascript Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];

  const [subheadingIndex, setSubheadingIndex] = useState<number>(0);
  const [minimizePfp, setMinimizePfp] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setMinimizePfp(latest > 80);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSubheadingIndex((prev) => (prev + 1) % subheadings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-35">
      <AnimatePresence>
        {
          <motion.div
            layoutId="pfp"
            style={{ opacity: minimizePfp ? "0%" : "100%" }}
            className="relative size-32 rounded-full overflow-hidden ring-2 border-5 border-transparent ring-primary "
          >
            <Image
              src="/mob.png"
              alt="pfp"
              fill
              className="object-cover"
              loading="eager"
              sizes="512px"
            />
          </motion.div>
        }
      </AnimatePresence>
      <h1 className="mt-6 font-poppins text-2xl font-bold leading-6 text-neutral-50 ">
        Hi, I am <span className="text-primary">Anuj Dobiyal</span> 👋
      </h1>
      <AnimatePresence>
        <motion.span
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-poppins text-neutral-400 text-[15px] inline-block"
          key={subheadingIndex}
        >
          {subheadings[subheadingIndex]}
        </motion.span>
      </AnimatePresence>

      <p className="font-inter mt-5 text-neutral-200 text-balance md:text-pretty mr-4">
        I{"'"}m a frontend developer passionate about crafting modern,
        responsive, and interactive web experiences. I enjoy turning creative
        ideas into functional, user-friendly interfaces with clean and
        maintainable code. Constantly learning and experimenting with new
        technologies, I strive to improve my skills through real-world projects
        and continuous practice. My goal is to build impactful digital
        experiences while growing as a developer.
      </p>
    </section>
  );
};

export default Hero;
