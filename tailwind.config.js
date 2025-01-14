const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['nunito', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        'background-gray': '#F6F6F6',
        'communify-green': '#17A9A8',
        'communify-green-alt': '#189F9E',
        'communify-black': '#333244',
        'text-light': '#9F9F9F',
      },
      height: {
        mainContent: 'calc(100vh-100px)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
