const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'playwrite-mx': ['"Playwrite MX"', 'serif'],
        'playwrite-ng-modern': ['"Playwrite NG Modern"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
        'monospce': ["Inconsolata", "monospace"]
      },
      colors: {
        emerald: {
          50: '#E6F7F1',
          100: '#C2EEDD',
          200: '#9DE4C9',
          300: '#77DAB5',
          400: '#52D0A1',
          500: '#50C878',  // Primary Emerald Green
          600: '#45B368',
          700: '#3A9E58',
          800: '#2F8948',
          900: '#246439',
        },
        darkgrey: {
          50: '#EDEFF1',
          100: '#DBDFE3',
          200: '#B7C0C7',
          300: '#929FA8',
          400: '#6E7F8A',
          500: '#4A5F6C',  // Dark Grey
          600: '#3E515C',
          700: '#32424B',
          800: '#26333A',
          900: '#1A2429',
        },
        tealnew: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#38B2AC',
          500: '#1ABC9C',  // Teal
          600: '#179287',
          700: '#0F766B',
          800: '#0A4A47',
          900: '#0A3837',
        },
        lightgrey: {
          50: '#F9FAFB',
          100: '#F2F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#B7BCC3',
          500: '#A0A8B3',  // Light Grey
          600: '#8792A2',
          700: '#6F7A8B',
          800: '#576171',
          900: '#404857',
        },
      },
    },

  },
  plugins: [],
})