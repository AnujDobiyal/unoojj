"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Projects",
      href: "/#project",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [minimizePfp, setMinimizePfp] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
    setMinimizePfp(latest > 80)
  });

  return (
    <motion.nav
      animate={{
        width: scrolled ? "fit-content" : "90%",
      }}
      onClick={() => {
        if (scrolled) {
          setScrolled(false);
        }
      }}
      className="fixed z-10 bg-primary flex max-w-xl w-[95%] justify-between  items-center px-4 left-1/2 -translate-x-1/2 py-1.5 rounded-lg top-4 border-4 border-neutral-950 ring-2 ring-primary"
    >
      <div className="flex gap-1 items-center cursor-pointer">
        {minimizePfp && (
          <motion.div
            layoutId="pfp"
            transition={{delay: 0}}
            className="relative size-6 rounded-md border border-neutral-950 overflow-hidden  "
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
        )}
        <motion.h1 className=" text-xl inline-block text-neutral-950 font-sans font-bold tracking-wider font-stretch-160%">
          Unoojj
        </motion.h1>
      </div>
      <div
        style={{
          display: scrolled ? "none" : "flex",
        }}
        className="flex gap-2"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-poppins text-xs md:text-sm text-neutral-700 hover:text-neutral-950  font-medium tracking-tight"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
