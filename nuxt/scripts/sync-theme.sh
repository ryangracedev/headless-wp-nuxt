#!/bin/bash

echo "🎨 Starting theme sync..."

# Step 1: Your plugin already syncs theme.json
echo "✅ theme.json synced by WordPress plugin"

# Step 2: Generate tailwind.config.js (your existing script)
echo "⚙️  Generating tailwind.config.js..."
node scripts/generate-tailwind-config.js

# Step 3: Generate wordpress-blocks.css (NEW!)
echo "⚙️  Generating wordpress-blocks.css..."
npm run generate:wp-blocks

echo "✅ Theme sync complete!"
echo ""
echo "Updated files:"
echo "  - tailwind.config.js"
echo "  - assets/css/wordpress-blocks.css"
echo ""
echo "Restart your dev server to see changes."