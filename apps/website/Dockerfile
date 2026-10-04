FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
ARG NEXT_PUBLIC_SITE_URL=http://localhost:5185
ARG NEXT_PUBLIC_CUSTOMER_URL=http://localhost:5183
ARG SEO_ALLOW_INDEXING=false
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL NEXT_PUBLIC_CUSTOMER_URL=$NEXT_PUBLIC_CUSTOMER_URL SEO_ALLOW_INDEXING=$SEO_ALLOW_INDEXING NEXT_TELEMETRY_DISABLED=1
RUN pnpm build:website
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=5185 HOSTNAME=0.0.0.0 NEXT_TELEMETRY_DISABLED=1
COPY --from=build --chown=node:node /app/apps/website/.next/standalone ./
COPY --from=build --chown=node:node /app/apps/website/.next/static ./apps/website/.next/static
COPY --from=build --chown=node:node /app/apps/website/public ./apps/website/public
USER node
EXPOSE 5185
CMD ["node", "apps/website/server.js"]
