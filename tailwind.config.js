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
    }
  },
  plugins: [],
}

