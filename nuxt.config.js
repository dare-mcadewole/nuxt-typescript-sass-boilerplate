require('dotenv').config({
  src: '~'
})

export default {
  mode: 'universal',
  server: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  },
  router: {
    middleware: [
      'auth'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'NTS Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Google Font: Sanchez
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Sanchez:400,400i&display=swap'
      },
      // Flexbox grid library
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: ''
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2F80ED' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/font-awesome.js',
    '~/plugins/i18n.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/base/_typography.scss',
      '~/assets/scss/abstracts/_variables.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: [
     /typed-vuex/
   ],
    extend (config, ctx) {
    }
  }
}
