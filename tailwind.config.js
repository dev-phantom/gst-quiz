/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F3E5f5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        openSan: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
