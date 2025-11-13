import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Converts WordPress theme.json to Tailwind configuration
 * Usage: node scripts/syncTheme.js
 * 
 * This script reads your WordPress theme.json and generates
 * a Tailwind config with all the design tokens (colors, spacing, typography)
 */

// Paths for your project structure:
// Project root/
//   ├── shared/theme.json          ← WordPress exports here
//   └── nuxt/
//       ├── scripts/syncTheme.js   ← This script
//       └── app/tailwind.config.js ← Output file

const themeJsonPath = path.join(__dirname, '../../shared/theme.json')
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js')

function convertThemeToTailwind(themeJsonPath) {
  if (!fs.existsSync(themeJsonPath)) {
    console.error(`❌ theme.json not found at: ${themeJsonPath}`)
    console.log('\n💡 Troubleshooting steps:')
    console.log('   1. Check if shared/ folder exists at project root')
    console.log('   2. Activate WordPress plugin "Theme JSON Auto Export"')
    console.log('   3. Or manually copy theme.json:')
    console.log('      docker cp <container>:/var/www/html/wp-content/themes/zeitpress/theme.json ./shared/theme.json')
    process.exit(1)
  }

  const theme = JSON.parse(fs.readFileSync(themeJsonPath, 'utf-8'))
  
  // Extract color groups
  const customColors = theme.settings?.custom?.colors || {}
  const colorGroups = {}
  Object.entries(customColors).forEach(([key, value]) => {
    const match = key.match(/^(\w+)-(\d+)$/)
    if (match) {
      const [, name, shade] = match
      if (!colorGroups[name]) colorGroups[name] = {}
      colorGroups[name][shade] = value
    }
  })
  
  // Convert font sizes with fluid typography
  const fontSizes = {}
  theme.settings?.typography?.fontSizes?.forEach(size => {
    if (size.fluid) {
      fontSizes[size.slug] = [
        `clamp(${size.fluid.min}, ${size.fluid.min} + ((1vw - 0.2rem) * 1.633), ${size.fluid.max})`,
        { lineHeight: '1.4', fontWeight: '600' }
      ]
    } else {
      fontSizes[size.slug] = size.size
    }
  })
  
  // Convert spacing scale
  const spacing = {}
  const spacingSizes = theme.settings?.spacing?.spacingSizes || []
  spacingSizes.forEach(size => {
    spacing[size.slug] = size.size
  })
  
  // Extract font families
  const fontFamilies = {}
  theme.settings?.typography?.fontFamilies?.forEach(font => {
    fontFamilies[font.slug] = font.fontFamily.split(',')
  })
  
  // Extract border radius - convert WP CSS variables to actual values
  const borderRadius = {}
  const customBorder = theme.settings?.custom?.border?.radius || {}
  
  Object.entries(customBorder).forEach(([key, value]) => {
    // Convert var(--wp--preset--spacing--1) to actual spacing value
    const varMatch = value.match(/var\(--wp--preset--spacing--(\d+)\)/)
    if (varMatch) {
      const spacingKey = varMatch[1]
      const spacingValue = spacingSizes.find(s => s.slug === spacingKey)?.size
      if (spacingValue) {
        borderRadius[key] = spacingValue
      }
    } else {
      borderRadius[key] = value
    }
  })
  
  return {
    colors: colorGroups,
    fontSize: fontSizes,
    spacing: spacing,
    fontFamily: fontFamilies,
    borderRadius: borderRadius,
    maxWidth: {
      'content': theme.settings?.layout?.contentSize || '960px',
      'wide': theme.settings?.layout?.wideSize || '1300px'
    }
  }
}

function generateTailwindConfig(themeConfig) {
  // Helper function to format values
  const formatValue = (value, indent = 0) => {
    const spaces = ' '.repeat(indent)
    
    if (Array.isArray(value)) {
      // Check if it's a font size array with config object
      if (value.length === 2 && typeof value[1] === 'object') {
        const [size, config] = value
        const configStr = JSON.stringify(config, null, indent + 6)
          .replace(/"/g, "'")
          .split('\n')
          .map((line, i) => i === 0 ? line : ' '.repeat(indent + 6) + line)
          .join('\n')
        return `[\n${spaces}      '${size}',\n${spaces}      ${configStr}\n${spaces}]`
      }
      // Regular array (like font families)
      return '[\n' + value.map(v => `${spaces}      '${v}'`).join(',\n') + `\n${spaces}]`
    }
    
    if (typeof value === 'object' && value !== null) {
      return formatObject(value, indent + 6)
    }
    
    return `'${value}'`
  }
  
  // Helper function to format objects with proper key quoting
  const formatObject = (obj, indent = 6) => {
    const spaces = ' '.repeat(indent)
    const entries = Object.entries(obj).map(([key, value]) => {
      // Always quote keys (especially important for hyphenated keys like xx-small, open-sans)
      const quotedKey = `'${key}'`
      const formattedValue = formatValue(value, indent)
      return `${spaces}${quotedKey}: ${formattedValue}`
    })
    return `{\n${entries.join(',\n')}\n${' '.repeat(indent - 6)}}`
  }
  
  const formattedConfig = formatObject(themeConfig, 6)
  
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: ${formattedConfig},
  },
  plugins: [],
}
`
}

// Main execution
try {
  console.log('🔄 Syncing theme.json to Tailwind config...\n')
  
  const themeConfig = convertThemeToTailwind(themeJsonPath)
  const tailwindConfig = generateTailwindConfig(themeConfig)
  
  if (fs.existsSync(tailwindConfigPath)) {
    const backupPath = tailwindConfigPath.replace('.js', '.backup.js')
    fs.copyFileSync(tailwindConfigPath, backupPath)
    console.log('📦 Created backup at:', backupPath)
  }
  
  fs.writeFileSync(tailwindConfigPath, tailwindConfig)
  
  console.log('✅ Successfully synced!\n')
  console.log('📊 Statistics:')
  console.log(`   Colors: ${Object.keys(themeConfig.colors).length} palettes`)
  console.log(`   Font sizes: ${Object.keys(themeConfig.fontSize).length} sizes`)
  console.log(`   Spacing: ${Object.keys(themeConfig.spacing).length} values`)
  console.log(`   Font families: ${Object.keys(themeConfig.fontFamily).length} families`)
  console.log(`   Border radius: ${Object.keys(themeConfig.borderRadius).length} sizes`)
  console.log('\n💡 Next step: Run "npm run generate:wp-blocks" to update WordPress block styles')
  console.log('   Or run "npm run theme:sync" to do both steps at once')
  
} catch (error) {
  console.error('❌ Error syncing theme:', error.message)
  console.error(error.stack)
  process.exit(1)
}