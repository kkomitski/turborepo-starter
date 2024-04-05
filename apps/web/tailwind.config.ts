import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./pages/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}", "ui/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("ui/tailwind-base.js")],
// };

// module.exports = config;

const config: Config = {
  // content: ["./components/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  safelist: ["translate-x-[0%]", "translate-x-[20%]", "translate-x-[40%]", "translate-x-[60%]"],
  theme: {
    extend: {
      colors: {
        "cmc-orange": {
          100: "#FF4C21",
          80: "#FF704D",
          60: "#FF947A",
          40: "#FFB716",
          20: "#FFD8D3",
        },
        "cmc-navy": {
          // 100: "#05051B",
          100: "#101626",
        },
        "cmc-gray": {
          100: "#3A3D42",
          40: "#B5BEBE",
          30: "#CFDADC",
          20: "#E3F1F3",
          10: "#F2F7F7",
        },
        "cmc-white": "#FFFFFF",
        "cmc-black": {
          60: "#595959",
        },
        "cmc-video": "#101626",
      },
      screens: {
        "4xs": "325px",
        "3xs": "350px",
        xxs: "480px",
        xs: "570px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1640px",
        "4xl": "1980px",
      },
      boxShadow: {
        cmc: "box-shadow: 0px 11px 14px 7px rgba(0,0,0,1)",
      },
      gridTemplateRows: {
        "7": "repeat(7, minmax(0, 1fr))",
        "8": "repeat(8, minmax(0, 1fr))",
        "9": "repeat(9, minmax(0, 1fr))",
      },
      fontSize: {
        xxs: "13.5px",
      },
    },
  },
  plugins: [],
};
export default config;
