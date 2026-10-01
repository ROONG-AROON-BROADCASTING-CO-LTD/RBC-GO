# RBC GO API

Go/Gin bootstrap with PostgreSQL/Redis readiness, shared domain models, distance billing and IoT gateway interfaces. Run `pnpm dev:api` from the workspace root to load this app's `.env`.

- `GET /health`: process health.
- `GET /ready`: actual PostgreSQL/Redis connectivity; 503 if either is unavailable.
- `GET /api/v1/status`: explicit capability state; payments, auth and IoT are not configured.

Customer and money/device mutation routes remain absent until authentication and real adapters are implemented. See `../../docs/architecture.md`.
