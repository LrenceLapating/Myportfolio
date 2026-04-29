"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    category: "Web Development",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "HTML/CSS", icon: "🎨" },
      { name: "JavaScript", icon: "JS" },
    ],
  },
  {
    category: "Development Tools",
    techs: [
      { name: "VS Code", icon: "💻" },
      { name: "Git", icon: "📦" },
      { name: "Browser DevTools", icon: "🔧" },
      { name: "Canva", icon: "🎨" },
      { name: "ChatGPT", icon: "🤖" },
    ],
  },
  {
    category: "Technical Support",
    techs: [
      { name: "PC Troubleshooting", icon: "🖥️" },
      { name: "Printer Support", icon: "🖨️" },
      { name: "Network Setup", icon: "🌐" },
      { name: "LAN/Wi-Fi Config", icon: "📡" },
      { name: "Cabling", icon: "🔌" },
    ],
  },
  {
    category: "Office & Productivity",
    techs: [
      { name: "Microsoft Office", icon: "📊" },
      { name: "Excel", icon: "📈" },
      { name: "Word", icon: "📝" },
      { name: "PowerPoint", icon: "📽️" },
      { name: "Outlook", icon: "📧" },
    ],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-xs sm:text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Technologies
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Tech Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Modern technologies for powerful applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Subtle hover glow */}
              <div className="absolute -inset-0.5 bg-white/0 group-hover:bg-white/5 rounded-2xl blur transition-all duration-500" />
              
              <div className="relative p-6 sm:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-white/40"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                      }}
                      className="relative group/tech"
                    >
                      <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="text-base sm:text-lg">{tech.icon}</span>
                          <span className="text-gray-300 text-xs sm:text-sm font-medium">
                            {tech.name}
                          </span>
                        </div>
                      </div>

                      {/* Subtle shine on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg opacity-0 group-hover/tech:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - Clean version */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12"
        >
          <div className="p-6 sm:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 text-center">Soft Skills</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["Problem-solving", "Fast learner", "Analytical thinking", "Team collaboration", "Communication", "Time management", "Adaptability", "Attention to detail"].map(
                (lang, i) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs sm:text-sm hover:text-gray-300 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    {lang}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
