# @lem/ui

Shared design tokens and React components for the lem ecosystem (lem.fyi, lem.work, lem.photo).

## Install

```bash
npm install github:lucasmccomb/lem-ui
```

## Exports

| Export path | Description |
|---|---|
| `@lem/ui/tokens/variables.css` | CSS custom properties for colors, nav dimensions, shimmer animation |
| `@lem/ui/tokens/tailwind-preset` | Tailwind v4 preset (darkMode, screens, colors, fonts) |
| `@lem/ui/components` | React components (Logo, SideNav, BottomNav, ThemeToggle) |

## Usage

### CSS Tokens

Import the variables stylesheet to get all design tokens:

```css
@import '@lem/ui/tokens/variables.css';
```

This provides `:root` and `.dark` theme variables:

- **Colors**: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--text-muted`, `--border`, `--accent`, `--accent-hover`, `--code-bg`, `--error`, `--success`
- **Nav**: `--nav-width-collapsed` (64px), `--nav-width-expanded` (256px)
- **Shimmer**: `--shimmer-1` through `--shimmer-6` + `@keyframes shimmer`

### Tailwind Preset

Add the preset to your Tailwind config:

```typescript
import preset from '@lem/ui/tokens/tailwind-preset';

const config = {
  presets: [preset],
  // your project-specific overrides...
};
```

The preset provides `darkMode: 'class'`, a `nav: '501px'` breakpoint, color mappings to CSS variables, and system font stacks.

### Components

```tsx
import { Logo, SideNavShell, SideNavItem, ThemeToggleNav } from '@lem/ui/components';
import { BottomNavShell, BottomNavItem, ThemeToggleMobile } from '@lem/ui/components';
```

Components accept a `renderLink` prop of type `RenderLinkFn` for framework-agnostic link rendering (React Router, static `<a>` tags, etc.).

```tsx
import type { RenderLinkFn } from '@lem/ui/components';

const renderLink: RenderLinkFn = (props) => <a {...props} />;
```

## Peer Dependencies

- `react` >= 18
- `lucide-react` >= 0.400
