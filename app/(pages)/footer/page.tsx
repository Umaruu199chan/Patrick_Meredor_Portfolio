"use client";
import { Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-background min-h-50 lg:min-h-25 w-full flex flex-col gap-5 lg:gap-0 
        lg:flex-row lg:justify-between items-center p-10">
            <motion.h1 
              className="font-hero text-4xl lg:text-5xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              PATRICK MEREDOR
            </motion.h1>
            <motion.div
              className="flex flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              >
                <div className="border px-3 py-1 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white font-inter">
                    <Instagram />
                </div>
                <div className="border px-3 py-1 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white font-inter">
                    <Facebook />
                </div>
                <div className="border px-3 py-1 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white font-inter">
                    <Mail />
                </div>
                <div className="border px-3 py-1 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white font-inter">
                    <Linkedin />
                </div>
            </motion.div>
        </footer>
    )
}