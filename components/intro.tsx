"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { time } from "console";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { activeSection, setActiveSection, timeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* to have image and emoji */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Shahrukh's potrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* bio */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shahrukh.</span> I'm an{" "}
        <span className="font-bold">AI Engineer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">apps</span> empowered with
        state-of-the-art AI capabilities. My focus is{" "}
        <span className="underline">
          Data Science & Deep Learning (Language models)
        </span>
        .
      </motion.h1>

      {/* contact info buttons */}
      <motion.div
        className="flex flex-col sm:flex-row 
        items-center justify-center text-lg
        gap-2 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 
          text-white px-7 py-3 flex
           items-center rounded-full gap-2
           outline-none focus:scale-110
           hover:scale-110 hover:bg-gray-950
           active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group bg-white px-7
          py-3 gap-2 flex items-center
          rounded-full outline-none
          focus:scale-110 hover:scale-110
          active:scale-105 transition
          cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          hover:text-gray-950 gap-2 flex items-center
          rounded-full focus:scale-[1.15] hover:scale-[1.15]
          active:scale-105 transition cursor-pointer border
          border-black/10"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          gap-2 flex items-center rounded-full 
          text-[1.35rem] focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950
          active:scale-105 transition
          cursor-pointer border border-black/10"
          href="https://github.com"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
