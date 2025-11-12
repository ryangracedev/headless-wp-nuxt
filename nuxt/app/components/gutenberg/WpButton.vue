<template>
  <div :class="wrapperClasses">
    <a
      v-if="buttonData.url"
      :href="buttonData.url"
      :class="buttonClasses"
      :target="buttonData.target"
    >
      {{ buttonData.text }}
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()

// Parse button data from innerHTML
const buttonData = computed(() => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(props.innerHTML, 'text/html')
  const link = doc.querySelector('a')

  return {
    url: link?.getAttribute('href') || '',
    text: link?.textContent || 'Button',
    target: link?.getAttribute('target') || '_self'
  }
})

const wrapperClasses = computed(() => {
  const alignment = props.attributes?.align
  if (alignment === 'center') return 'text-center mb-6'
  if (alignment === 'right') return 'text-right mb-6'
  return 'mb-6'
})

const buttonClasses = computed(() => {
  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-semibold transition-colors'

  // Color styles - default to blue
  const colorClasses = 'bg-blue-600 text-white hover:bg-blue-700'

  return `${baseClasses} ${colorClasses}`.trim()
})
</script>
