
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      goldButton: "#B29553",
      goldBg: " #967e44",
      transparent: "transparent",
      blue: "#1A8CCC",
      black: "#000000",
      "solid-black": "#161616",
      lightBlack: "#1c1e1f",
      solidGray: "#333",
      footerText: "#878787",
      ourServicesText: "#ADADAD",
      gray: "#606060",
      brown: "#B0793F",
      white: "#FFFFFF",
      "solid-white": "#F8FAFB",
      grayBackground: "#e0dbcf",
    },
    screens: {
      xs: { min: "320px" },
      // => @media (min-width: 320px) { ... }

      ms: { min: "390px" },
      // => @media (min-width: 390px) { ... }

      mx: { min: "420px" },
      // => @media (min-width: 390px) { ... }

      mp: { min: "480px" },
      // => @media (min-width: 480px) { ... }

      sm: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      ipad: { min: "899px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      cont: { min: "1140px" },
      // => @media (min-width: 1040px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      "2base": "2rem", // 32px
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  rules: {
    // Other rules
    "@next/next/no-img-element": "off",
  },
  mode: "jit",
  plugins: [],
};
