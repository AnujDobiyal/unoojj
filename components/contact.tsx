"use client";

import Link from "next/link";
import { ContactMarquee } from "./marquee";
import { GithubSvg, LinkedInSvg, LinkSvg, MailSvg, WebSvg, XSvg } from "./svgs";

const Contact = () => {
  const resume = "https://drive.google.com/file/d/19se3OUSTmgE9DXbKofAMx4XRKFULuxjC/view"

  const contacts = [
    {
      name: "AnujDobiyal",
      svg: <GithubSvg />,
      link: "https://github.com/AnujDobiyal",
    },
    { name: "@unoojj", svg: <XSvg />, link: "https://x.com/unoojj" },
    { name: "Anuj Dobiyal", svg: <LinkedInSvg />, link: "https://linkedin.com/in/anuj-dobiyal-252655404" },
    {
      name: "anujdobiyal@gmail.com",
      svg: <MailSvg />,
      link: "mailto:anujdobiyal@gmail.com",
    },
    {
      name: "unoojj.me",
      svg: <WebSvg className="size-8" />,
      link: "https://unoojj.me/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center mt-15 scroll-mt-12 h-100 bg-primary"
    >
      <ContactMarquee className="top-0" contacts={contacts} />
      <ContactMarquee className="bottom-0" reverse contacts={contacts} />

      <h1 className="text-neutral-950 text-center font-poppins italic text-6xl  font-extrabold leading-13">
        Let{"'"}s Connect{" "}
      </h1>
      <div className="flex gap-3 flex-col md:flex-row mt-5 ">
        <Link href="mailto:anujdobiyal@gmail.com" className="flex font-poppins  items-center gap-2 border-2 rounded-lg border-neutral-950 text-neutral-950 px-4 py-2.5 font-bold tracking-wide cursor-pointer">
          anujdobiyal@gmail.com <LinkSvg className="invert" />{" "}
        </Link>
        <Link href={resume} target="_blank" className="flex items-center font-poppins bg-neutral-950 rounded-lg text-primary px-4 py-2.5 font-bold tracking-wide cursor-pointer">
          Resume
        </Link>
      </div>
    </section>
  );
};

export default Contact;
