/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Pacific Warmth palette - inspired by Cook Islands sunsets, coral reefs, lagoons
        coral: {
          50: '#fef7f4',
          100: '#fdeee8',
          200: '#fbd9cc',
          300: '#f7b8a0',
          400: '#f08b66',
          500: '#e76a40', // Primary coral - dominant accent
          600: '#d4502a',
          700: '#b13d20',
          800: '#8f331d',
          900: '#752d1c',
        },
        lagoon: {
          50: '#f0fdfb',
          100: '#ccfbf4',
          200: '#99f6e9',
          300: '#5ee9d6',
          400: '#2dd4bd',
          500: '#14b8a3', // Deep teal lagoon
          600: '#0d9485',
          700: '#10756b',
          800: '#125d56',
          900: '#134e48',
        },
        sand: {
          50: '#fefdfb',
          100: '#fdf8f1',
          200: '#faefd9',
          300: '#f5e1b8',
          400: '#eecf8f',
          500: '#e4b860', // Warm sand gold
          600: '#d49b35',
          700: '#b17a28',
          800: '#8e6127',
          900: '#745024',
        },
        night: {
          50: '#f4f6f7',
          100: '#e3e7ea',
          200: '#c9d1d7',
          300: '#a4b1bb',
          400: '#778997',
          500: '#5c6e7c',
          600: '#4e5c69',
          700: '#434e58',
          800: '#3b444c',
          900: '#1a1f24', // Deep night sky
          950: '#0d1012',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
