/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D97706",   // Warm orange
          secondary: "#FFF7ED", // Light cream
          accent: "#F59E0B",    // Gold
          text: "#1F2937",      // Slate
        },
      },
    },
  },
  plugins: [],
};
