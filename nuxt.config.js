const webpack = require('webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  htmlAttrs: {
    lang: 'fr',
  },
  head: {
    title: 'Nuxt SPA Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Template used to start a Nuxt SPA application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },


  // Plugins
  plugins: [],


  // CSS
  css: [],


  // Modules
  modules: [
    [ '@nuxtjs/google-analytics', { id: 'UA-XXXXXXXXX-1' } ],
  ],


  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },


  /*
  ** Build configuration
  */
  mode: 'spa',
  build: {
    analyze: false,
    vendor: [],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
