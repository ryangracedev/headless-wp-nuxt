<template>
  <div class="gutenberg-content">
    <template v-for="(block, index) in parsedBlocks" :key="`block-${index}`">
      <component
        :is="getBlockComponent(block.name)"
        v-bind="getBlockProps(block)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { GutenbergBlock } from '~/utils/blockParser'

const props = defineProps<{
  content: string
}>()

// Parse the WordPress content into blocks
const parsedBlocks = computed(() => {
  return parseBlocks(props.content)
})

// Map block names to Vue components
const blockComponentMap: Record<string, any> = {
  'core/paragraph': resolveComponent('WpParagraph'),
  'core/heading': resolveComponent('WpHeading'),
  'core/image': resolveComponent('WpImage'),
  'core/list': resolveComponent('WpList'),
  'core/quote': resolveComponent('WpQuote'),
  'core/button': resolveComponent('WpButton'),
  'core/buttons': resolveComponent('WpButton'), // Buttons block often contains button
  'core/spacer': resolveComponent('WpSpacer'),
}

/**
 * Get the Vue component for a given block name
 */
function getBlockComponent(blockName: string) {
  const blockType = getBlockType(blockName)

  // Try exact match first
  if (blockComponentMap[blockName]) {
    return blockComponentMap[blockName]
  }

  // Try without namespace
  const coreBlockName = `core/${blockType}`
  if (blockComponentMap[coreBlockName]) {
    return blockComponentMap[coreBlockName]
  }

  // Fallback to paragraph for unknown blocks
  console.warn(`Unknown block type: ${blockName}, rendering as paragraph`)
  return blockComponentMap['core/paragraph']
}

/**
 * Get props to pass to the block component
 */
function getBlockProps(block: GutenbergBlock) {
  return {
    innerHTML: block.innerHTML,
    attributes: block.attributes,
    innerBlocks: block.innerBlocks
  }
}
</script>

<style scoped>
.gutenberg-content {
  @apply max-w-none;
}

/* Ensure proper spacing and typography for WordPress content */
.gutenberg-content :deep(a) {
  @apply text-blue-600 hover:text-blue-800 underline;
}

.gutenberg-content :deep(strong) {
  @apply font-bold;
}

.gutenberg-content :deep(em) {
  @apply italic;
}

.gutenberg-content :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.gutenberg-content :deep(pre) {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6;
}

.gutenberg-content :deep(hr) {
  @apply border-gray-300 my-8;
}
</style>
