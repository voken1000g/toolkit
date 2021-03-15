import {join} from 'path'
import locales from './utils/constants/locales'

const baseUrl = process.env.BASE_URL

export default {
  ssr: false,
  generate: {
    dir: 'dist',
    fallback: '404.html'
  },
  env: {
    msgTest: 'VOKEN Message Helper'
  },
  router: {
    base: baseUrl
  },
  target: 'static',
  head: {
    title: 'VOKEN Toolkit',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'VOKEN Toolkit'},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: baseUrl + 'favicon/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '57x57', href: baseUrl + 'favicon/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: baseUrl + 'favicon/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: baseUrl + 'favicon/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: baseUrl + 'favicon/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: baseUrl + 'favicon/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: baseUrl + 'favicon/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: baseUrl + 'favicon/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: baseUrl + 'favicon/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: baseUrl + 'favicon/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: baseUrl + 'favicon/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: baseUrl + 'favicon/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: baseUrl + 'favicon/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: baseUrl + 'favicon/favicon-16x16.png'},
      {rel: 'manifest', href: baseUrl + 'favicon/manifest.json'},

      {rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'}
    ]
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/common.scss',
    '@/assets/css/app.scss'
  ],
  plugins: [],
  components: true,

  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    'nuxt-i18n',
    'nuxt-fontawesome'
  ],
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faTools',
          'faSeedling',
          'faWallet',
          'faGlobeAmericas',
          'faSpellCheck',
          'faCopy',
          'faCheck',
          'faTimes',
          'faTimesCircle',
          'faExclamationTriangle',
          'faSpinner',
          'faBug',
          'faTerminal',
          'faSignature',
          'faSearch',
          'faUserCircle',
          'faKey',
          'faFingerprint',
          'faLock',
          'faShieldAlt',
          'faDollarSign',
          'faCompactDisc',
          'faLink',
        ]
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: [
          'faSmileWink'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faGithub',
          'faEthereum'
        ]
      }
    ]
  },

  i18n: {
    locales: locales,
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieSecure: false,
      alwaysRedirect: false,
      fallbackLocale: 'en'
    }
  },

  toast: {
    position: 'top-right',
    duration: 5000
  },

  purgeCSS: {
    mode: 'postcss',
    whitelist: ['svg-inline--fa']
  },

  build: {
    // analyze: true,
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js')
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //
    },

    splitChunks: {
      layouts: false,
      pages: true,
      commons: false
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        // minSize: 500000,
        maxSize: 2000000,
        cacheGroups: {
          bip39: {
            test: /node_modules[\\/]bip39/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          elliptic: {
            test: /node_modules[\\/]elliptic/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          browserifySign: {
            test: /node_modules[\\/]browserify-sign/,
            chunks: 'all',
            priority: 20,
            name: true
          },
        }
      }
    }
  }
}
