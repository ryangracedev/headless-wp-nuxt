<template>
  <div class="min-h-screen bg-white">
    <!-- Header with indicator -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span class="font-semibold text-sm sm:text-base">This is a custom Nuxt page with Vue form handling</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-[#5956E9] to-[#4236C2] text-white py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
        <p class="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Have a project in mind? Let's talk about how we can help.
        </p>
      </div>
      
      <!-- Decorative wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 sm:py-16 lg:py-20 -mt-8 sm:-mt-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <!-- Contact Information - 2 columns on large screens -->
          <div class="lg:col-span-2 space-y-6">
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Let's Connect</h2>
              <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                We'd love to hear from you. Drop us a message and we'll respond as soon as possible.
              </p>
            </div>

            <!-- Contact Info Cards - Stacked on mobile, better on larger screens -->
            <div class="space-y-4">
              <a href="mailto:hello@example.com" class="flex items-center gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all group">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-[#5956E9]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5956E9]/20 transition-colors">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-[#5956E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="font-semibold text-gray-900 text-sm sm:text-base mb-0.5">Email</h3>
                  <p class="text-[#5956E9] hover:text-[#4236C2] transition-colors text-sm sm:text-base truncate">
                    hello@example.com
                  </p>
                </div>
              </a>

              <a href="tel:+15551234567" class="flex items-center gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all group">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-[#5956E9]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5956E9]/20 transition-colors">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-[#5956E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="font-semibold text-gray-900 text-sm sm:text-base mb-0.5">Phone</h3>
                  <p class="text-[#5956E9] hover:text-[#4236C2] transition-colors text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-[#5956E9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-[#5956E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="font-semibold text-gray-900 text-sm sm:text-base mb-0.5">Location</h3>
                  <p class="text-gray-600 text-sm sm:text-base">Toronto, ON</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-4">
              <h3 class="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Follow Us</h3>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#5956E9] hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#5956E9] hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#5956E9] hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#5956E9] hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form - 3 columns on large screens -->
          <div class="lg:col-span-3">
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Send us a message</h2>
              <p class="text-sm sm:text-base text-gray-600 mb-6">We'll respond within 24 hours</p>
              
              <!-- Success Message -->
              <div v-if="formStatus === 'success'" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-semibold text-green-900 text-sm sm:text-base">Message sent!</p>
                  <p class="text-xs sm:text-sm text-green-700 mt-1">We'll get back to you soon.</p>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="formStatus === 'error'" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-semibold text-red-900 text-sm sm:text-base">Oops! Something went wrong</p>
                  <p class="text-xs sm:text-sm text-red-700 mt-1">Please try again or email us directly.</p>
                </div>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                <!-- Name & Email - Side by side on larger screens -->
                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5956E9] focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                      :disabled="formStatus === 'submitting'"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5956E9] focus:border-transparent transition-all outline-none"
                      placeholder="john@example.com"
                      :disabled="formStatus === 'submitting'"
                    />
                  </div>
                </div>

                <!-- Phone & Subject - Side by side on larger screens -->
                <div class="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">
                      Phone <span class="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5956E9] focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 123-4567"
                      :disabled="formStatus === 'submitting'"
                    />
                  </div>

                  <div>
                    <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                      Subject <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5956E9] focus:border-transparent transition-all outline-none"
                      :disabled="formStatus === 'submitting'"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">New Project</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Message - Full width -->
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5956E9] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                    :disabled="formStatus === 'submitting'"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="formStatus === 'submitting'"
                  class="w-full bg-[#5956E9] text-white px-6 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#4236C2] transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <span v-if="formStatus !== 'submitting'">Send Message</span>
                  <span v-else class="flex items-center gap-3">
                    <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Prefer Email?</h2>
        <p class="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
          Reach us at <a href="mailto:hello@example.com" class="text-[#5956E9] hover:text-[#4236C2] font-semibold">hello@example.com</a>
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="/"
            class="inline-block bg-white border-2 border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:border-gray-300 transition-colors text-sm sm:text-base"
          >
            ← Back to Home
          </a>
          <a
            href="/wp/about"
            class="inline-block bg-[#5956E9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4236C2] transition-colors text-sm sm:text-base"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const formStatus = ref(null)

const handleSubmit = async () => {
  formStatus.value = 'submitting'
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', form)
    formStatus.value = 'success'
    
    setTimeout(() => {
      form.name = ''
      form.email = ''
      form.phone = ''
      form.subject = ''
      form.message = ''
      formStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    formStatus.value = 'error'
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  }
}

useHead({
  title: 'Contact Us - Kobayashi + Zeitguys',
  meta: [
    { name: 'description', content: 'Get in touch with us. Let\'s discuss your project.' }
  ]
})
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>