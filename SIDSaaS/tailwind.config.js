module.exports = {
  purge: [
    './templates/*',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
}
