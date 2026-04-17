"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// Lazy load 3D scene only on client
let Scene3DComponent: any = null;

export function Hero3D() {
  const [Scene3D, setScene3D] = useState<any>(null);

  useEffect(() => {
    // Only import on client side
    import("./Scene3D").then((mod) => {
      setScene3D(() => mod.Scene3D);
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {Scene3D ? <Scene3D /> : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium">
              ✨ Available for work
            </span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-9xl font-heading font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300">
              Creative
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting immersive digital experiences with cutting-edge 3D graphics
            and interactive design
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-accent to-purple-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </motion.a>

            <motion.div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero3D;
