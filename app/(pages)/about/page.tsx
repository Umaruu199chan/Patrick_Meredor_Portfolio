"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center p-6 md:p-10 lg:p-16">
      <motion.div 
        className="flex flex-col justify-center gap-6 lg:gap-8 w-full lg:w-1/2 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
          Aspiring <span className="text-green-700 dark:text-green-500">UI & UX</span> Designer
        </h2>
        <div className="flex flex-row items-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5 text-green-700 dark:text-green-500" />
          <p className="font-inter text-base md:text-lg font-medium">
            Trece Martires City, Cavite
          </p>
        </div>
        <p className="font-inter text-base md:text-lg  leading-relaxed text-muted-foreground max-w-xl">
          An aspiring UX/UI designer, who loves creating human centric
          experiences. I&apos;m actively improving my skills in user experience and
          interface design, with a strong focus on usability, visual clarity, and
          thoughtful problem solving.
        </p>
      </motion.div>
      <motion.div 
        className="w-full h-90 lg:w-xl rounded-sm flex items-center justify-center overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/pfp.png"
          alt="Patrick Meredor profile"
          width={3092} // Matches container
          height={192}
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
    </section>
  );
}
