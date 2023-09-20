/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white':'#FCFAF8',
      'gray': '#B8B8B8',
      'dark-primary' : '#343332',
      'dark-background': '#2B271D',
      'light-gray' : '#F1F4FA'
    },
    extend: {

      boxShadow : {    
        'custom': '0px 4px 16px 2px rgba(0, 0, 0, 0.25)',
      }
      
    },
    
  },
  plugins: [],
}

