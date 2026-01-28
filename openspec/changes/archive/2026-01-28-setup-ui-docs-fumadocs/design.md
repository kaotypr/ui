## Context

The `apps/ui-docs` app is a Next.js application initialized with Fumadocs (v16.4.9). The current setup includes:

- **Layouts**: `HomeLayout` for the landing page, `DocsLayout` for documentation pages
- **Content**: MDX-based docs in `content/docs/` with Fumadocs MDX collection
- **Branding**: Generic "My App" title in `layout.shared.tsx`
- **Home page**: Placeholder "Hello World" content

The @kaotypr/ui library contains 60+ components built on Radix UI primitives with Tailwind CSS styling.

## Goals / Non-Goals

**Goals:**

- Create a professional landing page that showcases the library's value proposition
- Provide clear introduction content explaining the library's design philosophy
- Document installation and basic setup steps for new users
- Update branding to reflect @kaotypr/ui identity
- Structure content for future component documentation

**Non-Goals:**

- Individual component documentation (separate change)
- API reference generation (separate change)
- Search functionality improvements (already working via Fumadocs)
- Theming/styling customization beyond basic branding

## Decisions

### 1. Home page structure

**Decision**: Use Fumadocs `HomeLayout` with custom hero section, feature cards, and CTA links.

**Rationale**: Fumadocs provides built-in home layout components that integrate well with the docs layout. Custom JSX in `page.tsx` gives full control over hero content while maintaining consistent navigation.

**Alternatives considered**:
- Full custom layout: More work, potential inconsistencies with docs navigation
- Third-party landing page template: Adds dependencies, harder to maintain

### 2. Content organization

**Decision**: Structure docs as:
```
content/docs/
├── index.mdx          # Introduction (landing for /docs)
├── meta.json          # Navigation ordering
└── getting-started.mdx # Installation guide
```

**Rationale**: Flat structure is sufficient for foundational pages. Fumadocs uses `meta.json` to control sidebar ordering. The `index.mdx` serves as the documentation landing page at `/docs`.

**Alternatives considered**:
- Nested folders: Overkill for 2-3 initial pages, adds complexity
- Separate "guide" folder: Premature organization

### 3. Branding approach

**Decision**: Update `layout.shared.tsx` with:
- Title: "@kaotypr/ui"
- GitHub link in nav
- Consistent naming across layouts

**Rationale**: Centralized in `baseOptions()` function, shared by both `HomeLayout` and `DocsLayout`. Single source of truth for nav configuration.

### 4. Hero section design

**Decision**: Simple hero with:
- Library name and tagline
- Brief description (1-2 sentences)
- Two CTAs: "Get Started" → /docs/getting-started, "Components" → /docs (placeholder for future)
- No illustrations/animations initially

**Rationale**: Focus on clarity and fast load. Can enhance visually later. Matches professional documentation sites (shadcn/ui, Radix).

### 5. Feature highlights

**Decision**: 3-4 feature cards highlighting:
- Built on Radix UI (accessibility)
- Tailwind CSS styling (customizable)
- TypeScript support (type-safe)
- 60+ components (comprehensive)

**Rationale**: Communicates key differentiators quickly. Cards work well in responsive grid.

## Risks / Trade-offs

**[Risk] Content becomes stale** → Keep content minimal and factual. Avoid specific version numbers in prose.

**[Risk] Home page looks generic** → Accept for MVP. Can iterate on visual design after core content is in place.

**[Trade-off] No component count automation** → Hardcoding "60+ components" is acceptable; manual update when significantly wrong.

**[Trade-off] Minimal styling on home page** → Using Fumadocs default styling. Custom CSS can be added later without structural changes.
