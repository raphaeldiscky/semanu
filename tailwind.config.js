module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './slices/**/*.js'],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    extend: {
      screens: {
        '-2xl': { raw: '(max-width: 1535px)' },
        '-xl': { raw: '(max-width: 1279px)' },
        '-lg': { raw: '(max-width: 1023px)' },
        '-md': { raw: '(max-width: 767px)' },
        '-sm': { raw: '(max-width: 639px)' }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
