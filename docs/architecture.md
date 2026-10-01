# RBC GO architecture

## Applications

- Website: crawlable Next.js public content and mobile-only customer entry.
- Customer: mobile React client for OTP, wallet/card, scan, trip and receipt flows.
- Admin: React operations surface for vehicles, parking zones, device health, wallet ledger and support.
- API: Gin HTTP boundary; persistent repositories own money and trip state.
- PostgreSQL: future wallets, immutable ledger entries, trips, vehicle state, zones, device identities and audit events.
- Redis: future OTP expiry, reservations, ephemeral vehicle status and rate limits; never the sole wallet ledger.

PostgreSQL and Redis are installed and readiness checked. Business tables/migrations and persistent repositories are not yet implemented.

## Fare source of truth

The current requirement is distance pricing. `DistanceFare` takes trusted meters, satang per kilometer and a configured minimum; fractional satang is rounded up once at settlement. The UI's displayed distance is informational. Tariff, minimum balance, balance holds and service zones require product decisions before enabling rides.

Settlement must atomically update the trip, debit its wallet hold and insert a unique ledger entry within a PostgreSQL transaction. Top-ups require a verified payment-provider webhook with event deduplication. Never credit a wallet from a browser success page or redirect. A repeat end-trip request must return the original settlement result.

## Vehicle/IoT boundary

Customer -> authenticated API -> gateway adapter -> device command -> correlated device acknowledgement -> persisted trip transition.

`internal/iot/Gateway` defines command publication and acknowledgement. It deliberately has no running simulator or vendor adapter. Select vendor protocol (MQTT, HTTPS or another), payload schema, provisioning and broker details before installing a protocol-specific library; these are absent from the reference dependencies.

- Every command has a unique ID, device ID, trip ID and expiry.
- Begin active billing only after a valid unlock acknowledgement.
- End the trip only after parking validation and a valid lock acknowledgement.
- Timeout, offline device or stale telemetry leaves an explicit pending/failed state; publication is not successful unlocking.
- Device identity, monotonic sequence and freshness checks prevent spoofed or replayed telemetry.
- Meter readings must be monotonic and plausible; handle resets and outages explicitly.
- Browser location alone cannot prove parking or trip distance.
- Future device credentials stay on the server; Customer/Admin must not connect directly to a broker or publish privileged commands.

## Before implementing the full brief

Use the original RBC GO logo, confirm the distance tariff, choose OTP/auth and payment providers, obtain the real IoT command/telemetry protocol, map/parking-zone source and operational contact details. The supplied 30-screen Thai brief is preserved in `product-brief.txt`; it is not a claim that those screens are already implemented.
