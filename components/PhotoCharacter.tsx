"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const sectionMessages = {
  hero: {
    text: "Welcome to my portfolio!",
    subtext: "Let me show you around",
    side: "left",
  },
  projects: {
    text: "Check out my work!",
    subtext: "These are my best projects",
    side: "right",
  },
  services: {
    text: "What I Offer",
    subtext: "Services & expertise",
    side: "left",
  },
  tech: {
    text: "Tech Stack",
    subtext: "Tools I work with",
    side: "right",
  },
  about: {
    text: "About Me",
    subtext: "Let me tell you my story",
    side: "left",
  },
  contact: {
    text: "Let's Connect!",
    subtext: "I'd love to hear from you",
    side: "right",
  },
};

export function PhotoCharacter() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState<keyof typeof sectionMessages>("hero");
  const [manualSide, setManualSide] = useState<"left" | "right" | null>(null);

  // Smooth spring physics
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Vertical position - adjusted for 6 sections
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
    [15, 25, 40, 55, 70, 85, 95]
  );
  const y = useSpring(rawY, springConfig);

  // Slight rotation for liveliness
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
    [0, 3, -3, 3, -3, 3, 0]
  );
  const smoothRotate = useSpring(rotate, springConfig);

  // Detect current section - adjusted for 6 sections
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.17) setCurrentSection("hero");         // 0-17% LEFT
      else if (latest < 0.33) setCurrentSection("projects"); // 17-33% RIGHT
      else if (latest < 0.5) setCurrentSection("services");  // 33-50% LEFT
      else if (latest < 0.67) setCurrentSection("tech");     // 50-67% RIGHT
      else if (latest < 0.83) setCurrentSection("about");    // 67-83% LEFT
      else setCurrentSection("contact");                     // 83-100% RIGHT
      
      // Reset manual override when section changes
      setManualSide(null);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentMessage = sectionMessages[currentSection];
  // Use manual side if set, otherwise use default side from section
  const isLeft = manualSide !== null ? manualSide === "left" : currentMessage.side === "left";

  const handleBubbleClick = () => {
    // Toggle to opposite side
    setManualSide(isLeft ? "right" : "left");
  };

  return (
    <motion.div
      className={`fixed z-40 pointer-events-none hidden lg:block transition-all duration-700 ease-out ${isLeft ? "left-[8%]" : "right-[8%]"}`}
      style={{
        top: y.get() + "%",
        y: "-50%",
      }}
    >
      <motion.div
        style={{ rotate: smoothRotate }}
        className="relative"
      >
        {/* Floating Animation Container */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Manga Speech Bubble */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 0, x: isLeft ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`absolute pointer-events-auto ${isLeft ? "left-full ml-4 xl:ml-6" : "right-full mr-4 xl:mr-6"} top-1/2 -translate-y-1/2 w-56 xl:w-64`}
          >
            {/* Cloud-style manga bubble */}
            <div 
              className="relative bg-white rounded-3xl p-4 xl:p-6 shadow-2xl border-3 xl:border-4 border-black cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={handleBubbleClick}
            >
              {/* Manga-style border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white -m-1 pointer-events-none" />
              
              {/* Text content */}
              <div className="relative z-10">
                <p className="text-black font-bold text-base xl:text-lg mb-1 font-heading">
                  {currentMessage.text}
                </p>
                <p className="text-gray-700 text-xs xl:text-sm">
                  {currentMessage.subtext}
                </p>
              </div>

              {/* Manga bubble tail */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ${
                  isLeft ? "-left-4" : "-right-4"
                }`}
              >
                {/* Outer tail */}
                <div
                  className={`w-0 h-0 ${
                    isLeft
                      ? "border-r-[20px] border-r-black border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent"
                      : "border-l-[20px] border-l-black border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent"
                  }`}
                />
                {/* Inner tail */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
                    isLeft
                      ? "-right-[3px] border-r-[16px] border-r-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"
                      : "-left-[3px] border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"
                  }`}
                />
              </div>

              {/* Manga speed lines */}
              <motion.div
                className="absolute -inset-2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-0.5 bg-black"
                    style={{
                      width: `${20 + i * 10}px`,
                      top: `${30 + i * 20}%`,
                      [isLeft ? "left" : "right"]: "-30px",
                      transform: `rotate(${isLeft ? 15 : -15}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Character Photo with 3D effect */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Photo container with manga-style border */}
            <div className="relative w-32 xl:w-40 h-32 xl:h-40 rounded-full overflow-hidden border-3 xl:border-4 border-white shadow-2xl">
              {/* Inner border for manga effect */}
              <div className="absolute inset-0 rounded-full border-3 xl:border-4 border-black z-10" />
              
              {/* Your photo */}
              <Image
                src="/gg.jpg"
                alt="Portfolio Character"
                fill
                className="object-cover"
                priority
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Manga-style action lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-gradient-to-b from-blue-500/30 to-transparent"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 45}deg) translateY(-80px)`,
                    transformOrigin: "0 0",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Shadow */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
