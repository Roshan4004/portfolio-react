/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '2': '2',
      },
      keyframes:{
        floating:{
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 10px)' },
          '100%': { transform: 'translate(0, -0px)' },          
        }
      },
      animation:{
        'floating-image':'floating 3s ease-in-out infinite'
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
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-webkit-center': {
          'text-align': '-webkit-center',
        },
      })
    })
  ],
}

