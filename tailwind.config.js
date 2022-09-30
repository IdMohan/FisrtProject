
module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    screens: {
      xxsm: '310px',
      xsm: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // 2xl: '1536px',
    },
    extend: {
      colors: {
        tomato: {
          "light-0": "#d98273",
          "light-1": "#fb846f",
          "light-2": "#f5593d",
          "default": "#f54324",
          "dark": "#ec4122",
        },
        logo: {
          "second": "#02b3e4",
        }
      },

    },

  },
  plugins: [],
}
