import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        border: "hsl(var(--border))",
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        violet: {
          500: "#8b5cf6",
          600: "#7c3aed",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-space)", "sans-serif"],
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(6,182,214,0.3), 0 0 40px rgba(139,92,246,0.1)" },
          "100%": { boxShadow: "0 0 30px rgba(6,182,214,0.5), 0 0 60px rgba(139,92,246,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, #1f1f23 1px, transparent 1px), linear-gradient(to bottom, #1f1f23 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
export default config;
