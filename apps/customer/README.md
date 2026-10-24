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

Set `EXPO_PUBLIC_API_URL` in `apps/customer/.env` to your API's `/api/v1` URL. On a physical device, use the development computer's LAN IP; `localhost` refers to the device. When unset, Android uses `10.0.2.2:8081`, while iOS Simulator and web use `localhost:8081`. Public variables are bundled into the app and must not contain secrets. Production API URLs should use HTTPS.

## Verification and builds

```sh
pnpm --filter @stackbuild/customer lint
pnpm --filter @stackbuild/customer typecheck
pnpm build:customer
```

`build` exports JavaScript bundles for iOS, Android and web into `dist`; it does not create a signed IPA or APK. Use Expo native build tooling with your own application identifiers and signing credentials when preparing store releases. Docker serves only the web preview. The welcome screen and API status retry are implemented; booking, authentication and payment are not enabled.
