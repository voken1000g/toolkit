import { join } from 'path'

const baseUrl = '/toolkit/'

export default {
  ssr: true,

  /*
  ** 404 for SPA
  */
  generate: {
    dir: 'docs',
    fallback: '404.html'
  },

  router: {
    base: baseUrl
  },

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Voken Toolkit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Voken Toolkit' },

      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: baseUrl + 'favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: baseUrl + 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: baseUrl + 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: baseUrl + 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: baseUrl + 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: baseUrl + 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: baseUrl + 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: baseUrl + 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: baseUrl + 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: baseUrl + 'favicon/apple-icon-180x180.png' },

      { rel: 'icon', type: 'image/png', sizes: '192x192', href: baseUrl + 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: baseUrl + 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: baseUrl + 'favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: baseUrl + 'favicon/favicon-16x16.png' },

      { rel: 'manifest', href: baseUrl + 'favicon/manifest.json' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],

  /*
   ** PurgeCSS
   */
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['svg-inline--fa']
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
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

    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        cacheGroups: {
          bnJs: {
            test: /node_modules[\\/]bn\.js/,
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
          }
        }
      }
    },
  }
}
