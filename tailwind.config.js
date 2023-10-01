/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'accent':'#FCFAF8',
        'gray': '#B8B8B8',
        'dark-primary' : '#343332',
        'dark-background': '#2B271D',
        'light-gray' : '#F1F4FA',
        'coffee-brown' : '#4E4033',
        'lightbrown' : '#d4b483',
        'accent-2': '#F8F3ED',
        'accent-yellow': '#FFA500',
        'brown-secondary' : '#a27738',
        'cream' : 'rgba(212, 180, 131, 0.10)',
        'btn-delivered': '#D7F3DF',
        'delivered' : '#0D9934',
        'canceled' : '#EA1717',
        'btn-canceled' : '#EDBCBC',
        'btn-pending' : 'rgba(255, 165, 0, 0.10)',
        'pending' : 'FFA500',
        'darkest' : '#312921'
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

