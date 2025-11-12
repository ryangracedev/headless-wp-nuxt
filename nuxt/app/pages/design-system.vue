<template>
  <div class="min-h-screen bg-neutral-100 py-12">
    <div class="max-w-wide mx-auto px-6">
      <h1 class="text-heading-1 text-neutral-700 mb-8">Design System</h1>
      
      <!-- Colors -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Color Palette</h2>
        
        <div class="mb-8">
          <h3 class="text-heading-4 text-neutral-600 mb-4">Primary (Red)</h3>
          <div class="grid grid-cols-6 gap-4">
            <div>
              <div class="bg-primary-100 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">100</p>
              <code class="text-xs text-neutral-500">bg-primary-100</code>
            </div>
            <div>
              <div class="bg-primary-200 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">200</p>
              <code class="text-xs text-neutral-500">bg-primary-200</code>
            </div>
            <div>
              <div class="bg-primary-300 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">300</p>
              <code class="text-xs text-neutral-500">bg-primary-300</code>
            </div>
            <div>
              <div class="bg-primary-400 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">400</p>
              <code class="text-xs text-neutral-500">bg-primary-400</code>
            </div>
            <div>
              <div class="bg-primary-500 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">500</p>
              <code class="text-xs text-neutral-500">bg-primary-500</code>
            </div>
            <div>
              <div class="bg-primary-600 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">600</p>
              <code class="text-xs text-neutral-500">bg-primary-600</code>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-heading-4 text-neutral-600 mb-4">Secondary (Purple)</h3>
          <div class="grid grid-cols-6 gap-4">
            <div>
              <div class="bg-secondary-100 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">100</p>
              <code class="text-xs text-neutral-500">bg-secondary-100</code>
            </div>
            <div>
              <div class="bg-secondary-200 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">200</p>
              <code class="text-xs text-neutral-500">bg-secondary-200</code>
            </div>
            <div>
              <div class="bg-secondary-300 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">300</p>
              <code class="text-xs text-neutral-500">bg-secondary-300</code>
            </div>
            <div>
              <div class="bg-secondary-400 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">400</p>
              <code class="text-xs text-neutral-500">bg-secondary-400</code>
            </div>
            <div>
              <div class="bg-secondary-500 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">500</p>
              <code class="text-xs text-neutral-500">bg-secondary-500</code>
            </div>
            <div>
              <div class="bg-secondary-600 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">600</p>
              <code class="text-xs text-neutral-500">bg-secondary-600</code>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-heading-4 text-neutral-600 mb-4">Neutral</h3>
          <div class="grid grid-cols-8 gap-4">
            <div>
              <div class="bg-neutral-0 h-24 rounded-medium mb-2 border border-neutral-200"></div>
              <p class="text-sm text-neutral-600">0</p>
              <code class="text-xs text-neutral-500">neutral-0</code>
            </div>
            <div>
              <div class="bg-neutral-100 h-24 rounded-medium mb-2 border border-neutral-200"></div>
              <p class="text-sm text-neutral-600">100</p>
              <code class="text-xs text-neutral-500">neutral-100</code>
            </div>
            <div>
              <div class="bg-neutral-200 h-24 rounded-medium mb-2 border border-neutral-200"></div>
              <p class="text-sm text-neutral-600">200</p>
              <code class="text-xs text-neutral-500">neutral-200</code>
            </div>
            <div>
              <div class="bg-neutral-300 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">300</p>
              <code class="text-xs text-neutral-500">neutral-300</code>
            </div>
            <div>
              <div class="bg-neutral-400 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">400</p>
              <code class="text-xs text-neutral-500">neutral-400</code>
            </div>
            <div>
              <div class="bg-neutral-500 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600">500</p>
              <code class="text-xs text-neutral-500">neutral-500</code>
            </div>
            <div>
              <div class="bg-neutral-600 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-neutral-600 text-white">600</p>
              <code class="text-xs text-neutral-500">neutral-600</code>
            </div>
            <div>
              <div class="bg-neutral-700 h-24 rounded-medium mb-2"></div>
              <p class="text-sm text-white">700</p>
              <code class="text-xs text-neutral-500">neutral-700</code>
            </div>
          </div>
        </div>
      </section>

      <!-- Typography -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Typography</h2>
        
        <div class="space-y-6">
          <div class="border-b border-neutral-200 pb-4">
            <h1 class="text-heading-1 text-neutral-700 mb-2">Heading 1</h1>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-1</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <h2 class="text-heading-2 text-neutral-700 mb-2">Heading 2</h2>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-2</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <h3 class="text-heading-3 text-neutral-700 mb-2">Heading 3</h3>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-3</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <h4 class="text-heading-4 text-neutral-700 mb-2">Heading 4</h4>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-4</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <h5 class="text-heading-5 text-neutral-700 mb-2">Heading 5</h5>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-5</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <h6 class="text-heading-6 text-neutral-700 mb-2">Heading 6</h6>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-heading-6</code>
          </div>
          <div class="border-b border-neutral-200 pb-4">
            <p class="text-base text-neutral-700 mb-2">
              Body text paragraph with <a href="#" class="text-primary-400 hover:underline">a link example</a>. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">text-base</code>
          </div>
        </div>
      </section>

      <!-- Buttons -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Buttons</h2>
        
        <div class="space-y-6">
          <div>
            <button class="bg-primary-400 text-white px-6 py-3 rounded-medium hover:bg-primary-500 transition-all">
              Primary Button
            </button>
            <div class="mt-2">
              <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">bg-primary-400 hover:bg-primary-500</code>
            </div>
          </div>
          <div>
            <button class="bg-secondary-400 text-white px-6 py-3 rounded-medium hover:bg-secondary-500 transition-all">
              Secondary Button
            </button>
            <div class="mt-2">
              <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">bg-secondary-400 hover:bg-secondary-500</code>
            </div>
          </div>
          <div>
            <button class="bg-transparent border-2 border-primary-400 text-primary-400 px-6 py-3 rounded-medium hover:bg-primary-400 hover:text-white transition-all">
              Outline Button
            </button>
            <div class="mt-2">
              <code class="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded">border-primary-400 hover:bg-primary-400</code>
            </div>
          </div>
        </div>
      </section>

      <!-- Spacing -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Spacing Scale</h2>
        <p class="text-neutral-600 mb-6">Consistent spacing values from theme.json</p>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-1 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-1 (4px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-2 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-2 (8px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-3 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-3 (12px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-4 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-4 (16px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-5 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-5 (24px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-6 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-6 (32px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-7 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-7 (40px)</code>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 bg-primary-300"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">spacing-8 (64px)</code>
          </div>
        </div>
      </section>

      <!-- Border Radius -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Border Radius</h2>
        
        <div class="grid grid-cols-3 gap-6">
          <div>
            <div class="bg-primary-400 h-24 rounded-small mb-2"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">rounded-small</code>
          </div>
          <div>
            <div class="bg-secondary-400 h-24 rounded-medium mb-2"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">rounded-medium</code>
          </div>
          <div>
            <div class="bg-primary-300 h-24 rounded-large mb-2"></div>
            <code class="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">rounded-large</code>
          </div>
        </div>
      </section>

      <!-- Max Width -->
      <section class="mb-12 bg-white rounded-large p-8">
        <h2 class="text-heading-2 text-neutral-700 mb-6">Content Widths</h2>
        
        <div class="space-y-6">
          <div>
            <div class="max-w-content bg-neutral-200 p-4 rounded-medium">
              <p class="text-neutral-700">Content Width Container (max-w-content)</p>
              <code class="text-xs text-neutral-600">960px max width</code>
            </div>
          </div>
          <div>
            <div class="max-w-wide bg-neutral-200 p-4 rounded-medium">
              <p class="text-neutral-700">Wide Container (max-w-wide)</p>
              <code class="text-xs text-neutral-600">1300px max width</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Design System - Kobayashi + Zeitguys',
  meta: [
    { name: 'description', content: 'Design system reference for our projects' }
  ]
})
</script>