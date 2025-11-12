// utils/blockParser.ts

/**
 * Block interface representing a parsed Gutenberg block
 */
export interface GutenbergBlock {
  name: string // e.g., 'core/paragraph', 'core/heading'
  attributes: Record<string, any>
  innerHTML: string
  innerBlocks: GutenbergBlock[]
}

/**
 * Parse WordPress Gutenberg block comments and content
 * Handles the <!-- wp:blockType --> format
 */
export function parseBlocks(content: string): GutenbergBlock[] {
  if (!content) return []

  const blocks: GutenbergBlock[] = []

  // Regular expression to match block comments
  // Matches: <!-- wp:namespace/blockname {attributes} -->
  const blockPattern = /<!--\s+wp:([a-z0-9-]+\/[a-z0-9-]+)(\s+({[^>]*}))?\s+(?:\/)?-->/gi

  // Split content while preserving the block markers
  const parts = content.split(/(<!--\s+wp:[^>]+-->|<!--\s+\/wp:[^>]+-->)/gi)

  let currentBlock: Partial<GutenbergBlock> | null = null
  let blockContent = ''

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim()

    if (!part) continue

    // Check if this is an opening block comment
    if (part.startsWith('<!-- wp:')) {
      // If we have a previous block, save it
      if (currentBlock) {
        currentBlock.innerHTML = blockContent.trim()
        blocks.push(currentBlock as GutenbergBlock)
      }

      // Parse the new block
      const match = part.match(/<!--\s+wp:([a-z0-9-]+\/[a-z0-9-]+)(\s+({.*}))?\s+(?:\/)?-->/i)

      if (match) {
        const blockName = match[1]
        let attributes = {}

        // Try to parse attributes if they exist
        if (match[3]) {
          try {
            attributes = JSON.parse(match[3])
          } catch (e) {
            console.warn(`Failed to parse attributes for block ${blockName}:`, match[3])
          }
        }

        currentBlock = {
          name: blockName,
          attributes,
          innerHTML: '',
          innerBlocks: []
        }
        blockContent = ''
      }
    }
    // Check if this is a closing block comment
    else if (part.startsWith('<!-- /wp:')) {
      if (currentBlock) {
        currentBlock.innerHTML = blockContent.trim()
        blocks.push(currentBlock as GutenbergBlock)
        currentBlock = null
        blockContent = ''
      }
    }
    // This is content between block markers
    else {
      if (currentBlock) {
        blockContent += part
      } else {
        // Content without block markers - treat as paragraph
        if (part.trim()) {
          blocks.push({
            name: 'core/paragraph',
            attributes: {},
            innerHTML: part.trim(),
            innerBlocks: []
          })
        }
      }
    }
  }

  // Handle any remaining block
  if (currentBlock) {
    currentBlock.innerHTML = blockContent.trim()
    blocks.push(currentBlock as GutenbergBlock)
  }

  return blocks
}

/**
 * Extract plain text from HTML content
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

/**
 * Get the short name of a block (e.g., 'core/heading' -> 'heading')
 */
export function getBlockType(blockName: string): string {
  const parts = blockName.split('/')
  return parts[parts.length - 1]
}

/**
 * Check if a block is a core WordPress block
 */
export function isCoreBlock(blockName: string): boolean {
  return blockName.startsWith('core/')
}

/**
 * Parse heading level from heading block HTML
 */
export function parseHeadingLevel(html: string): number {
  const match = html.match(/<h([1-6])/i)
  return match ? parseInt(match[1]) : 2
}

/**
 * Extract alignment class from block attributes
 */
export function getAlignment(attributes: Record<string, any>): string {
  const align = attributes.align || attributes.textAlign
  if (!align) return ''

  const alignmentMap: Record<string, string> = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
    'justify': 'text-justify'
  }

  return alignmentMap[align] || ''
}
