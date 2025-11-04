// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wpGraphQLEndpoint: 'http://headless-wp.local/graphql' // proxied to WP backend
    }
  },
  routeRules: {
    '/': { isr: { expiration: 120}}
  }
})
