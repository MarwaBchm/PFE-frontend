/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/login-bg.jpg')",
      },
      fontFamily: {
        NovaFlat: ["NovaFlat-Regular"],
      },
      colors: { blue: { 1: "#003465" } },
    },
  },
  plugins: [],
};