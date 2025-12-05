module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4F46E5",   // Indigo-600
          secondary: "#6366F1", // Indigo-500
          accent: "#22C55E",    // Emerald
          dark: "#1E1B4B",
          light: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
