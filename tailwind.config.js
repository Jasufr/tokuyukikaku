/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'lightpink': '#FFEDF4',
      'darkpink': '#ED0066',
      'lightgray': '#F6F6F6',
      'zinc': '#e4e4e7',
      'darkstone': '#57534e',
      'white': '#FEFEFE',
      'black': '#313131',
      'green': '#2FAD41',
      'red': '#FF0000',
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      '2md': '900px',
      'lg': '1024px',
      '2lg':'1060px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
