export default {
    buildModules: ["@nuxt/typescript-build"],
    ssr: false,
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
          ]
    }
}