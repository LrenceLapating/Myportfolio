"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Palette, Rocket, Sparkles, Zap, Globe } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code2,
    title: "AI-Assisted Web Development",
    description: "Building web-based systems with AI-assisted tools for frontend and backend development",
  },
  {
    icon: Sparkles,
    title: "Software Testing & Debugging",
    description: "Comprehensive testing and debugging to ensure quality and reliability of applications",
  },
  {
    icon: Zap,
    title: "Technical Support",
    description: "System troubleshooting, network recabling, software installation, and printer troubleshooting",
  },
  {
    icon: Globe,
    title: "Network Setup",
    description: "Basic networking setup including LAN and Wi-Fi configuration and cabling",
  },
  {
    icon: Rocket,
    title: "Healthcare Solutions",
    description: "Specialized applications for mental health assessment and well-being monitoring systems",
  },
  {
    icon: Palette,
    title: "Dashboard Design",
    description: "Creating real-time insights dashboards for monitoring and data visualization",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-xs sm:text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            What I Offer
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Services & Expertise
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                
                <motion.div
                  className="relative p-6 sm:p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Icon with subtle animation */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 sm:mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
