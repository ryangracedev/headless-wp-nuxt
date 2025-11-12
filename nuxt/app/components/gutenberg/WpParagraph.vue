<template>
  <p
    :class="paragraphClasses"
    v-html="innerHTML"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()

const paragraphClasses = computed(() => {
  const baseClasses = 'text-gray-700 leading-relaxed mb-6'
  const alignment = getAlignment(props.attributes || {})

  // Handle drop cap if specified
  const hasDropCap = props.attributes?.dropCap
  const dropCapClass = hasDropCap ? 'first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none' : ''

  return `${baseClasses} ${alignment} ${dropCapClass}`.trim()
})
</script>
