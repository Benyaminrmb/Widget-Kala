module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '576px',
      md: '960px',
      lg: '1324px',
    },
    content: {
      lines: 'url("~/assets/images/lines.svg")',
      horizontalLines: 'url("~/assets/images/horizontal_lines.svg")',
      darkHorizontalLines: 'url("~/assets/images/dark_horizontal_lines.svg")',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customLightgray: '#F8F8F8',
        customDarkWhite: '#DFE0E3',
        customLightblue: '#50A8EA',
        customLightSky: '#9FCFF3',
        customDarkblue: '#2C3246',
        customGray: '#9195A0',
        customLightGray: '#AAADB5',
        customRed: '#EA8550',
        customMediumGray: '#4B4E59',
        customLighterMediumGray: '#595C67',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
