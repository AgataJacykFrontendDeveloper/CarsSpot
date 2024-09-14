// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tighter: '-0.04em'
    },
    fontSize: {
      xxs: ['14px'],
      xs: ['15px'],
      s: ['16px'],
      m: ['21.5px'],
      l: ['25px'],
      xl: ['32px'],
      xxl: ['40px'],
      xxxl: ['76.29px'],
    },
    extend: {
      colors: {
        'blueish': '#0147FF',
        'blueish-fade': '#0149ff8b',
        'greyish-black': '#282828',
      },
      spacing: {
        '27': '27%',
        '37': '37%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}

