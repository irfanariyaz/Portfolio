/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/assets/bg.jpg')",
    },
    boxShadow:{
      'icon' : '12px 14px 60px 2px rgba(176,179,118,1)'

    },
    fontFamily:{
      'playfair': ['Inter','sans-serif']
          }
   
  },
},
  plugins: [],
}

