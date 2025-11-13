<template>
  <div class="min-h-screen bg-white">
    <!-- Header with indicator -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span class="font-semibold">Content Managed in WordPress Gutenberg</span>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="pending" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="animate-pulse space-y-4">
        <div class="h-12 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold text-red-900 mb-2">Error Loading Page</h2>
        <p class="text-red-700 mb-4">{{ error }}</p>
        <div class="bg-gray-100 p-4 rounded mt-4">
          <p class="text-xs text-gray-600 mb-1">Debug Info:</p>
          <p class="text-xs font-mono">API URL: {{ config.public.wpApiBase }}</p>
          <p class="text-xs font-mono">Trying to fetch: {{ config.public.wpApiBase }}/pages?slug=about</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
          <p class="text-sm text-yellow-800 font-semibold mb-2">Quick Fixes:</p>
          <ol class="text-sm text-yellow-800 space-y-1 list-decimal list-inside">
            <li>If using Docker, try changing <code class="bg-yellow-100 px-1">localhost:8080</code> to <code class="bg-yellow-100 px-1">host.docker.internal:8080</code> in nuxt.config.ts</li>
            <li>Make sure WordPress is running: <code class="bg-yellow-100 px-1">docker compose up</code></li>
            <li>Check if the page exists in WordPress at <a href="http://localhost:8080/wp-admin" target="_blank" class="underline">wp-admin</a></li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Content from WordPress -->
    <article v-else-if="data" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Page Title -->
      <header class="mb-6 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {{ data.title?.rendered }}
        </h1>
      </header>

      <!-- Render WordPress Content Directly -->
      <div class="wp-content prose prose-lg max-w-none" v-html="data.content?.rendered" />
    </article>

    <!-- Fallback if no data -->
    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <svg class="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 class="text-2xl font-bold text-blue-900 mb-2">No About Page Found</h2>
        <p class="text-blue-700 mb-4">
          Create a page with the slug "about" in WordPress to see it rendered here.
        </p>
        <a
          href="http://localhost:8080/wp-admin/post-new.php?post_type=page"
          target="_blank"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Create Page in WordPress
        </a>
      </div>
    </div>

    <!-- Demo Navigation -->
    <nav class="border-t border-gray-200 py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home (Nuxt Native)
          </NuxtLink>
          <div class="text-sm text-gray-500">
            Hybrid Demo: Nuxt + WordPress
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Fetch client-side only to avoid Docker networking issues
const { data, pending, error } = await useFetch(
  `${config.public.wpApiBase}/pages`,
  {
    params: {
      slug: 'about',
      _fields: 'id,title,content,excerpt,featured_media'
    },
    transform: (data: any) => Array.isArray(data) ? data[0] : null,
    // Fetch client-side to work with Docker/localhost
    server: false
  }
)

// Set page metadata
useHead({
  title: computed(() => data.value?.title?.rendered || 'About'),
  meta: [
    {
      name: 'description',
      content: computed(() => {
        const excerpt = data.value?.excerpt?.rendered
        return excerpt ? excerpt.replace(/<[^>]*>/g, '').substring(0, 160) : 'About us'
      })
    }
  ]
})
</script>
