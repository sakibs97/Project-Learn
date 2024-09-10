/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:["Lato", "sans-serif"],
      },
      colors:{
        primary:"#f7ba34",
        secondary:"#69a79c",
        light:"#f7f7f7",
        dark:"#333333",
        dark2:"#999999",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"16px",
          sm:"32px",
          lg:"64px",
          xl:"80px",
          "2xl":"96px",
        }
      }
    },
  },
  plugins: [],
}