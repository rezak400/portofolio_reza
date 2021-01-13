module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#211F21"
      },
      container: {
        center: true,
      },
      fontFamily: {
        primary: ['Poppins'],
        seconday: ["Raleway"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
