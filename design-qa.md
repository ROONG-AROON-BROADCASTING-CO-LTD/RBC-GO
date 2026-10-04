# Website reference implementation QA

final result: passed

## Inputs and evidence

- Selected user reference: `docs/design/website/selected-reference.png`.
- Implemented production website: http://127.0.0.1:5185/en (Next.js Docker build).
- Combined reference/implementation comparison: `docs/design/website/comparison-board-pass3.png`. Source on the left of each pair, implementation on the right; desktop captures normalized from 1280 × 1280 to 512 × 512.
- Six-panel implementation capture: `docs/design/website/implemented-pages.png`.
- Thai mobile capture: `docs/design/website/help-mobile-th.jpg` at 390 px.

## Surface review

| Surface | Result                                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout  | Fleet split photographs, numbered three-phone journey, pricing card and river strip, temple About, searchable Help, lower-home fleet/steps/CTA/footer implemented. Desktop density refined in comparison pass 3. Mobile stacks content without horizontal overflow. |
| Fonts   | Local Inter and Kanit, heavy two-line titles, smaller supporting text, consistent navigation and footer hierarchy.                                                                                                                                                  |
| Colors  | Near-black canvas, white headings, muted supporting text, lime actions and icons matched to reference direction.                                                                                                                                                    |
| Assets  | Real generated bicycle, scooter, river, full-spire temple, phone illustrations and skyline artwork. Icons use installed Material UI library assets. All primary assets visibly present in comparison captures.                                                      |
| Copy    | Reference headlines retained. English/Thai routes supported. Launch-dependent fares, support and legal content remain explicitly pending rather than inventing operational promises.                                                                                |

## Iterations

- Fixed missing Fleet imagery, three-phone journey, river strip, temple scene and lower-home sections from the earlier design.
- Fixed invisible library icons by adding SVG namespace.
- Replaced cropped portrait temple with landscape artwork preserving the complete spire.
- Reserved equal step-description height to align phone tops.
- Refined title size, phone illustration height, FAQ spacing and lower-home density after pass 2 combined comparison.
- Compared all six source/implementation pairs together in pass 3; reviewed Thai mobile at readable scale.

## Verification

- Production Docker build and TypeScript compilation passed; updated website container is running on port 5185.
- Frontend unit tests: 7 passed, including mobile-only app access conditions.
- HTTP integration tests: 3 passed, including bilingual SEO, sitemap/robots, private app shells and truthful unconfigured API adapters.
- Dependency manifest verification passed against reference commit ff42e9ba3eb41bd5a8088d7d52d25e58f97a6cec.
- Browser: fleet switching and details, FAQ filtering/expansion, support dialog open/close, mobile menu, language switch preserving Help route; 390 px English and Thai pages have no horizontal overflow.

## Accepted differences and limits

- P3: Generated photographs and phone illustrations reproduce the composition and visual direction rather than the exact pixels of the supplied montage. Header scale and line wrapping vary slightly.
- No P0/P1/P2 findings remain within the marketing website scope.
- The wallet/scan/map phone screens are illustrations; live payment and vehicle IoT services still require configured backend providers.
- No social accounts or contact destinations were fabricated. Get started leads to the guide; customer app entry remains mobile-only.
