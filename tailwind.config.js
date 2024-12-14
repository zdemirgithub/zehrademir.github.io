module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          100: '#F5F5F5',
          200: '#E2E2E2',
          300: '#D1D1D1',
          400: '#B5B5B5',
          500: '#A1A1A1',
          600: '#8E8E8E',
          700: '#7A7A7A',
          800: '#616161',
          900: '#424242',
        },
        neon: {
          green: '#39FF14',
          pink: '#FF007F',
          blue: '#00FFFF',
          yellow: '#FFFF00',
        },
      },
    },
  },
  plugins: [],
}
