module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: { max: '399px' },
      sm: { min: '400px' },
      md: { min: '640px' },
      lg: { min: '960px' },
      xl: { min: '1280px' },
      xxl: { min: '1580px' }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
