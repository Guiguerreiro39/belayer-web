/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          100: '#fdfdfd',
          200: '#fcfcfc',
          300: '#fafafa',
          400: '#f9f9f9',
          500: '#f7f7f7',
          600: '#c6c6c6',
          700: '#949494',
          800: '#636363',
          900: '#313131',
          DEFAULT: '#f7f7f7',
        },
        highlight: {
          100: '#fdebd9',
          200: '#fcd7b2',
          300: '#fac28c',
          400: '#f9ae65',
          500: '#f79a3f',
          600: '#c67b32',
          700: '#945c26',
          800: '#633e19',
          900: '#311f0d',
          DEFAULT: '#f79a3f',
        },
        stroke: {
          100: '#d1d3dc',
          200: '#a3a7ba',
          300: '#757a97',
          400: '#474e75',
          500: '#192252',
          600: '#141b42',
          700: '#0f1431',
          800: '#0a0e21',
          900: '#050710',
          DEFAULT: '#192252',
        },
        secondary: {
          100: '#fcfdfe',
          200: '#f9fafd',
          300: '#f5f8fc',
          400: '#f2f5fb',
          500: '#eff3fa',
          600: '#bfc2c8',
          700: '#8f9296',
          800: '#606164',
          900: '#303132',
          DEFAULT: '#eff3fa',
        },
        disabled: {
          100: '#f3f6fa',
          200: '#e8ecf5',
          300: '#dce3f0',
          400: '#d1d9eb',
          500: '#c5d0e6',
          600: '#9ea6b8',
          700: '#767d8a',
          800: '#4f535c',
          900: '#272a2e',
          DEFAULT: '#c5d0e6',
        },
      },
    },
  },
  plugins: [],
  important: true,
}
