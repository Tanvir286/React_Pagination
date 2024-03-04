/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ef4a23',
        'secondary': '#2c3a96',
        'third' : "#081621"   
      },
      fontFamily:{
        dm: [ "DM Sans"], 
      },
    },
  },
  plugins: [],
}

