"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Tech", href: "#tech" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-lg sm:text-xl font-heading font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          <span className="hidden sm:inline">Techwise</span>
          <span className="sm:hidden">TW</span>
        </motion.a>

        <ul className="flex gap-3 sm:gap-6 md:gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
