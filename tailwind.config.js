/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        soot: "#111111",
        rust: "#C0572A",
        amber: "#D4892A",
        cream: "#E8DCC8",
        grit: "#2e2e2e",
        iron: "#3d3d3d",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
