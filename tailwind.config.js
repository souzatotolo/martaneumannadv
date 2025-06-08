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
          50: '#5d667a', // mais claro
          100: '#414B60', // base definida por você
          200: '#3a4457',
          300: '#333d4d',
          400: '#2c3644',
          500: '#252f3a',
          600: '#1e2831',
          700: '#172127',
          800: '#101a1e',
          900: '#0a1314', // mais escuro
        },
        secondary: {
          50: '#dedad2',
          100: '#c9c3b8',
          200: '#b5ac9e',
          300: '#a09684',
          400: '#8c7f6a',
          500: '#837C6C',
          600: '#736c5d',
          700: '#625c4e',
          800: '#524d3f',
          900: '#413d30',
        },
        gray: {
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
