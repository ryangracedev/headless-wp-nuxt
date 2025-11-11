# --- deps ---
FROM node:22-alpine AS deps
WORKDIR /app
# copy any lockfile you might have
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# install depending on what's present
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# --- build ---
FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NITRO_PRESET=node
RUN npm run build

# --- runtime ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]