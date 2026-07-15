import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  AnimationPlaybackControlsWithThen,
  motion,
  useAnimate,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkSvg } from "./svgs";

export const Marquee = ({
  skills,
}: {
  skills: { name: string; svg: React.JSX.Element }[];
}) => {
  return (
    <div className="overflow-hidden mask-l-from-90% mask-r-from-90%">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center px-3 gap-3 w-max"
      >
        {[...skills, ...skills].map((skill, idx) => (
          <button
            key={idx}
            className="font-poppins tracking-wide hover:bg-neutral-200/10 flex items-center gap-3 px-5 py-3 rounded-full font-semibold text-lg cursor-pointer text-white "
          >
            {skill.svg}
            {skill.name}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export const ContactMarquee = ({
  className,
  reverse,
  contacts,
}: {
  className: string;
  reverse?: boolean;
  contacts: { name: string; svg: React.JSX.Element; link: string }[];
}) => {
  const [scope, animate] = useAnimate();

  const animation = useRef<AnimationPlaybackControlsWithThen | null>(null);
  const [currentContact, setCurrentContact] = useState<number | null>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      {
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      },
      {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    );
  }, [animate, reverse, scope]);

  return (
    <div
      className={cn(
        "absolute overflow-hidden w-full mask-l-from-90% mask-r-from-90% border-y-2 border-blue-950 ",
        className,
      )}
    >
      <motion.div
        ref={scope}
        onHoverStart={() => animation.current?.pause()}
        onHoverEnd={() => animation.current?.play()}
        className="flex items-center w-max px-2 divide-x-2 divide-neutral-950"
      >
        {[...contacts, ...contacts].map((contact, idx) => (

            <Link
            key={idx}
              onMouseEnter={() => setCurrentContact(idx)}
              onMouseLeave={() => setCurrentContact(null)}
              href={contact.link}
              target="_blank"
              className="font-poppins flex items-center gap-2 px-5 py-3 font-semibold text-lg cursor-pointer text-neutral-950 h-full "
            >
              {contact.svg}
              {contact.name}
              <AnimatePresence>
                {currentContact === idx && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <LinkSvg className="invert size-8 shrink-0" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

        ))}
      </motion.div>
    </div>
  );
};
