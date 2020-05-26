module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  theme: {
    columnGap: {
      md: '2rem',
      lg: '4rem'
    },
    extend: {
      backgroundColor: {
        default: 'var(--color-bg-default)',
        inverse: 'var(--color-bg-inverse)'
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-multi-column')()]
};
