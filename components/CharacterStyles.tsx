// Different character style presets you can use

export const characterStyles = {
  // Emoji Style (Default)
  emoji: {
    hero: { emoji: "👋", color: "#2563EB", action: "Hello!" },
    projects: { emoji: "💼", color: "#7C3AED", action: "Check this out!" },
    about: { emoji: "🎨", color: "#EC4899", action: "Creative mode!" },
    contact: { emoji: "📧", color: "#F59E0B", action: "Let's talk!" },
  },

  // Robot Style
  robot: {
    hero: { emoji: "🤖", color: "#2563EB", action: "Initializing..." },
    projects: { emoji: "⚙️", color: "#7C3AED", action: "Processing..." },
    about: { emoji: "🔧", color: "#EC4899", action: "Analyzing..." },
    contact: { emoji: "📡", color: "#F59E0B", action: "Connecting..." },
  },

  // Animal Style
  animal: {
    hero: { emoji: "🐱", color: "#2563EB", action: "Meow!" },
    projects: { emoji: "🦊", color: "#7C3AED", action: "Exploring!" },
    about: { emoji: "🐼", color: "#EC4899", action: "Chilling!" },
    contact: { emoji: "🐶", color: "#F59E0B", action: "Woof!" },
  },

  // Space Style
  space: {
    hero: { emoji: "🚀", color: "#2563EB", action: "Launching!" },
    projects: { emoji: "🛸", color: "#7C3AED", action: "Exploring!" },
    about: { emoji: "🌟", color: "#EC4899", action: "Shining!" },
    contact: { emoji: "🌙", color: "#F59E0B", action: "Orbiting!" },
  },

  // Developer Style
  developer: {
    hero: { emoji: "💻", color: "#2563EB", action: "Coding..." },
    projects: { emoji: "🔥", color: "#7C3AED", action: "Building..." },
    about: { emoji: "☕", color: "#EC4899", action: "Caffeinating..." },
    contact: { emoji: "✉️", color: "#F59E0B", action: "Messaging..." },
  },
};

export type CharacterStyleType = keyof typeof characterStyles;
