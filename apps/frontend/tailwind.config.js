/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f9f4ef',
        stroke: '#020826',
        light: '#fffffe',
        highlight: '#faae2b',
        secondary: '#eaddcf',
        tertiary: '#f25042',
      },
    },
  },
  plugins: [],
  important: true,
})
