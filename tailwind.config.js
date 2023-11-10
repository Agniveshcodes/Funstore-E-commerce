/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        200 : "60rem",
        150 : "50rem",
      }
    },
  },
  plugins: [],
}

