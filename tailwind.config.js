/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      primary: '#00D2AA',
      secondary: '#004141',
      text: {
        primary: '#fff',
      },
      border: {
        primary: '#00414161',
      },
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disable default style
  },
}
