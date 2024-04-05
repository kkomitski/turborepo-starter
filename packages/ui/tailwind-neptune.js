// import type { Config } from "tailwindcss";

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      whitelist: ["shadow-2xl", "grid md:grid-cols-2",  "md:grid-cols-3", "sm:grid-cols-2", "md:grid-cols-4","sm:grid-cols-2", "lg:grid-cols-5" ],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./helpers/contentful.{js,ts,jsx,tsx,mdx}",
    "./helpers/mappings/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ["NeueHaasGrotDisp-55Roman", "Helvetica", "sans-serif"],
      heading: ["NeueHaasGrotDisp-55Roman", "Helvetica", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        azure: {
          100: "#325FFF",
          70: "#5B7FFF",
          40: "#ADBFFF",
          20: "#CCD7FF",
        },
        alpha: {
          100: "#070605",
        },
        stone: {
          200: "#CCB190",
          400: "#C19A6B",
        },
        navy: {
          100: "#101626",
          70: "#323C59",
          40: "#4F5873",
          20: "#6D7691",
        },
        white: {
          DEFAULT: "#fff",
          95: "#F2F2F2",
          90: "#E6E6E6",
          85: "#D9D9D9",
        },
        popsgreen: {
          300: "#86EFAC",
        },
        neutral: {
          900: "#05051A",
          800: "#1A1A28",
          700: "#2B2A39",
          600: "#403E4D",
          500: "#575362",
          400: "#716D7B",
          300: "#8D8A95",
          200: "#ADAAB3",
          100: "#CFCDD3",
          80: "#E6E6E6",
          50: "#F5F5F6",
        },
        indigo: {
          900: "#312E81",
          800: "#3730A3",
          700: "#4338CA",
          600: "#4F46E5",
          500: "#6366F1",
          400: "#818CF8",
          300: "#A5B4FC",
          200: "#C7D2FE",
          100: "#E0E7FF",
          50: "#EEF2FF",
        },
        invest: {
          400: "#A0C66E",
          300: "#BFE276",
        },
      },
      screens: {
        "lg-range": { min: "1024px", max: "1279px" },
        "md-range": { min: "768px", max: "1023px" },
        "sm-range": { min: "640px", max: "767px" },
        "xs-range": { min: "460px", max: "639px" },
        "xxs-range": { min: "321px", max: "459px" },
        "xl-max": { max: "1279px" },
        "lg-max": { max: "1023px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
        "xs-max": { max: "459px" },
        "xxs-max": { max: "320px" },
        "2xl": "1536px",
        "3xl": "1680px",
        "4xl": "1800px",
        "5xl": "1920px",
        xs: "460px",
        xxs: "376px",
        xxxs: "321px",
      },
      fontSize: {
        zero: "0",
        xxs: "0.625rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
