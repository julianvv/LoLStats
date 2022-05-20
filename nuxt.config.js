export default {
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
  ],
  ssr: true,
  modules: ['@nuxtjs/axios'],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: [
    "~/api/index"
  ],
}