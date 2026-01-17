"use client";
import { ChevronsRight } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col gap-8 lg:gap-10 items-center p-15 scroll-mt-20"
    >
      <motion.h1
        className="font-hero text-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        My Recent Projects
      </motion.h1>
      <motion.div
        className="flex flex-row gap-5 border justify-center px-5 py-3
        rounded-md items-center backdrop-blur-sm hover:cursor-pointer
        dark:hover:border-green-500 hover:border-green-700 duration-300 ease-out"
        variants={{
          initial: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
          hover: { opacity: 1, y: 0 }
        }}
        initial="initial"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-inter text-base md:text-lg leading-relaxed text-primary ">
          Redesigning the PhilHealth Homepage to help Filipinos Find Health
          Benefits Faster
        </h1>
        <motion.div
          variants={{
            initial: { opacity: 0, x: -20 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ChevronsRight />
        </motion.div>
      </motion.div>
    </section>
  );
}
