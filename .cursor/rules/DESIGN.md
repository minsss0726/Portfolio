Design Philosophy

- Use a modern, minimal, black-and-white centered design.
- Favor strong contrast, whitespace, and clean typography.
- Avoid colorful UI unless explicitly requested.
- Emphasize hierarchy through size, weight, spacing — not color.

Color System

- Primary palette: black, white, and neutral grays only.
- Use Tailwind neutral scale (neutral-50 → neutral-950).
- Background:
  - Default: bg-white or bg-neutral-950 (dark sections)
- Text:
  - Primary: text-neutral-900 (light mode) / text-neutral-100 (dark mode)
  - Secondary: text-neutral-500 to text-neutral-600
- Borders:
  - border-neutral-200 (light)
  - border-neutral-800 (dark)
- Avoid gradients unless explicitly requested.
- Avoid bright colors (blue, red, green, etc.) unless required for status (error/success).

Typography

- Use clean sans-serif fonts.
- Prefer font-semibold and font-medium for hierarchy.
- Avoid excessive font weights.
- Use large headings with tight tracking for modern look:
  - h1: text-4xl md:text-5xl font-semibold tracking-tight
  - h2: text-2xl md:text-3xl font-semibold
- Maintain generous line-height (leading-relaxed for body text).

Layout

- Use whitespace aggressively.
- Favor max-w-5xl or max-w-6xl containers.
- Use mx-auto and px-4 md:px-6 for layout balance.
- Use grid and flex layouts instead of absolute positioning.
- Avoid clutter.

Components

- Use subtle borders instead of heavy shadows.
- Prefer rounded-2xl for cards and containers.
- Use shadow-sm only when necessary.
- Buttons:
  - Solid black button: bg-black text-white hover:bg-neutral-800
  - Outline button: border border-neutral-900 text-neutral-900 hover:bg-neutral-100
- Avoid overly decorative elements.

Interaction Design

- Use smooth transitions:
  - transition-all duration-200 ease-in-out
- Use hover states that slightly change background or opacity.
- Avoid flashy animations.
- Use subtle scale effects:
  - hover:scale-[1.01]

Dark Mode

- Fully support dark mode.
- Use neutral-950 backgrounds and neutral-100 text.
- Maintain consistent contrast ratios.

Forms

- Use clean input styles:
  - border border-neutral-300
  - focus:ring-1 focus:ring-neutral-900
  - focus:outline-none
- Avoid colored focus rings.

Spacing System

- Prefer consistent spacing scale:
  - section spacing: py-16 md:py-24
  - card spacing: p-6 md:p-8
- Maintain vertical rhythm.

Imagery

- Prefer high-contrast photography.
- Use WebP format.
- Avoid colorful illustrations unless necessary.
- Keep image corners rounded-2xl.

Icons

- Use simple monochrome icons.
- Avoid multicolor icon sets.

Overall Rule

- Modern.
- Minimal.
- High contrast.
- Clean.
- Confident.
- No visual noise.
