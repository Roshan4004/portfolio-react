/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '2': '2',
      }
    },
    colors: {
      primary: '#c93a1b',
      secondary: '#631d0d',
      main:'#fff'
    },
    screens: {
      '2xl': {'max': '2560px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
  },
  plugins: [],
}

