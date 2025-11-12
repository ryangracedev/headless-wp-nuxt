<template>
  <component
    :is="headingTag"
    :class="headingClasses"
    v-html="innerHTML"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
  level?: number
}>()

// Determine heading level from innerHTML or props
const headingLevel = computed(() => {
  if (props.level) return props.level
  return parseHeadingLevel(props.innerHTML)
})

const headingTag = computed(() => `h${headingLevel.value}`)

// Tailwind classes based on heading level
const headingClasses = computed(() => {
  const baseClasses = 'font-bold text-gray-900 mb-4'
  const alignment = getAlignment(props.attributes || {})

  const sizeClasses = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl'
  }

  const sizeClass = sizeClasses[headingLevel.value as keyof typeof sizeClasses] || sizeClasses[2]

  return `${baseClasses} ${sizeClass} ${alignment}`.trim()
})
</script>
