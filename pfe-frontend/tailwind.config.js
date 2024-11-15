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
      colors: { blue: { 1: "#003465" , 2 : "#2B3674" , 3: "#F4F7FE" , 4:'#4318FF' } , gray: { 1: "#A3AED0" , 2:"#707EAE" }  },
    },
  },
  plugins: [],
};
