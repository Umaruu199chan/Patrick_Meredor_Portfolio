"use client";
import { Github, Instagram, Mail, Facebook } from 'lucide-react';
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer id="footer" className="border-t border-black/50 dark:border-accent
        bg-background min-h-50 lg:min-h-25 w-full flex flex-col gap-10 lg:gap-5 items-center p-10">
            <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center w-full'>
            <motion.h1 
              className="font-hero text-4xl lg:text-5xl font-bold tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              PATRICK MEREDOR
            </motion.h1>
            <div className="flex flex-row gap-3">
                <motion.a className="border px-2 py-2 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.1 }}
                    >
                    <Instagram />
                </motion.a>
                <motion.a className="border px-2 py-2 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white"
                    initial={{ opacity: 0, x:50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.2 }}
                >
                    <Facebook />
                </motion.a>
                <motion.a className="border px-2 py-2 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3 }}
                >
                    <Github />
                </motion.a>
                <motion.a className="border px-2 py-2 text-md rounded-md duration-300 transform-border ease-out
                    hover:border-green-300 hover:bg-green-700 hover:text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4}}
                >
                    <Mail />
                </motion.a>
            </div>
            </div>
            <div>
                <p className='font-inter border-t border-green-500 pt-2 font-medium'>Official Portfolio Website</p>
            </div>
        </footer>
    )
}