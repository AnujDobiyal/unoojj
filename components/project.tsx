"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { GithubSvg, WebSvg } from "./svgs";

type ProjectType = {
  name: string;
  href: string;
  image: string;
  description: string;
  skills: string[];
  github?: string;
}[];

const Project = () => {
  const projects: ProjectType = [
    {
      name: "SketchRef",
      href: "https://sketchreps.unoojj.me/",
      image: "https://sketchreps.unoojj.me/og-image.png",
      description:
        "Build the foundation of your drawing with daily sketch reps. A simple tool to help you practice and improve your drawing skills with daily sketching exercises with your own gallery of references.",
      skills: [
        "Nextjs",
        "CanvasApi",
        "Dexiejs",
        "TailwindCSS",
        "Motion",
        "Typescript",
      ],
    },
    {
      name: "Lab",
      href: "https://lab.unoojj.me/",
      image: "https://sketchreps.unoojj.me/og-image.png",
      description:
        "A collection of UI experiments where I explore animation, interaction, and frontend techniques. This lab is home to recreated components inspired by great web experiences, along with original concepts I build to learn, refine, and push my skills.",
      skills: [
        "Nextjs",
        "CanvasApi",
        "TailwindCSS",
        "Motion",
        "Typescript",
      ],
      github: "https://github.com/AnujDobiyal/unoojj-lab",
    },
  ];

  return (
    <section id="projects">
      <h1 className="font-poppins text-primary font-bold text-2xl">Projects</h1>
      <p className="font-inter text-[15px] text-balance md:text-pretty my-4 max-w-3xl">
        I enjoy building projects that solve real problems I run into or make
        everyday tasks easier. It keeps things meaningful while helping me learn
        new technologies and improve my skills. Each project is a chance to grow
        and become better at how I think, design, and build software.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{
              borderColor: "var(--color-primary)",
              boxShadow: "1px 1px 10px 2px var(--color-primary)",
              transition: {
                duration: 0.6,
              },
            }}
            className="p-3 border-2 rounded-2xl border-primary/60 space-y-3"
          >
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                sizes="512px"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-1">
              <h1 className="font-poppins font-bold text-primary text-2xl tracking-wide">
                {project.name}
              </h1>
              <p className="font-inter mt-2 min-h-28 text-[15px] tracking-tight">
                {project.description}
              </p>
            </div>
            <div className="mx-1 my-4 flex flex-wrap gap-2 ">
              {project.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-linear-to-br flex items-center p-px from-yellow-200/30 from-45% to-90% to-yellow-200 rounded-md"
                >
                  <span className="font-poppins text-xs py-1 px-2 bg-neutral-950 text-yellow-200 tracking-wide font-medium rounded-md">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="font-inter text-sm flex items-center gap-2 mx-1 mb-1">
              <Link href={project.href} target="_blank">
                <motion.button
                  initial={{ scale: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  className="flex items-center gap-1 border px-3 py-1.5 rounded-lg bg-primary text-neutral-950  font-semibold cursor-pointer"
                >
                  <WebSvg /> Website
                </motion.button>
              </Link>
              {project.github && (
                <Link href={project.github} target="_blank">
                  <motion.button
                    initial={{ scale: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    className="flex  items-center gap-2  border px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    <GithubSvg className="invert size-6" /> Github
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
