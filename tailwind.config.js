module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  theme: {
    extend: {
      backgroundColor: {
        default: 'var(--color-bg-default)',
        inverse: 'var(--color-bg-inverse)'
      }
    }
  },
  variants: {},
  plugins: []
};
