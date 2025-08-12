export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
      colors: {
        primary: {
          // Azul do texto do logo
          50: '#E4E7EA',
          100: '#C9CFD5',
          200: '#9AA5AF',
          300: '#6B7A89',
          400: '#3C5063',
          500: '#0B203B', // base principal
          600: '#18222C',
          700: '#131B24',
          800: '#0D141B',
          900: '#080D12',
        },
        secondary: {
          // Dourado do símbolo
          50: '#F9F3E2',
          100: '#F3E6C5',
          200: '#E7CD8B',
          300: '#DCB451',
          400: '#D4AF37', // base principal
          500: '#B8922F',
          600: '#9C7627',
          700: '#80591F',
          800: '#643D17',
          900: '#48200F',
        },
        gray: {
          // Mantive seu esquema original
          50: '#efedea',
          100: '#dad7d1',
          200: '#c5c2b8',
          300: '#b0aca0',
          400: '#9b9787',
          500: '#A9A491',
          600: '#8d897b',
          700: '#726f64',
          800: '#56554d',
          900: '#3b3b36',
        },
      },
    },
  },
  plugins: [],
};
