/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(251 191 36)",
        background: "rgb(16, 16, 20)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
