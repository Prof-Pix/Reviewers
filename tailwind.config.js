/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "FFFFFF",
      },
      backgroundColor: {
        dark: "#111827",
        light: "FFFFFF",
      },
    },
  },
  plugins: [],
};
