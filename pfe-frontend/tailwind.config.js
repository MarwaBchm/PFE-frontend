/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
      },
      backgroundImage: {
        "login-bg": "url('/login-bg.jpg')",
      },
      fontFamily: {
        NovaFlat: ["NovaFlat-Regular"],
        Arial: ["Arial"],
        HostGrotest: ["Host-grotest"],
        Roboto: ["Roboto"],
      },
      fontSize: {
        12: "0.75rem",
        13: " 0.8125rem",
        14: "0.875rem",
        17: "1.0625rem",
      },
      colors: {
        blue: {
          1: "#003465",
          2: "#2B3674",
          3: "#F4F7FE",
          4: "#4318FF",
          5: "#2684FF",
        },
        red: { 1: "#EA4335", 2: "#FFEDED", 3: "#B30506" },
        gray: { 1: "#A3AED0", 2: "#707EAE", 3: "#A0AEC0", 4: "#718096" },
        green: { 1: "#2EB67D" },
        orange: { 1: "#ECB22E" },
      },
    },
  },
  plugins: [],
};
