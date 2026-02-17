/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25671E",
        secondary: "#48A111",
        accent: "#F2B50B",
        softbg: "#F7F0F0",
        darktext: "#1F2937",
        bordergray: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
