"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import {Marquee} from "./marquee";
import {
  Chevorn,
  CSS3Svg,
  GithubSvg,
  GitSvg,
  HTML5Svg,
  LinkSvg,
  MotionSvg,
  NextjsSvg,
  ReactjsSvg,
  ReduxSvg,
  TailwindCSSSvg,
  TypeScriptSvg,
} from "./svgs";
import Link from "next/link";

const Skills = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const skills = [
    {
      name: "Next.js",
      svg: <NextjsSvg className="invert" />,
      href: "https://nextjs.org/docs",
    },
    {
      name: "React.js",
      svg: <ReactjsSvg />,
      href: "https://react.dev/learn",
    },
    {
      name: "Redux",
      svg: <ReduxSvg />,
      href: "https://redux.js.org/introduction/getting-started",
    },
    {
      name: "Motion",
      svg: <MotionSvg />,
      href: "https://motion.dev/docs",
    },
    {
      name: "Tailwind CSS",
      svg: <TailwindCSSSvg />,
      href: "https://tailwindcss.com/docs",
    },
    {
      name: "Git",
      svg: <GitSvg />,
      href: "https://git-scm.com/doc",
    },
    {
      name: "GitHub",
      svg: <GithubSvg className="invert" />,
      href: "https://docs.github.com",
    },
    {
      name: "TypeScript",
      svg: <TypeScriptSvg />,
      href: "https://www.typescriptlang.org/docs",
    },
    {
      name: "CSS3",
      svg: <CSS3Svg />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "HTML5",
      svg: <HTML5Svg />,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  ];

  return (
    <motion.div
      animate={{
        borderRadius: isOpen ? "0.5rem" : "0",
        backgroundColor: isOpen
          ? "var(--color-primary)"
          : "var(--color-neutral-950)",
        color: isOpen ? "var(--color-neutral-950)" : "var(--color-primary)",
      }}
      className="my-8 p-2 text-neutral-950 "
    >
      <motion.div className="flex ">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="font-poppins font-bold text-xl flex items-center gap-1 cursor-pointer shrink-0 py-3 pl-2"
        >
          Skills <Chevorn isOpen={isOpen} />
        </button>
        {!isOpen && <Marquee skills={skills} />}
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.13, ease: "easeInOut" }}
          className="grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3  py-4 px-2 border-t-2"
        >
          {skills.map((skill, idx) => (
            <Link key={idx} href={skill.href} target="_blank">
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.05 * (idx + 1),
                    ease: "easeIn",
                  },
                }}
                whileHover="hover"
                variants={{
                  hover: { scale: 1.02, y: -2 },
                }}
                className="bg-neutral-950 hover:bg-neutral-800 group flex justify-between items-center px-2 py-3 rounded-md font-semibold  cursor-pointer text-white shadow-xs"
              >
                <div className="flex flex-1 text-sm  md:text-base items-center justify-center gap-2 ">
                  <span className={`shrink-0 `}>{skill.svg}</span>
                  {skill.name}
                </div>
                <LinkSvg className="shrink-0 hidden md:block" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Skills;
