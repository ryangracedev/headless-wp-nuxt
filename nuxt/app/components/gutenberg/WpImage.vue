<template>
  <figure :class="figureClasses">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      :class="imageClasses"
      loading="lazy"
    />
    <figcaption v-if="caption" class="text-sm text-gray-600 text-center mt-2 italic">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()

// Parse image data from innerHTML
const imageData = computed(() => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(props.innerHTML, 'text/html')
  const img = doc.querySelector('img')
  const figcaption = doc.querySelector('figcaption')

  return {
    url: img?.getAttribute('src') || '',
    alt: img?.getAttribute('alt') || '',
    caption: figcaption?.textContent || ''
  }
})

const imageUrl = computed(() => imageData.value.url)
const imageAlt = computed(() => imageData.value.alt)
const caption = computed(() => imageData.value.caption)

// Handle alignment
const alignment = computed(() => {
  const align = props.attributes?.align
  if (align === 'center') return 'mx-auto'
  if (align === 'right') return 'ml-auto'
  if (align === 'left') return 'mr-auto'
  return ''
})

const figureClasses = computed(() => {
  const baseClasses = 'mb-8'
  return `${baseClasses} ${alignment.value}`.trim()
})

const imageClasses = computed(() => {
  const baseClasses = 'rounded-lg shadow-sm'
  const sizeClasses = props.attributes?.sizeSlug === 'full' ? 'w-full' : 'max-w-full h-auto'
  return `${baseClasses} ${sizeClasses}`.trim()
})
</script>
