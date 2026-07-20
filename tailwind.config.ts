import type { Config } from "tailwindcss";

/**
 * Market Bell design tokens — mirrors the app's app_colors.dart so the site and
 * app read as one product. Logo mark leads with navy + emerald; indigo is the
 * interactive / action accent.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#4F46E5", // primary action / links
          light: "#818CF8",
        },
        navy: {
          DEFAULT: "#0F172A", // headings / dark surfaces
          deep: "#020617", // dark hero base
        },
        emerald: { DEFAULT: "#10B981" },
        gold: { DEFAULT: "#FBBF24" },
        lightbg: "#F6F7FB",
        lavender: "#EDEBFB",
        outline: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(15, 23, 42, 0.08)",
        "glass-lg": "0 24px 64px rgba(15, 23, 42, 0.14)",
        glow: "0 0 48px rgba(79, 70, 229, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(60% 80% at 50% 0%, rgba(79,70,229,0.28) 0%, rgba(2,6,23,0) 70%)",
        "aurora":
          "conic-gradient(from 180deg at 50% 50%, #4F46E5 0deg, #10B981 120deg, #818CF8 240deg, #4F46E5 360deg)",
      },
      keyframes: {
        "aurora-spin": {
          "0%": { transform: "rotate(0deg) scale(1.4)" },
          "100%": { transform: "rotate(360deg) scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "aurora-spin": "aurora-spin 24s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
