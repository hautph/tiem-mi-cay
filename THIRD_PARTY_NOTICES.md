# Third-party notices

## Reference

This project is an independent game implementation. All illustrations, customer portraits, vectors, UI assets and logic are independently created and self-contained.

The SVG storefronts, chili mascot, noodle bowl, ingredient icons, decoration assets and favicon in `public/assets/` were authored for this project. Customer portraits, kitchen vessels and interface decorations are also original vector/CSS artwork. A few interface and mini-game symbols use the device's system emoji font.

## Fonts

Mali and Paytone One are distributed under the SIL Open Font License 1.1. The original license texts and copyright notices are bundled in `public/assets/licenses/`.

- [Mali font source](https://github.com/google/fonts/tree/main/ofl/mali): `font-0.ttf` through `font-3.ttf` (weights 400, 500, 600, 700).
- [Paytone One font source](https://github.com/google/fonts/tree/main/ofl/paytoneone): `font-4.ttf` (weight 400).

Font binaries were fetched through the Google Fonts stylesheet API. All font requests in the delivered game resolve to local files.

## Development dependency

Playwright is used only for automated tests and is distributed under Apache License 2.0. It is not included in or requested by the running browser game.
