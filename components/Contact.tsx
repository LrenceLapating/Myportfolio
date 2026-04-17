"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import { useRef } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-purple-400" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575056012987", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "hover:text-pink-400" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Get In Touch
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300">
              Let&apos;s Create
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Something Amazing
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Have an exciting project in mind? I&apos;d love to collaborate and bring
            your vision to life with cutting-edge technology and creative design.
          </p>

          <motion.a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent via-purple-600 to-pink-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-lg font-medium mb-12 sm:mb-16 cursor-pointer shadow-2xl shadow-accent/50"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Start a Conversation
          </motion.a>

          <div className="flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer transition-colors ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-xs sm:text-sm px-2">
            © {new Date().getFullYear()} Techwise. Built with Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
