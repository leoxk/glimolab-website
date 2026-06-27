# Brand Assets

## Logo Files

Bundled assets:

- `../assets/glimo-lab-logo-stacked.png`
  - Source: `Glimo Lab Logo 2.png`
  - Best for brand pages, Open Graph previews, large brand moments, and reference.
- `../assets/glimo-lab-logo-horizontal.png`
  - Source: `Glimo Lab Logo 3.png`
  - Best for headers, footers, social previews, and narrow horizontal placements.

Original source locations used when this skill was created:

- `/Users/leoxiang/Library/CloudStorage/GoogleDrive-leo@babyproasia.com/Shared drives/Glimo Lab/Company Logo/Glimo Lab Logo 2.png`
- `/Users/leoxiang/Library/CloudStorage/GoogleDrive-leo@babyproasia.com/Shared drives/Glimo Lab/Company Logo/Glimo Lab Logo 3.png`

## Visual Notes

- Logo mark combines a segmented blue `G`, a blue `L`, a cyan play icon, and circuit-node details.
- Wordmark uses dark `Glimo` and blue `Lab`.
- The supplied PNGs have white backgrounds. For dark UI usage, avoid placing them raw on dark backgrounds unless contained intentionally.
- Existing site palette is close to:
  - Primary blue: `#0066FF`
  - Accent cyan: `#00BCD4`
  - Dark background: `#0A0A1A`
  - Text light: `#E2E8F0`

## Recommended Logo Workflows

For a quick header/footer replacement:

1. Copy the horizontal logo into `public/`.
2. Render it with an `img` tag and stable dimensions.
3. Use `object-contain`.
4. Check it against dark background contrast.

For a polished dark-header replacement:

1. Create or request a transparent-background derivative.
2. Use the icon plus wordmark if it remains legible at header height.
3. Use icon-only on narrow mobile if the full wordmark crowds controls.

For favicon updates:

1. Prefer a square icon-only derivative.
2. Keep `public/favicon.svg` and `public/favicon.ico` consistent.
3. Verify browser tab appearance after build.

