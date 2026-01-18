# Project Context

## Purpose

`@kaotypr/ui` is a React component library built on top of [shadcn/ui](https://ui.shadcn.com/) (New York style) and [Radix UI](https://www.radix-ui.com/) primitives. The library provides a collection of accessible, customizable, and production-ready UI components for building modern web applications.

**Goals:**
- Provide reusable, well-documented React components
- Maintain full accessibility via Radix UI primitives
- Support Tailwind CSS v4 theming with CSS custom properties
- Enable tree-shaking with per-component exports
- Document components with interactive Storybook stories

## Tech Stack

### Core
- **TypeScript** 5.9 - Static type checking
- **React** 18/19 - UI framework (supports both versions)
- **Tailwind CSS** v4 - Utility-first CSS with `@tailwindcss/vite` plugin
- **Radix UI** - Accessible, unstyled UI primitives

### Build & Development
- **Vite** 7.x - Build tool and dev server
- **Turborepo** - Monorepo build orchestration
- **pnpm** 9.x - Package manager with workspaces
- **vite-plugin-dts** - TypeScript declaration generation

### Styling & Utilities
- **class-variance-authority (CVA)** - Component variant management
- **clsx** + **tailwind-merge** - Conditional class merging (via `cn()` utility)
- **lucide-react** - Icon library
- **tw-animate-css** - Animation utilities

### Documentation & Testing
- **Storybook** 10.x - Component documentation and visual testing
- **Vitest** - Unit and integration testing
- **Playwright** - Browser-based testing via `@vitest/browser-playwright`
- **Biome** 2.x - Linting and formatting

### Key Dependencies
- **cmdk** - Command palette component
- **vaul** - Drawer component
- **react-day-picker** - Calendar component
- **embla-carousel-react** - Carousel component
- **react-resizable-panels** - Resizable panel layouts
- **sonner** - Toast notifications
- **react-hook-form** + **zod** - Form handling and validation
- **recharts** - Charts and data visualization
- **@tanstack/react-table** - Data table functionality

## Project Conventions

### Code Style

**Formatter: Biome** (configured in `biome.json`)
- **Indentation**: Tabs
- **Line width**: 100 characters
- **Quotes**: Double quotes
- **Semicolons**: No semicolons (ASI)
- **Trailing commas**: Always

**Naming Conventions:**
- Components: PascalCase (e.g., `Button`, `AlertDialog`)
- Files: kebab-case (e.g., `button.tsx`, `alert-dialog.tsx`)
- CSS variables: kebab-case with `--` prefix (e.g., `--primary-foreground`)
- Storybook stories: PascalCase exports (e.g., `Default`, `WithIcons`)

**Import Conventions:**
- Use `~/` alias for imports from `src/` directory
- External imports first, then internal imports
- Group imports: React → external deps → Radix UI → internal

### Architecture Patterns

**Monorepo Structure:**
```
ui/
├── apps/
│   ├── consumer-vite/    # Test app for consuming the library
│   └── docs/             # Documentation site (placeholder)
├── packages/
│   └── ui/               # Main component library (@kaotypr/ui)
└── openspec/             # Project specifications
```

**Component Structure:**
```
packages/ui/src/
├── assets/css/           # Global styles and theme
├── components/ui/        # UI components (one file per component)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions (cn, etc.)
└── stories/ui/           # Storybook stories (folder per component)
```

**Component Pattern:**
- Components use `React.ComponentProps<"element">` for prop typing
- Variants managed with CVA (`cva()` function)
- All components support `className` prop with `cn()` merging
- `asChild` prop pattern via Radix UI Slot for composition
- `data-slot` attributes for styling hooks

**Export Structure:**
- Main entry: `@kaotypr/ui` → all components
- Per-component: `@kaotypr/ui/button` → individual component
- Styles: `@kaotypr/ui/style` → CSS stylesheet
- Hooks: `@kaotypr/ui/hooks/*` → individual hooks
- Utilities: `@kaotypr/ui/lib/*` → utility functions

### Testing Strategy

**Storybook-Driven Development:**
- Every component must have Storybook stories
- Stories serve as visual tests and documentation
- Use `@storybook/addon-vitest` for test integration
- Run tests in headless Chromium via Playwright

**Story Requirements:**
- Document all component props in `argTypes`
- Include Radix UI props documentation for wrapped primitives
- Provide multiple story variants (Default, states, sizes, etc.)
- Each story includes description in `parameters.docs.description.story`

**Validation:**
- Run `pnpm tsc --noEmit` on story files after generation
- Use `pnpm lint` (Biome) for code quality checks

### Git Workflow

**Branch Naming:**
- Feature branches: `feat/<feature-name>`
- Bug fixes: `fix/<bug-name>`
- Refactoring: `refactor/<scope>`

**Commit Convention:** Conventional Commits
```
<type>(<scope>): <description>

Types: feat, fix, refactor, docs, test, chore
Scope: ui, storybook, build, etc.
```

**Examples:**
- `feat(ui): add Tooltip component stories to Storybook`
- `fix(ui): correct button disabled state styling`
- `refactor(ui): update build scripts in package.json`

## Domain Context

**shadcn/ui Integration:**
- Components are added via `shadcn` CLI with "new-york" style
- Configuration in `components.json`
- Components can be customized after installation
- Base color: zinc

**Theming:**
- CSS custom properties define all theme tokens
- Light/dark mode via `.dark` class selector
- Colors use OKLCH color space for better interpolation
- Theme tokens: background, foreground, primary, secondary, muted, accent, destructive, etc.

**Component Categories:**
1. **UI Components** (`components/ui/`) - Primitive building blocks
2. **Block Components** (`components/blocks/`) - Composed patterns (planned)

## Important Constraints

- **React 18/19 compatibility** - Must work with both versions
- **No direct Tailwind classes in consumers** - Styles should be encapsulated or use CSS variables
- **Tree-shakeable exports** - Each component in its own entry point
- **Accessibility first** - Leverage Radix UI primitives for ARIA compliance
- **No runtime CSS-in-JS** - Use Tailwind CSS only
- **Peer dependencies** - React, Tailwind, and optional deps (forms, tables, etc.) are peer deps

## External Dependencies

**Required Peer Dependencies:**
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0
- `tailwindcss` ^4.0.0

**Optional Peer Dependencies** (install as needed):
- `@hookform/resolvers` + `react-hook-form` + `zod` - For Form component
- `@tanstack/react-table` - For DataTable component
- `date-fns` + `react-day-picker` - For Calendar component
- `embla-carousel-react` - For Carousel component
- `input-otp` - For InputOTP component
- `next-themes` + `sonner` - For Toaster component
- `recharts` - For Chart component
- `react-resizable-panels` - For Resizable component

**Development Commands:**
```bash
pnpm install              # Install dependencies
pnpm dev                  # Start dev mode (watch build)
pnpm build                # Build library
pnpm ui storybook         # Run Storybook dev server
pnpm ui build-storybook   # Build Storybook static site
pnpm lint                 # Run Biome linter
pnpm format               # Format code with Biome
```
