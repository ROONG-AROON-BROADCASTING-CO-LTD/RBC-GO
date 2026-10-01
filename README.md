# RBC GO

Mobile-first electric bicycle and scooter rental monorepo. Customers top up a digital card / wallet, scan the vehicle QR, and pay based on distance.

## Stack and source

Generated **inside this repository** with `npm create stackbuild@latest .` (`create-stackbuild@0.3.2`), using the customer-admin preset, Vite, Go/Gin, MUI, PostgreSQL, Redis, pnpm and Docker. A separate Next.js Website was added because Stackbuild selects one frontend framework per run.

Dependencies were reviewed against [SuperBlackCoffee](https://github.com/ROONG-AROON-BROADCASTING-CO-LTD/SuperBlackCoffee/tree/ff42e9ba3eb41bd5a8088d7d52d25e58f97a6cec). External JavaScript dependencies are pinned to that commit's resolved lockfile versions, including its test dependencies. Customer uses the same stack as Admin. API retains **all direct Go dependencies and versions** from the reference; the module path is RBC GO. Coffee-specific application code and business data were not imported.

| App      | Technology                                   | Local URL             |
| -------- | -------------------------------------------- | --------------------- |
| Customer | React 19.2.8 / TypeScript 6.0.3 / Vite 8.1.5 | http://localhost:5183 |
| API      | Go 1.25 / Gin 1.12.0                         | http://localhost:8081 |
| Admin    | React / TypeScript / Vite / MUI 9.4.0        | http://localhost:5184 |
| Website  | Next.js 16.3.4 App Router / TypeScript       | http://localhost:5185 |

Ports are deliberately separate from the already running SuperBlackCoffee project. PostgreSQL uses `5435`, Redis `6380`. Containers and volumes are namespaced under `rbc-go`.

## Run locally

Requires Node >=22.12, pnpm 10 and Go >=1.25. Docker Compose is used for local PostgreSQL/Redis.

```sh
corepack enable
pnpm install --frozen-lockfile
```

Local `.env` files were created during installation and are ignored by Git. On a new checkout, copy examples:

```sh
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/customer/.env.example apps/customer/.env
cp apps/admin/.env.example apps/admin/.env
cp apps/website/.env.example apps/website/.env
```

```sh
pnpm dev:infra
pnpm dev
```

Run individual applications with `pnpm dev:customer`, `pnpm dev:api`, `pnpm dev:admin` or `pnpm dev:website`. API reads `apps/api/.env`; Vite and Next read their application `.env`. Existing environment variables take precedence. Watchpack uses polling and Next dev has a separate `.next-dev` directory to avoid watcher limits and build/dev output conflicts.

```sh
pnpm check:dependencies
pnpm typecheck
pnpm lint
pnpm test
pnpm test:e2e
pnpm build
```

TypeScript is checked by `tsc`; ESLint follows the reference's minimal configuration and checks JavaScript configuration files. `test:e2e` checks HTTP application boundaries and SEO responses with Playwright's request runner. Device eligibility and rendered login visibility have separate Vitest tests.

## Current implementation boundary

This is an **installed, runnable foundation**, not the completed rental/payment platform or the complete 30-screen design set. Customer and Admin show honest setup states and real API connectivity. API exposes `/health`, `/ready` (checks PostgreSQL and Redis), and `/api/v1/status`. No wallet debit, top-up, customer authentication, device command or trip mutation is exposed yet.

Shared packages provide brand tokens, a MUI theme, domain types and operations sections. The API includes a tested distance-fare calculation and interfaces for atomic wallet settlement and IoT command acknowledgement. All money uses integer satang; distance uses integer meters. A rate is explicitly required, and no tariff has been invented. Browser-reported distance must never settle a trip.

The full supplied brief is saved in [`docs/product-brief.txt`](docs/product-brief.txt). Its example minute pricing is superseded by the user's distance-pricing requirement. No RBC GO logo was included in the attachment; current text is a temporary brand label, not a recreation of the logo. Add the original logo before the final UI asset pass.

## Website SEO and mobile entry

Server-rendered Thai content, title/description, canonical URL, Open Graph/Twitter metadata, generated share image, JSON-LD `WebSite`, `robots.txt` and `sitemap.xml` are configured using the [Next.js Metadata API](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

The login link is rendered only for a phone user agent/client hint **and** a viewport <=767px with a coarse pointer. Narrow desktop windows and tablets do not qualify. Customer shows the mobile surface at <=767px and desktop guidance above that size. These presentation rules are not access control; real authorization belongs in the API.

Before a public deployment, set a real HTTPS `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CUSTOMER_URL`, the API URL and allowed origins. Set `SEO_ALLOW_INDEXING=true` only for the public Website. Local/staging defaults are `noindex` and disallow crawling. Public URL/indexing settings are build-time inputs and require a rebuild. Customer/Admin always use `noindex`.

Dockerfiles use the workspace root as their frontend build context and serve Vite builds with nginx. Website uses Next standalone output. To use the complete container stack, stop any local RBC GO dev processes first and run `docker compose up --build -d`. To switch back to local development, run `docker compose stop customer admin website api` before `pnpm dev`; keep PostgreSQL/Redis running. Database passwords in the examples are local development credentials.

See [`docs/architecture.md`](docs/architecture.md) for rental/IoT boundaries and [`docs/reference-dependencies.json`](docs/reference-dependencies.json) for provenance.
