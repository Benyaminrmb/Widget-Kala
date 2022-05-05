module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '576px',
      'md': '960px',
      'lg': '1260px',
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customLightgray: '#F8F8F8',
        customLightblue: '#50A8EA',
        customDarkblue: '#2C3246',
        customGray: '#9195A0',
        customRed: '#EA8550'
      }
    },
  },
  plugins: [],
}
