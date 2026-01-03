"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center gap-5">
        <motion.div 
          className="flex flex-row items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-3 h-3 dark:bg-green-500 bg-green-700 rounded-full animate-pulse" />
          <p className="text-xs lg:text-base dark:text-green-500  text-green-700 font-normal font-inter">Available for Work</p>
        </motion.div>
        <motion.h1
          className="font-hero text-5xl lg:text-9xl font-bold text-center tracking-wide
          bg-linear-to-b from-foreground via-foreground to-gray-500 bg-clip-text text-transparent p-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PATRICK MEREDOR
        </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          className="border px-4 py-2 text-md bg-green-600 border-green-300 
          rounded-md duration-300 transform-border ease-out hover:bg-green-700 text-white font-inter"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}
