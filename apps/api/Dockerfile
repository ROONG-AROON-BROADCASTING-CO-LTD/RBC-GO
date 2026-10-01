FROM golang:1.25-alpine AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o /out/api ./cmd/api
FROM alpine:3.21
RUN apk add --no-cache ca-certificates && adduser -D appuser
WORKDIR /app
COPY --from=build /out/api ./api
USER appuser
EXPOSE 8081
CMD ["./api"]
