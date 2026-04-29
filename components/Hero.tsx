"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Facebook } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m Marc Laurence A. Lapating
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 sm:mb-6 text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Vibe Coder
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            IT graduate with experience in AI-assisted system development and technical support. 
            Skilled in building web-based systems and troubleshooting hardware/software issues.
          </motion.p>

          <motion.div
            className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-accent to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/50 text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </motion.a>

            <motion.div className="flex gap-2 sm:gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/marc-laurence-lapating-00026519/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575056012987", label: "Facebook" },
                { icon: Mail, href: "mailto:laurencelapating@gmail.com", label: "Email" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
