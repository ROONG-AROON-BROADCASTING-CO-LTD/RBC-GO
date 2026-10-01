package router

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestBootstrapRoutes(t *testing.T) {
	t.Setenv("CORS_ALLOWED_ORIGINS", "http://localhost:5183")
	r := New()
	for _, tc := range []struct {
		path   string
		status int
	}{{"/health", 200}, {"/api/v1/status", 200}, {"/api/v1/users", 404}, {"/api/v1/wallet/topup", 404}, {"/api/v1/vehicles/unlock", 404}} {
		w := httptest.NewRecorder()
		req := httptest.NewRequest(http.MethodGet, tc.path, nil)
		r.ServeHTTP(w, req)
		if w.Code != tc.status {
			t.Fatalf("%s: got %d", tc.path, w.Code)
		}
		if tc.path == "/api/v1/status" && !strings.Contains(w.Body.String(), `"iot":"not_configured"`) {
			t.Fatal("status must not claim a real IoT connection")
		}
	}
}
func TestCORS(t *testing.T) {
	t.Setenv("CORS_ALLOWED_ORIGINS", "http://localhost:5183")
	r := New()
	for _, origin := range []string{"http://localhost:5183", "https://unexpected.example"} {
		w := httptest.NewRecorder()
		req := httptest.NewRequest(http.MethodOptions, "/api/v1/status", nil)
		req.Header.Set("Origin", origin)
		r.ServeHTTP(w, req)
		expected := ""
		if origin == "http://localhost:5183" {
			expected = origin
		}
		if w.Header().Get("Access-Control-Allow-Origin") != expected {
			t.Fatal("unexpected CORS origin")
		}
	}
}
func TestNotReadyWithoutInfrastructure(t *testing.T) {
	t.Setenv("DATABASE_URL", "")
	t.Setenv("REDIS_URL", "")
	w := httptest.NewRecorder()
	New().ServeHTTP(w, httptest.NewRequest(http.MethodGet, "/ready", nil))
	if w.Code != http.StatusServiceUnavailable {
		t.Fatalf("readiness got %d", w.Code)
	}
}
