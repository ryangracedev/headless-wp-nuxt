<template>
  <div class="min-h-screen bg-white">
    <!-- Demo Navigation Bar -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span class="font-semibold text-sm">Headless WordPress + Nuxt Demo</span>
          </div>
          <nav class="flex gap-4 text-sm">
            <span class="px-3 py-1 bg-white/20 rounded-full font-medium">
              Home (Nuxt)
            </span>
            <NuxtLink
              to="/about"
              class="px-3 py-1 hover:bg-white/20 rounded-full transition-colors font-medium"
            >
              About (WordPress)
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {{ hero.headline }}
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8">
            {{ hero.subtext }}
          </p>
          <a 
            href="#contact" 
            class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <!-- Decorative element -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ about.content }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p class="text-xl text-gray-600">
            Full-service digital solutions for modern businesses
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-2xl">{{ service.icon }}</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">
          {{ cta.headline }}
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {{ cta.subtext }}
        </p>
        <a 
          href="/contact" 
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
        >
          {{ cta.buttonText }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// For now, using static data. Later we'll fetch from WordPress API
const hero = {
  headline: 'Building Digital Experiences That Matter',
  subtext: "We're Kobayashi + Zeitguys, a web development studio crafting modern websites and applications."
}

const about = {
  content: 'We partner with businesses to create digital solutions that drive results. From concept to launch, we bring technical expertise and creative vision to every project.'
}

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom WordPress sites, headless CMS solutions, and modern web applications built with cutting-edge technologies.'
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'UI/UX design, branding, and visual identity that connects with your audience and elevates your brand.'
  },
  {
    icon: '📊',
    title: 'Strategy',
    description: 'Digital planning, technical consulting, and optimization to help your business grow online.'
  }
]

const cta = {
  headline: "Ready to Start Your Project?",
  subtext: "Let's talk about how we can help bring your digital vision to life.",
  buttonText: "Let's Talk"
}

// Set page metadata
useHead({
  title: 'Kobayashi + Zeitguys - Web Development Studio',
  meta: [
    { name: 'description', content: 'A modern web development studio crafting custom websites and digital experiences.' }
  ]
})
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>