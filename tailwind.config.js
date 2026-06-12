module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdf8f0",
        card: "#ece6da",
        tan: {
          100: "#f5f0e8",
          200: "#e8dcc8",
          300: "#d4c8b4",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
