export default defineNuxtConfig({
  compatibilityDate: '2024-11-04',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  // import the generated CSS file globally
  css: [
    '~/assets/css/wordpress-blocks.css'
  ],
  
  runtimeConfig: {
    public: {
      wpGraphQLEndpoint: 'http://headless-wp.local/graphql',
      wpApiBase: 'http://localhost:8080/wp-json/wp/v2'
    }
  },
  
  // Page Routing Rules
  routeRules: {
    '/': { isr: { expiration: 120}},
    '/about': { isr: { expiration: 120}}
  }
})