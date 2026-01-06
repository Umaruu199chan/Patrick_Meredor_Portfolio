"use client";
import { motion } from "motion/react";

export default function Hero() {
  const handleWorksClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-5 lg:gap-10">
      <motion.div
        className="flex flex-col gap-2 items-center justify-center lg:gap-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-birth text-2xl lg:text-4xl items-center justify-center text-green-500">Aspiring UI & UX Designer</p>
        <h1
          className="font-hero text-6xl lg:text-9xl font-bold text-center tracking-wider lg:tracking-wide
          bg-linear-to-b from-foreground via-foreground to-gray-500 bg-clip-text text-transparent"
        >
          PATRICK MEREDOR
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 lg:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          className="font-inter overflow-hidden border-b-2 px-2 py-1 border-green-500 dark:border-green-400"
          whileHover="hover"
          initial="initial"
          onClick={handleContactClick}
        >
          <span>Contact Me</span>
        </motion.button>
        <motion.button
          className="font-inter overflow-hidden border-b-2 px-2 py-1 border-black dark:border-white"
          whileHover="hover"
          initial="initial"
          onClick={handleWorksClick}
        >
          <span>My Works</span>
        </motion.button>
      </motion.div>
    </main>
  );
}
