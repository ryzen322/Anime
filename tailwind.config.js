/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        Primary: "#101014",
        Loading: "#202024",
      },
      screens: {
        phoneX: "500px",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
