/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white':'#FCFAF8',
        'gray': '#B8B8B8',
        'dark-primary' : '#343332',
        'dark-background': '#2B271D',
        'light-gray' : '#F1F4FA',
        'coffee-brown' : '#4E4033',
        'lightbrown' : '#d4b483'
      },
      boxShadow : {    
        'custom': '0px 4px 16px 2px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
      lighter: 300,
      light: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
      
    },
    
  },
  plugins: [],
}

