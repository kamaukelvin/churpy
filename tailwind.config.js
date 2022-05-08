module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "hero-pattern": "url('/public/assets/Artboard_8.svg')",
      }),
      colors: {
        primary: "#28c76f",
        blue: "#193b5d",
        cyan: "#50c4a5",
        "light-orange": "#ffd387",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Archivo: ["Archivo", "sans-serif"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
