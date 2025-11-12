# Gutenberg Block Renderer

This project demonstrates a **hybrid approach** to building with WordPress and Nuxt, where:

- **Some pages** are fully custom-built in Nuxt with Vue components
- **Other pages** fetch content from WordPress and render Gutenberg blocks

## The Hybrid Approach

### Pages Built with Nuxt (Developer-Controlled)
- **Homepage** (`/`) - Fully custom Vue components with Tailwind styling
- Complete control over layout, interactions, and performance
- Example: `app/pages/index.vue`

### Pages Powered by WordPress (Content Team-Controlled)
- **About Page** (`/about`) - Content managed in WordPress Gutenberg editor
- Non-technical editors can update content without code changes
- Example: `app/pages/about.vue`

## How It Works

### 1. Content Creation in WordPress
Content editors use the familiar Gutenberg block editor to create pages:
- Headings
- Paragraphs
- Images
- Lists
- Quotes
- Buttons
- And more...

### 2. Content Storage
WordPress stores the blocks in HTML format with special block comments:
```html
<!-- wp:heading {"level":2} -->
<h2>About Our Company</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We build amazing digital experiences...</p>
<!-- /wp:paragraph -->
```

### 3. Content Fetching
Nuxt fetches the page content via the WordPress REST API:
```typescript
const { getPageBySlug } = useWordPress()
const { data } = await getPageBySlug('about')
```

### 4. Block Parsing
The `blockParser.ts` utility parses the HTML and identifies each block:
```typescript
const blocks = parseBlocks(data.content.rendered)
// Returns: [
//   { name: 'core/heading', innerHTML: '<h2>...</h2>', attributes: {...} },
//   { name: 'core/paragraph', innerHTML: '<p>...</p>', attributes: {...} }
// ]
```

### 5. Component Rendering
The `BlockRenderer` component maps each block type to a Vue component:
- `core/heading` → `WpHeading.vue`
- `core/paragraph` → `WpParagraph.vue`
- `core/image` → `WpImage.vue`
- etc.

Each component applies Tailwind styling that matches your design system.

## Architecture

```
app/
├── components/
│   └── gutenberg/
│       ├── BlockRenderer.vue      # Main renderer component
│       ├── WpHeading.vue         # Heading block component
│       ├── WpParagraph.vue       # Paragraph block component
│       ├── WpImage.vue           # Image block component
│       ├── WpList.vue            # List block component
│       ├── WpQuote.vue           # Quote block component
│       ├── WpButton.vue          # Button block component
│       └── WpSpacer.vue          # Spacer block component
├── utils/
│   └── blockParser.ts            # Block parsing utilities
├── composables/
│   └── useWordPress.ts           # WordPress API composable
└── pages/
    ├── index.vue                 # Nuxt native page
    └── about.vue                 # WordPress-powered page
```

## Usage

### Creating a WordPress-Powered Page

1. **Create content in WordPress:**
   - Go to `http://localhost:8080/wp-admin`
   - Create a new page with your desired slug (e.g., "about")
   - Add content using Gutenberg blocks
   - Publish the page

2. **Create a Nuxt page:**
```vue
<template>
  <div>
    <BlockRenderer :content="data?.content?.rendered || ''" />
  </div>
</template>

<script setup>
const { getPageBySlug } = useWordPress()
const { data } = await getPageBySlug('your-page-slug')
</script>
```

3. **Add ISR caching (optional but recommended):**
```typescript
// nuxt.config.ts
routeRules: {
  '/your-page': { isr: { expiration: 120 }}
}
```

## Supported Gutenberg Blocks

Currently supported blocks:
- ✅ Heading (h1-h6)
- ✅ Paragraph (with drop cap support)
- ✅ Image (with caption)
- ✅ List (ordered & unordered)
- ✅ Quote
- ✅ Button
- ✅ Spacer

### Adding New Block Support

To add support for a new block type:

1. **Create a Vue component:**
```vue
<!-- components/gutenberg/WpYourBlock.vue -->
<template>
  <div v-html="innerHTML" />
</template>

<script setup lang="ts">
defineProps<{
  innerHTML: string
  attributes?: Record<string, any>
}>()
</script>
```

2. **Register it in BlockRenderer:**
```vue
<!-- components/gutenberg/BlockRenderer.vue -->
const blockComponentMap = {
  // ... existing blocks
  'core/your-block': resolveComponent('WpYourBlock'),
}
```

## Benefits of This Approach

### For Developers
- ✅ Full control over styling and behavior
- ✅ TypeScript support
- ✅ Component reusability
- ✅ Modern dev experience with Nuxt
- ✅ Can mix WordPress content with custom Nuxt pages

### For Content Editors
- ✅ Familiar Gutenberg interface
- ✅ No code changes needed for content updates
- ✅ Preview before publishing
- ✅ All WordPress editing features available

### For Performance
- ✅ Static generation with ISR
- ✅ Automatic caching
- ✅ Optimized images
- ✅ Fast page loads

## Configuration

### WordPress API Endpoint
Set in `nuxt.config.ts`:
```typescript
runtimeConfig: {
  public: {
    wpApiBase: 'http://headless-wp.local/wp-json/wp/v2'
  }
}
```

### ISR (Incremental Static Regeneration)
Configure cache duration per route:
```typescript
routeRules: {
  '/about': { isr: { expiration: 120 }} // 2 minutes
}
```

## Demo

Visit the demo site to see both approaches:
- **Home** (`/`) - Custom Nuxt page (developer built)
- **About** (`/about`) - WordPress Gutenberg page (content team managed)

The navigation bar indicates which approach each page uses.
