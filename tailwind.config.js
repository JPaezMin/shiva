const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '500px'
      },
      fontFamily: {
        nunito: ['"Raleway"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
