FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
ARG VITE_API_URL=http://localhost:8081/api/v1
ENV VITE_API_URL=$VITE_API_URL
RUN pnpm build:admin
FROM nginx:alpine
COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/admin/dist /usr/share/nginx/html
EXPOSE 8080
