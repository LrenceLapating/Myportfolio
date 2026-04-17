import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18181B",
        "on-primary": "#FFFFFF",
        secondary: "#3F3F46",
        accent: "#2563EB",
        background: "#FAFAFA",
        foreground: "#09090B",
        muted: "#E8ECF0",
        border: "#E4E4E7",
        destructive: "#DC2626",
        ring: "#18181B",
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
