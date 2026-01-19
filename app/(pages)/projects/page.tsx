"use client";
import { ChevronsRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "./projects-data";

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
        Some of my Works
      </motion.h1>

      {projects.map((project) => (
        <motion.div
          key={project.slug}
          className="w-full max-w-6xl flex flex-row gap-9 border-t border-b justify-between px-5 py-4
            items-center min-h-[120px] backdrop-blur-xs hover:cursor-pointer
            dark:hover:border-green-500 hover:border-green-700 duration-300 ease-out"
          variants={{
            initial: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            hover: { opacity: 1, y: 0 },
          }}
          initial="initial"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Link href={`/projects/${project.slug}`} className="flex-1">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-inter text-base md:text-lg leading-relaxed text-primary">
                {project.title}
              </h1>
              {project.date && (
                <p className="dark:text-green-500 text-sm text-green-700">{project.date}</p>
              )}
            </div>
            {project.description && (
              <p className="mt-1 text-muted-foreground text-sm">
                {project.description}
              </p>
            )}
          </div>
          </Link>

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
      ))}
    </section>
  );
}