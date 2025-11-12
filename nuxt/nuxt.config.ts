export default defineNuxtConfig({
  compatibilityDate: '2024-11-04',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  runtimeConfig: {
    public: {
      wpGraphQLEndpoint: 'http://headless-wp.local/graphql',
      wpApiBase: 'http://headless-wp.local/wp-json/wp/v2'
    }
  },
  
  routeRules: {
    '/': { isr: { expiration: 120}},
    '/about': { isr: { expiration: 120}}
  }
})