module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  theme: {
    extend: {
      backgroundColor: {
        default: 'var(--color-bg-default)',
        inverse: 'var(--color-bg-inverse)'
      },
      width: {
        '96': '24rem'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  variants: {
    cursor: ['responsive', 'disabled']
  },
  plugins: []
};
