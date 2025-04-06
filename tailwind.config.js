/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./web-components/**/*.{js,ts}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        affair: {
          50: "#fbf8fb",
          100: "#f5eff8",
          200: "#ebdfef",
          300: "#dbc5e2",
          400: "#c6a2d0",
          500: "#ab7cb9",
          600: "#8f5e9b",
          700: "#7c4f86",
          800: "#623f69",
          900: "#533758",
          950: "#331c36",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
