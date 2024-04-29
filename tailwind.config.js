/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      dark: "#1b1b1b",
      light: "#fff",
      accent: "#669999",
      accentDark: "#33cccc",
      gray: "#666633",
    },
    fontFamily: {
      mr: ["var(--font-mr)"],
      in: ["var(--font-in)"]
    },
    animation: {
      roll: "roll 24s linear infinite"
    },
    keyframes: {
      roll: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" }
      }
    },
    screens: {
      sxl: "1180px",
      // @media (min-width: 1180px){...}
      xs: "480px"
      // @media (min-width: 480px){...}
    }
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
];
