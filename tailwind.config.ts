/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['node_modules/tailvue/dist/tailvue.es.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jazeeraRegular: ['jazeera-regular', 'sans-serif'],
        poppinsMedium: ['poppins-medium', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#363881',
        },
        secondary: {
          DEFAULT: '#C6B5A4',
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4.5rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
