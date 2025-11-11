export default defineNuxtConfig({
  compatibilityDate: '2024-11-04',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  runtimeConfig: {
    public: {
      wpGraphQLEndpoint: 'http://headless-wp.local/graphql'
    }
  },
  
  routeRules: {
    '/': { isr: { expiration: 120}}
  }
})