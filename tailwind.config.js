const defaultTheme = require('tailwindcss/defaultTheme')

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1580px'
      },
      maxWidth: {
        'max-w-screen-2xl': '1580px'
      },
      fontSize: {
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '8rem',
        '10xl': '9rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Hack', 'monospace', ...defaultTheme.fontFamily.mono]
      }

      // container: {
      //   center: true
      // },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
    // ({
    //   layout: 'sidebar',
    // })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
