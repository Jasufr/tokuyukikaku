/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'lightpink': '#FFEDF4',
      'darkpink': '#ED0066',
      'lightgray': '#F6F6F6',
      // 'lightzinc': '#fafafa',
      'zinc': '#e4e4e7',
      'darkstone': '#57534e',
      'white': '#FEFEFE',
      'black': '#313131',
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      '2md': '932px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
