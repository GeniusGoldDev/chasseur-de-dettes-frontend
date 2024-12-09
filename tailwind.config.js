/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', 
    './layouts/**/*.vue', 
    './pages/**/*.vue', 
    './plugins/**/*.{js,ts}', 
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3490dc',
          light: '#6cb2eb',
          dark: '#1c3d5a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        metropolis:['Inter','san-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'lgb': '2rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
