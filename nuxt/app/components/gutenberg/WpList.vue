<template>
  <component
    :is="listTag"
    :class="listClasses"
    v-html="innerHTML"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()

// Determine if it's ordered or unordered
const listTag = computed(() => {
  return props.innerHTML.trim().startsWith('<ol') ? 'ol' : 'ul'
})

const listClasses = computed(() => {
  const baseClasses = 'mb-6 text-gray-700'
  const typeClasses = listTag.value === 'ol'
    ? 'list-decimal list-inside space-y-2'
    : 'list-disc list-inside space-y-2'

  return `${baseClasses} ${typeClasses}`.trim()
})
</script>

<style scoped>
:deep(li) {
  @apply leading-relaxed;
}

:deep(ol ol),
:deep(ul ul) {
  @apply ml-6 mt-2;
}
</style>
