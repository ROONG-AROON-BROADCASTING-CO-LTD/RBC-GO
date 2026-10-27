# RBC GO website

Public-facing Thai/English rental website built with Next.js App Router.

## Development

Run commands from the repository root:

```sh
pnpm --filter @stackbuild/website dev
pnpm --filter @stackbuild/website lint
pnpm --filter @stackbuild/website typecheck
pnpm --filter @stackbuild/website build
```

The development server runs on port 5185.

## Structure

```text
app/                         Route entry points, metadata, providers and fonts
src/
  components/
    layout/                  Navigation, footers, language and metadata providers
      discovery/             Discovery navigation and language picker
    interactive/             Shared dialogs and motion primitives
    ui/                      Reusable headings, icons, arrows and carousel rail
  data/                      Navigation types and localized website content
  features/
    brand/                   Composition of informational pages
      sections/              Hero, fleet, information, help and closing sections
    events/                  Brand event pages
    rental-guide/            App usage walkthrough
    rentals/
      detail/                Category detail page and styles
      discovery/             Rental discovery page
      search/                Rental search dialog
  styles/                    Shared website CSS and MUI style definitions
public/                      Static images, icons and other public assets
```

Route files compose feature pages. Feature-specific styles live beside their
components; styles shared across features live in `src/styles`. Rental categories
and their IDs are defined in `src/data/rentals.ts`. Import source modules directly
instead of introducing barrel files.

The discovery and event layouts currently use separate navigation/footer
components. Both are retained to preserve their existing appearance and behavior.
Public asset paths and routes remain stable during source refactors.
