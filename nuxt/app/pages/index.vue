<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section (combined: keeps orange gradient + adds dual CTAs) -->
    <section class="relative bg-gradient-to-br from-[#D74E3B] to-[#FF5741] text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {{ hero.headline }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
            {{ hero.subtext }}
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <a
              href="/wp/about"
              class="inline-block bg-white text-[#5956E9] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </a>
            <a
              href="/wp/contact"
              class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative wave -->
      <div class="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Info Banner (from second page) -->
    <section class="bg-blue-50 py-8 border-b-2 border-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center gap-6 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="text-2xl">✨</span>
            <div>
              <p class="text-sm text-gray-600">This homepage uses</p>
              <p class="font-semibold text-blue-900">Custom Nuxt Components</p>
            </div>
          </div>
          <div class="text-gray-400">→</div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">📝</span>
            <div>
              <p class="text-sm text-gray-600">Other pages use</p>
              <p class="font-semibold text-blue-900">WordPress Gutenberg</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section (from first page) -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p class="text-xl text-gray-600 leading-relaxed mb-4">{{ about.content }}</p>
          <p class="text-lg text-gray-500 leading-relaxed">
            Good design can't just look good, it has to be right—for you, your business and your audience.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section (from first page) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p class="text-xl text-gray-600">Full-service digital solutions for modern businesses</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-12 h-12 bg-[#5956E9]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5956E9] transition-all duration-300">
              <span class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5956E9] transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hybrid WordPress + Nuxt (from second page) -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Hybrid WordPress + Nuxt Setup</h2>
          <p class="text-xl text-gray-600">Some pages are custom Nuxt, others are managed in WordPress with Gutenberg blocks</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-400 transition-colors">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-2xl">🏠</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Homepage</h3>
            <p class="text-gray-600 mb-4">Custom Nuxt page with Vue components and Tailwind styling</p>
            <span class="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">You are here</span>
          </div>

          <a href="/wp/about" class="block bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 hover:border-purple-400 transition-colors">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-2xl">📝</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">About Page</h3>
            <p class="text-gray-600 mb-4">WordPress page with Gutenberg blocks - edit in WP Admin</p>
            <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">WordPress + Gutenberg →</span>
          </a>

          <a href="/wp/services" class="block bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 hover:border-orange-400 transition-colors">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <span class="text-2xl">🎨</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Services</h3>
            <p class="text-gray-600 mb-4">Another WordPress page with rich Gutenberg block layouts</p>
            <span class="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">WordPress + Gutenberg →</span>
          </a>
        </div>

        <!-- Feature List -->
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">What Gutenberg Blocks Can Do</h3>
          <div class="grid md:grid-cols-2 gap-6 text-gray-700">
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Rich Text Editing:</strong> Headings, paragraphs, lists, quotes, code blocks</div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Media:</strong> Images, galleries, videos, audio, file downloads</div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Layout:</strong> Columns, groups, rows, spacers, separators</div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Design:</strong> Buttons, cover blocks, media + text combinations</div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Embeds:</strong> YouTube, Vimeo, Twitter, Instagram, Spotify, and more</div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 mt-1">✓</span>
              <div><strong>Custom Blocks:</strong> Add ACF blocks or third-party block plugins</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section (from first page) -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p class="text-xl text-gray-600">Recent projects we're proud of</p>
        </div>

        <div class="space-y-24">
          <!-- Project 1 - CLRI -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-400">
                  <span class="text-6xl">🏥</span>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">CLRI</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                The Ontario CLRI helps the province's 600+ LTC homes to enhance the quality of life and care for residents. The Program educates and trains the current and future LTC workforce.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">Healthcare</span>
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">WordPress</span>
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">Custom Design</span>
              </div>
            </div>
          </div>

          <!-- Project 2 - Workplace Medical -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Workplace Medical</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Workplace Medical provides a suite of occupational health services to clients across Canada. From prevention and response to return-to-work services.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">Medical</span>
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">Responsive</span>
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">UX Design</span>
              </div>
            </div>
            <div>
              <div class="aspect-video bg-gradient-to-br from-red-50 to-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-400">
                  <span class="text-6xl">🏢</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 3 - Brainrider -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <div class="aspect-video bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-400">
                  <span class="text-6xl">🎨</span>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Brainrider</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Brainrider is a people-first marketing and creative agency. They help ambitious marketing teams do more by filling capacity and capability gaps with kind, creative people.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">Marketing</span>
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">Branding</span>
                <span class="px-4 py-2 bg-[#5956E9]/10 text-[#5956E9] rounded-full text-sm font-semibold">Web Design</span>
              </div>
            </div>
          </div>

          <!-- Project 4 - HCRA -->
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">HCRA</h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                The Home Construction Regulatory Authority licenses and regulates the people and companies who build and sell new homes in Ontario, protecting consumers with educational resources.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">Government</span>
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">Accessibility</span>
                <span class="px-4 py-2 bg-[#D74E3B]/10 text-[#D74E3B] rounded-full text-sm font-semibold">Compliance</span>
              </div>
            </div>
            <div>
              <div class="aspect-video bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div class="w-full h-full flex items-center justify-center text-gray-400">
                  <span class="text-6xl">🏗️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Projects Button -->
        <div class="text-center mt-16">
          <a
            href="/work"
            class="inline-block bg-[#5956E9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4236C2] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section (from first page) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600">Don't just take our word for it</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div class="mb-6">
              <svg class="w-10 h-10 text-[#5956E9]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6 italic">"{{ testimonial.quote }}"</p>
            <div class="border-t pt-4">
              <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              <p class="text-sm text-gray-400">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section (keep the blue/purple gradient from second page) -->
    <section class="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">Best of Both Worlds</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the performance and flexibility of Nuxt with the content editing power of WordPress Gutenberg
        </p>
        <a
          href="/wp/contact"
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
        >
          Learn More About This Setup
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// Content taken/merged from both pages
const hero = {
  headline: 'Building Digital Experiences That Matter',
  subtext:
    "We're Kobayashi + Zeitguys, a design and marketing agency crafting strategic, creative solutions.",
}

const about = {
  content:
    'We partner with businesses to create digital solutions that drive results. From concept to launch, we bring technical expertise and creative vision to every project.',
}

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Custom WordPress sites, headless CMS solutions, and modern web applications built with cutting-edge technologies.',
  },
  {
    icon: '🎨',
    title: 'Design',
    description:
      'UI/UX design, branding, and visual identity that connects with your audience and elevates your brand.',
  },
  {
    icon: '📊',
    title: 'Strategy',
    description:
      'Digital planning, technical consulting, and optimization to help your business grow online.',
  },
]

const testimonials = [
  {
    quote:
      'The team worked well and resolved all of our weird issues in a very timely way. We really appreciated their knowledge and abilities.',
    name: 'Adrienne Wong',
    role: 'Co-creator and Producer',
    company: 'Festival of Live Digital Art',
  },
  {
    quote:
      "They took our dated, static, cumbersome website and gave us a user-friendly, contemporary site that we're very proud of.",
    name: 'Karen Devine',
    role: 'Associate Director of Marketing',
    company: 'Toronto Public Library Foundation',
  },
  {
    quote:
      'This team was very professional, patient, and understanding of our needs. What makes them a cut above the rest is their creativity and attention to detail.',
    name: 'Dr. Samir Gupta',
    role: 'Associate Scientist',
    company: "St. Michael's Hospital",
  },
]

useHead({
  title: 'Kobayashi + Zeitguys — Web Development Studio (Hybrid WP + Nuxt)',
  meta: [
    {
      name: 'description',
      content:
        'A hybrid approach combining custom Nuxt components with WordPress Gutenberg blocks for the best of both worlds.',
    },
  ],
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s both;
}
</style>
