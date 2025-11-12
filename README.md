# Headless WordPress + Nuxt Demo Site

A demonstration project showcasing a **hybrid headless WordPress architecture** using Nuxt 3, WordPress, and Docker. This project demonstrates how developers can build custom pages with Nuxt while empowering content editors to manage other pages using the familiar WordPress Gutenberg interface.

## 🎯 Project Purpose

This demo site showcases the flexibility of headless WordPress by implementing two distinct content management approaches:

1. **Developer-Controlled Pages** - Built with Nuxt and Vue components for maximum customization
2. **Editor-Managed Pages** - Content managed in WordPress Gutenberg, rendered beautifully in Nuxt

This hybrid approach provides:
- **For Developers**: Full control over styling, performance, and functionality using modern frameworks
- **For Content Editors**: Familiar WordPress Gutenberg interface with no code required
- **For Businesses**: The best of both worlds - flexibility and ease of use

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Nginx Proxy                       │
│              (localhost:8080)                       │
└────────────┬─────────────────────┬──────────────────┘
             │                     │
    ┌────────▼─────────┐  ┌────────▼─────────┐
    │   Nuxt Frontend  │  │    WordPress     │
    │   (Port 3000)    │  │   (Port 80)      │
    │                  │  │                  │
    │  - Vue Pages     │  │  - Gutenberg     │
    │  - Components    │  │  - REST API      │
    │  - ISR Caching   │◄─┤  - GraphQL       │
    └──────────────────┘  │  - Admin Panel   │
                          └─────────┬─────────┘
                                    │
                          ┌─────────▼─────────┐
                          │   MariaDB         │
                          │   Database        │
                          └───────────────────┘
```

### How It Works

1. **Nginx** acts as a reverse proxy routing requests:
   - `/wp-admin`, `/wp-json`, `/graphql` → WordPress
   - Everything else → Nuxt

2. **Nuxt** serves the frontend:
   - Custom pages built with Vue components
   - Fetches content from WordPress via REST API
   - Renders Gutenberg blocks as styled Vue components
   - ISR (Incremental Static Regeneration) for caching

3. **WordPress** serves as the headless CMS:
   - Content editing via Gutenberg
   - REST API and GraphQL endpoints
   - Media management
   - User authentication

## 🚀 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd headless-wp-nuxt
   ```

2. **Start the services**
   ```bash
   docker compose up
   ```

   This will start:
   - MariaDB database
   - WordPress (with health checks)
   - Nuxt development server
   - Nginx reverse proxy

3. **Wait for services to be healthy** (first run takes 1-2 minutes)
   ```bash
   docker compose ps
   ```
   All services should show "healthy" status.

4. **Access the site**
   - **Frontend**: http://localhost:8080
   - **WordPress Admin**: http://localhost:8080/wp-admin
   - **GraphQL Endpoint**: http://localhost:8080/graphql

### Initial WordPress Setup

On first run, you'll need to complete the WordPress installation:

1. Visit http://localhost:8080/wp-admin
2. Complete the 5-minute installation:
   - Site Title: Your choice
   - Username: Your choice
   - Password: Your choice (save it!)
   - Email: Your email
3. Click "Install WordPress"

### Recommended WordPress Plugins

To fully utilize the headless setup, install these plugins:

1. **WPGraphQL** - GraphQL API for WordPress
   ```bash
   # Install via WordPress admin: Plugins → Add New → Search "WPGraphQL"
   ```

2. **Advanced Custom Fields (ACF)** - For custom content fields (optional)
   ```bash
   # Install via WordPress admin: Plugins → Add New → Search "ACF"
   ```

## 📁 Project Structure

```
headless-wp-nuxt/
├── docker-compose.yml          # Docker services configuration
├── nginx/
│   └── nginx.conf             # Reverse proxy configuration
├── nuxt/
│   ├── app/
│   │   ├── components/
│   │   │   └── gutenberg/     # WordPress block components
│   │   │       ├── BlockRenderer.vue
│   │   │       ├── WpHeading.vue
│   │   │       ├── WpParagraph.vue
│   │   │       ├── WpImage.vue
│   │   │       ├── WpList.vue
│   │   │       ├── WpQuote.vue
│   │   │       ├── WpButton.vue
│   │   │       └── WpSpacer.vue
│   │   ├── pages/
│   │   │   ├── index.vue      # Custom Nuxt homepage
│   │   │   └── about.vue      # WordPress-powered page
│   │   ├── utils/
│   │   │   └── blockParser.ts # Gutenberg block parser
│   │   ├── composables/
│   │   │   └── useWordPress.ts # WordPress API utilities
│   │   ├── assets/
│   │   │   └── css/
│   │   │       └── main.css   # Global styles
│   │   └── app.vue            # Root component
│   ├── nuxt.config.ts         # Nuxt configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── package.json           # Node dependencies
│   └── GUTENBERG_RENDERER.md  # Block renderer documentation
└── README.md                  # This file
```

## 🎨 Creating Content

### Option 1: Custom Nuxt Pages (Developer)

Create fully custom pages using Vue and Nuxt:

```vue
<!-- nuxt/app/pages/your-page.vue -->
<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Custom Page</h1>
    <p>Built with Vue components and Tailwind CSS</p>
  </div>
</template>

<script setup>
// Your custom logic here
</script>
```

**Best for**: Landing pages, dashboards, interactive features, anything requiring custom JavaScript.

### Option 2: WordPress Gutenberg Pages (Editor)

Create pages managed by content editors in WordPress:

1. **Create the page in WordPress**:
   - Go to http://localhost:8080/wp-admin
   - Pages → Add New
   - Set the slug (e.g., "about")
   - Add content using Gutenberg blocks
   - Publish

2. **Create a Nuxt page to display it**:
   ```vue
   <!-- nuxt/app/pages/your-slug.vue -->
   <template>
     <div>
       <BlockRenderer :content="data?.content?.rendered || ''" />
     </div>
   </template>

   <script setup>
   const { getPageBySlug } = useWordPress()
   const { data } = await getPageBySlug('your-slug')
   </script>
   ```

3. **Add ISR caching** (optional):
   ```typescript
   // nuxt/nuxt.config.ts
   routeRules: {
     '/your-slug': { isr: { expiration: 120 }}
   }
   ```

**Best for**: Blog posts, articles, content-heavy pages, frequently updated content.

## 🔧 Development

### Working with Nuxt

The Nuxt development server runs with hot-reload enabled:

```bash
# Logs from Nuxt service
docker compose logs -f nuxt

# Access Nuxt container
docker compose exec nuxt sh

# Install new npm packages
docker compose exec nuxt npm install <package-name>
```

### Working with WordPress

WordPress runs in a standard Apache container:

```bash
# Access WordPress container
docker compose exec wordpress bash

# Access WordPress CLI
docker compose exec wordpress wp --help

# Install a plugin via CLI
docker compose exec wordpress wp plugin install <plugin-name> --activate
```

### Database Access

```bash
# Access MariaDB
docker compose exec db mysql -u wpuser -pwppass wordpress

# Backup database
docker compose exec db mysqldump -u wpuser -pwppass wordpress > backup.sql

# Restore database
docker compose exec -T db mysql -u wpuser -pwppass wordpress < backup.sql
```

## 🎯 Example Pages

### Homepage (`/`)
**Type**: Custom Nuxt Page
**Location**: `nuxt/app/pages/index.vue`

- Built with custom Vue components
- Static content in the component
- Tailwind CSS styling
- Developer has full control

### About Page (`/about`)
**Type**: WordPress Gutenberg Page
**Location**: `nuxt/app/pages/about.vue`

- Content managed in WordPress admin
- Gutenberg blocks rendered as Vue components
- Non-technical editors can update
- Cached with ISR

## 🧩 Gutenberg Block Renderer

The project includes a complete Gutenberg block rendering system. See [GUTENBERG_RENDERER.md](nuxt/GUTENBERG_RENDERER.md) for detailed documentation.

**Supported Blocks**:
- ✅ Headings (H1-H6)
- ✅ Paragraphs (with drop cap)
- ✅ Images (with captions)
- ✅ Lists (ordered & unordered)
- ✅ Quotes
- ✅ Buttons
- ✅ Spacers

## 🔒 Environment Variables

Create a `.env` file in the project root (optional):

```env
# MariaDB
MARIADB_ROOT_PASSWORD=your_root_password
MARIADB_DATABASE=wordpress
MARIADB_USER=wpuser
MARIADB_PASSWORD=your_wp_password

# WordPress
WORDPRESS_DB_HOST=db:3306
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wpuser
WORDPRESS_DB_PASSWORD=your_wp_password
```

## 🚢 Deployment

### Production Build

```bash
# Build Nuxt for production
docker compose run nuxt npm run build

# The output will be in nuxt/.output/
```

### Hosting Options

**Recommended Stack**:
- **Nuxt**: Vercel, Netlify, or any Node.js hosting
- **WordPress**: Traditional hosting, WordPress.com, or containerized
- **Database**: Managed MySQL/MariaDB service

**Considerations**:
- Configure CORS for WordPress API
- Update API endpoints in `nuxt.config.ts`
- Enable caching and CDN for media
- Use environment variables for configuration

## 🛠️ Troubleshooting

### Services won't start
```bash
# Stop all services
docker compose down

# Remove volumes and start fresh
docker compose down -v
docker compose up
```

### Nuxt can't connect to WordPress
- Ensure WordPress service is healthy: `docker compose ps`
- Check WordPress is accessible: http://localhost:8080/wp-admin
- Verify API endpoint in `nuxt.config.ts` matches your setup

### WordPress admin redirect loop
- Clear browser cookies for localhost
- Check `WP_HOME` and `WP_SITEURL` in `docker-compose.yml`

### Port conflicts
If port 8080 is already in use, edit `docker-compose.yml`:
```yaml
proxy:
  ports:
    - "3001:80"  # Use different port
```

## 📚 Learn More

### Documentation
- [Nuxt Documentation](https://nuxt.com/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [WPGraphQL](https://www.wpgraphql.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Gutenberg Block Editor](https://wordpress.org/gutenberg/)

### Related Projects
- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
- [WordPress](https://wordpress.org/) - Open Source CMS
- [Docker](https://www.docker.com/) - Containerization Platform

## 🤝 Contributing

This is a demo project, but feel free to:
- Fork it for your own projects
- Submit issues for bugs
- Share improvements via pull requests

## 📝 License

This project is provided as-is for demonstration purposes.

## 🎓 What You'll Learn

By exploring this project, you'll understand:
- How to set up a headless WordPress architecture
- How to integrate Nuxt with WordPress APIs
- How to parse and render Gutenberg blocks in Vue
- How to use Docker for local development
- How to implement ISR (Incremental Static Regeneration)
- How to create a hybrid CMS architecture

---

**Built with ❤️ to demonstrate the power of headless WordPress**
