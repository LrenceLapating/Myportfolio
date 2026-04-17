"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Palette, Zap, Users, Sparkles, Rocket } from "lucide-react";
import { useRef } from "react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full stack development with React, Next.js, Node.js, and modern frameworks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with Tailwind CSS and Framer Motion",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized applications with fast load times, SEO, and best practices",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Building innovative solutions for healthcare, education, and business needs",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            About Me
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-300">
              About Techwise
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            I&apos;m a full stack developer specializing in building modern web applications.
            With expertise in React, Next.js, and TypeScript, I create scalable solutions
            that deliver exceptional user experiences and solve real-world problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                
                <div className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl mb-4 sm:mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 sm:mb-3 text-white">
                    {skill.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
