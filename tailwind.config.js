module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        textOpacity: ['dark']
      },
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};