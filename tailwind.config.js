/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "product-sans": ["PT Sans","sans-serif"],
        "SF-Pro-Display": ["SF Pro Display", "sans-serif"],
        "Quando":["Quando","serif"],
        "Montserrat":["Montserrat","sans-serif", "regular"],
        "Inter":["Inter","sans-serif"],
        "Raleway":["Raleway","sans-serif"],
        "Source-Sans-Pro":["Source Sans Pro","sans-serif"],

      }
    },
    
  },
  plugins: [],
}