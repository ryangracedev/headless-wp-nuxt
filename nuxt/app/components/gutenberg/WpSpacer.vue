<template>
  <div :style="spacerStyle" />
</template>

<script setup lang="ts">
const props = defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()

const spacerStyle = computed(() => {
  const height = props.attributes?.height || 50
  return {
    height: typeof height === 'number' ? `${height}px` : height
  }
})
</script>
