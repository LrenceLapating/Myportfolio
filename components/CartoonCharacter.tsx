"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { characterStyles, CharacterStyleType } from "./CharacterStyles";

interface CartoonCharacterProps {
  style?: CharacterStyleType;
}

export function CartoonCharacter({ style = "emoji" }: CartoonCharacterProps) {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState<"hero" | "projects" | "about" | "contact">("hero");

  // Smooth spring physics for natural movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Character position based on scroll - moves across screen
  const rawY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [20, 30, 40, 50, 60]);
  const y = useSpring(rawY, springConfig);

  const rawX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [10, 80, 20, 70, 50]);
  const x = useSpring(rawX, springConfig);

  // Character rotation for liveliness
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -10, 5, -5, 0]);
  const smoothRotate = useSpring(rotate, springConfig);

  // Character scale for emphasis
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1.2, 1, 1.1, 1]);
  const smoothScale = useSpring(scale, springConfig);

  // Detect current section
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.2) setCurrentSection("hero");
      else if (latest < 0.4) setCurrentSection("projects");
      else if (latest < 0.7) setCurrentSection("about");
      else setCurrentSection("contact");
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const selectedStyle = characterStyles[style];
  const currentExpression = selectedStyle[currentSection];

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: x.get() + "%",
        top: y.get() + "%",
        x: "-50%",
        y: "-50%",
      }}
    >
      <motion.div
        style={{
          rotate: smoothRotate,
          scale: smoothScale,
        }}
        className="relative"
      >
        {/* Character Container */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl opacity-50"
            style={{ backgroundColor: currentExpression.color }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Character Body */}
          <motion.div
            className="relative w-32 h-32 rounded-full flex items-center justify-center text-6xl backdrop-blur-sm"
            style={{
              backgroundColor: currentExpression.color + "20",
              border: `4px solid ${currentExpression.color}`,
            }}
            animate={{
              borderColor: [
                currentExpression.color,
                currentExpression.color + "80",
                currentExpression.color,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Emoji Face */}
            <motion.span
              key={currentSection}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {currentExpression.emoji}
            </motion.span>
          </motion.div>

          {/* Action Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: currentExpression.color,
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, (i - 1) * 40],
                y: [0, -40 - i * 10],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Speech Bubble */}
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            key={currentSection}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className="px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-sm"
              style={{ backgroundColor: currentExpression.color }}
            >
              {currentExpression.action}
            </div>
            {/* Bubble Tail */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: `8px solid ${currentExpression.color}`,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 rounded-full blur-md"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
