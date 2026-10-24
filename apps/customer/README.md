# RBC GO Customer

React Native + Expo application for iOS and Android. Components use native `View`, `Text`, `ScrollView` and `Pressable`; web preview uses the same source through React Native Web.

## Development

From the repository root:

```sh
pnpm install
pnpm dev:customer
pnpm --filter @stackbuild/customer ios
pnpm --filter @stackbuild/customer android
pnpm --filter @stackbuild/customer web
```

The first command starts Metro on port 5183. Scan its QR code with a compatible Expo Go version, or open an iOS Simulator / Android Emulator. Native development builds can be generated with `pnpm --filter @stackbuild/customer exec expo run:ios` or `expo run:android`; Xcode / Android Studio are required respectively.

The app is currently a self-contained UI prototype. It does not call an API or collect payment details. Inventory, prices, payment methods and the confirmation number are illustrative, and state resets when the app restarts.

Select a category and vehicle, choose pickup/return dates and time, review the calculated total, and confirm the sample booking. Returning to an earlier step preserves the selection. Starting again from the success screen resets the flow. Yacht and aircraft categories show their own pickup locations.

## Verification and builds

```sh
pnpm --filter @stackbuild/customer lint
pnpm --filter @stackbuild/customer typecheck
pnpm build:customer
```

`build` exports JavaScript bundles for iOS, Android and web into `dist`; it does not create a signed IPA or APK. Use Expo native build tooling with your own application identifiers and signing credentials when preparing store releases. Docker serves only the web preview. Authentication, live availability, real reservations and payments are not enabled.
