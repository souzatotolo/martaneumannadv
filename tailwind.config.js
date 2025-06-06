export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F7F6F6',
          100: '#EFEEED',
          200: '#DCD9D7',
          300: '#C9C5C2',
          400: '#ABA5A0',
          500: '#968F89',
          600: '#7D7671',
          700: '#635D59',
          800: '#46413D',
          900: '#2E2B29',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};
