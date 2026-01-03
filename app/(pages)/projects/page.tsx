"use client";
import { motion } from "motion/react";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex w-full p-6 justify-center scroll-mt-20">
            <motion.h1 
              className="font-hero text-5xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              My Recent Projects
            </motion.h1>
        </section>
    )
}