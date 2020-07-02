require('dotenv').config()

export default {
  mode: 'spa',
  target: 'static',
  env: {
    PVERIFY_BASE_URL: process.env.PVERIFY_BASE_URL,
    PVERIFY_TOKEN_URL: process.env.PVERIFY_TOKEN_URL,
    PVERIFY_CLIENT_ID: process.env.PVERIFY_CLIENT_ID,
    PVERIFY_CLIENT_SECRET: process.env.PVERIFY_CLIENT_SECRET,
    PVERIFY_GRANT_TYPE: process.env.PVERIFY_GRANT_TYPE
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
  }
}
