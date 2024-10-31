/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "saitama-yellow": "#e7bf5c",
        "saitama-darker-yellow": "#d0ac53",
        "saitama-red": "#dc2c2b",
        "saitama-darker-red": "#b02322",
        "saitama-gold": "#a98237",
        "saitama-white": "#ede9e8",
        "saitama-darker-white": "#d5d2d1",
      },
    },
  },
  plugins: [],
};
