# Repository conventions

Reference: SuperBlackCoffee commit `6e4d793f844611272f28cac93b334624340ef712`, verified against remote HEAD.

RBC GO follows the reference workspace and tooling conventions while retaining its mobility domain.

| Location                           | Responsibility                                         |
| ---------------------------------- | ------------------------------------------------------ |
| `apps/website/app`                 | Next.js routes, layout and SEO                         |
| `apps/website/src/components`      | Website components including Navbar                    |
| `apps/website/src/data`            | Website content                                        |
| `apps/website/src/sections`        | Reusable website sections                              |
| `apps/website/app/pageMetadata.ts` | Page SEO metadata                                      |
| `apps/admin/src`                   | React administration application                       |
| `apps/customer/src`                | React mobile customer application                      |
| `apps/api/cmd/api`                 | Go API entry point                                     |
| `apps/api/internal`                | Mobility repository, services, router and IoT adapters |
| `packages/management/src`          | Shared management client                               |
| `packages/types/src`               | Shared business types                                  |
| `packages/ui/src`                  | Shared UI and theme                                    |
| `packages/ui/src/components/icons` | Shared animated icons                                  |
| `docker/nginx-spa.conf`            | Shared Vite production server                          |

Add registry icons using `packages/ui/components.json`. Store them as PascalCase `*Icon.tsx` files in `packages/ui/src/components/icons`, retain their registry source comment, export them from `packages/ui/src/components/icons/index.ts` via `@stackbuild/ui/icons`, and reuse across applications.

Tooling follows the reference: pnpm workspaces, Prettier, Go formatting, VS Code format-on-save, Vitest with V8 coverage, Playwright, per-app build/lint commands, separate CI jobs and production Docker Compose. Enable the supplied Git hook locally with `git config core.hooksPath .githooks`. As in the reference, it formats the repository and stages tracked changes on commit.

Validation commands: `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm test:coverage`, `pnpm build`, `pnpm test:e2e`. Coverage reports are in `coverage/`.

Production: configure values from `.env.production.example`, then run `docker compose --env-file <environment-file> -f docker-compose.production.yml up --build -d` behind an HTTPS reverse proxy. Database and Redis are external, matching the reference. Deployment configuration does not activate the unconfigured authentication, payment or IoT integrations.

Removed unused starter packages `config`, `utils`, and `eslint-config`, plus RBC-only helper scripts that were absent from the reference. ESLint configurations now use the same app-local setup as the reference. Retained Customer, mobility API, RBC GO content/assets, and verification/design documentation. Coffee-specific franchise, attendance, stock, menu and order modules are not copied.
