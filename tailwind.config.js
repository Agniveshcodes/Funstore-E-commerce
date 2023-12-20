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
        100 : "400px" ,
        180 : "930Px",
      },
      height : {
        15 : "60px"
      },
      fontSize : {
        10 : "800px "
      }
    },
  },
  plugins: [],
}

