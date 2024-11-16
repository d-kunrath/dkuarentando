import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "appear-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "balloons": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%) rotate(0)",
          },
          "25%": {
            opacity: "0.25",
            transform: "translateY(75%) rotate(27deg)",
          },
          "50%": {
            opacity: "0.50",
            transform: "translateY(50%) rotate(0)",
          },
          "75%": {
            opacity: "0.75",
            transform: "translateY(25%) rotate(-27deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotate(-45deg)"
          },
        },
        "b-40": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%) rotate(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotate(45deg)",
          },
        },
      },
      animation: {
        "appear-up": "appear-up 2s ease-in",
        balloons: "balloons 2s ease-in",
        "40": "b-40 2s ease-in"
      }
    },
  },
  plugins: [],
} satisfies Config;
