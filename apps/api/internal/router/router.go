package router

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/redis/go-redis/v9"
	"net/http"
	"os"
	"strings"
	"time"
)

// New exposes bootstrap health only. Customer, wallet and device mutations require
// authentication, persistent repositories and real provider adapters before routing.
func New() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger(), gin.Recovery(), cors())
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"success": true, "message": "API is running", "data": gin.H{"status": "healthy"}})
	})
	r.GET("/ready", ready)
	r.GET("/api/v1/status", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"success": true, "message": "RBC GO API is running", "data": gin.H{"status": "healthy", "service": "rbc-go-api", "capabilities": gin.H{"payments": "not_configured", "authentication": "not_configured", "iot": "not_configured", "billing": "distance"}}})
	})
	return r
}
func cors() gin.HandlerFunc {
	allowed := strings.Split(os.Getenv("CORS_ALLOWED_ORIGINS"), ",")
	return func(c *gin.Context) {
		origin := c.GetHeader("Origin")
		for _, candidate := range allowed {
			if origin != "" && origin == strings.TrimSpace(candidate) {
				c.Header("Access-Control-Allow-Origin", origin)
				c.Header("Vary", "Origin")
				c.Header("Access-Control-Allow-Methods", "GET, OPTIONS")
				c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")
				break
			}
		}
		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	}
}
func ready(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), 3*time.Second)
	defer cancel()
	databaseOK, redisOK := false, false
	if url := os.Getenv("DATABASE_URL"); url != "" {
		if pool, err := pgxpool.New(ctx, url); err == nil {
			databaseOK = pool.Ping(ctx) == nil
			pool.Close()
		}
	}
	if opt, err := redis.ParseURL(os.Getenv("REDIS_URL")); err == nil {
		client := redis.NewClient(opt)
		redisOK = client.Ping(ctx).Err() == nil
		_ = client.Close()
	}
	status := http.StatusOK
	if !databaseOK || !redisOK {
		status = http.StatusServiceUnavailable
	}
	c.JSON(status, gin.H{"success": databaseOK && redisOK, "data": gin.H{"database": databaseOK, "redis": redisOK}})
}
