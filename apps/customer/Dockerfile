FROM node:24-alpine AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
ARG EXPO_PUBLIC_API_URL=http://localhost:8081/api/v1
ENV EXPO_PUBLIC_API_URL=$EXPO_PUBLIC_API_URL
RUN pnpm --filter @stackbuild/customer build:web
FROM nginx:alpine
COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/customer/dist /usr/share/nginx/html
EXPOSE 8080
