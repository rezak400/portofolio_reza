module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#211F21",
      },
      container: {
        center: true,
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
