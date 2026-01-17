"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I turn ideas into intuitive and visually consistent experiences.";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullText, typingSpeed]);

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
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-15 lg:gap-10">
      <motion.div
        className="flex flex-col gap-3 items-center justify-center lg:gap-2 mt-10 lg:mt-0 md:mt-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-inter text-xl lg:text-xl dark:text-green-500 text-green-700 font-semibold">UI & UX Designer</p>
        <h1
          className="font-hero text-6xl lg:text-9xl font-bold text-center tracking-wider lg:tracking-wide
          bg-linear-to-b from-foreground via-foreground to-gray-500 bg-clip-text text-transparent"
        >
          PATRICK MEREDOR
        </h1>
        <motion.p 
          className="font-inter text-md text-center lg:text-lg text-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayedText}
          {displayedText.length < fullText.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              |
            </motion.span>
          )}
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 lg:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          className="font-inter font-medium border px-3 py-2 rounded-md bg-green-700 dark:bg-green-500
          text-white hover:scale-95 ease-in duration-300 transition-all cursor-pointer"
          whileHover="hover"
          initial="initial"
          onClick={handleWorksClick}
        >
          <span>View My Work</span>
        </motion.button>
        <motion.button
          className="font-inter border px-3 py-2 rounded-md border-black/20 bg-background dark:bg-input/30 dark:border-input 
          hover:scale-95 ease-in duration-300 transition-all backdrop-blur-sm cursor-pointer"
          whileHover="hover"
          initial="initial"
          onClick={handleContactClick}
        >
          <span>Let&apos;s Work Together </span>
        </motion.button>
      </motion.div>
    </main>
  );
}
