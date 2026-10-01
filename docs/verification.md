# Installation verification — 2026-10-02

- Dependency comparison: exact external JavaScript versions from the source importers and all 14 direct Go dependencies match SuperBlackCoffee commit `ff42e9ba3eb41bd5a8088d7d52d25e58f97a6cec`.
- `pnpm install --frozen-lockfile`, dependency check, TypeScript checks, JavaScript configuration lint and formatting check passed.
- Customer, Admin, Website and API production builds passed on the host. All four Docker images built and started successfully.
- PostgreSQL and Redis are isolated in RBC GO containers; `/ready` returned both connections healthy.
- Vitest: 7 tests passed for device classification and rendered mobile login eligibility.
- Go tests passed for distance-fare rounding, minimum, invalid inputs, overflow, bootstrap routes, CORS and readiness failure.
- Playwright HTTP integration: 3 tests passed against both dev servers and running Docker services, covering SEO/crawl metadata, private app shells and explicit unconfigured capabilities.
- IAB: inspected public Website on desktop and at 390px, checked absence of a desktop login link and no horizontal overflow at 390px. Inspected the Customer mobile surface and its API retry action, and Admin's real API connection status. Admin browser inspection reported no console errors.

The IAB viewport retains a desktop device identity. Phone user-agent/touch eligibility is verified in component tests; physical-phone and real payment/vehicle tests are not part of this installation. No logo recreation or 30-screen fidelity claim is made.

The complete Docker stack is running locally on Customer 5183, Admin 5184, Website 5185 and API 8081. To switch to development, stop those four application containers and run `pnpm dev`; keep the database and Redis running.
