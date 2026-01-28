## Why

The @kaotypr/ui component library needs official documentation to help developers discover, understand, and use its 60+ UI components. The `apps/ui-docs` app has been initialized with Fumadocs but currently only has placeholder content. Setting up a proper documentation foundation (home page, introduction, getting started) is necessary before adding individual component documentation.

## What Changes

- Create a branded home page showcasing the @kaotypr/ui library with hero section, feature highlights, and navigation to docs
- Add an introduction page explaining the library's purpose, design principles, and architecture
- Create a getting started guide covering installation, configuration, and basic usage
- Update the base layout configuration with proper branding (navigation title, links)
- Structure the docs content folder for future component documentation

## Capabilities

### New Capabilities

- `docs-homepage`: Landing page for the documentation site with hero, features, and quick links
- `docs-introduction`: Introduction content explaining the library's purpose and design philosophy
- `docs-getting-started`: Setup guide covering installation and basic configuration

### Modified Capabilities

(none - no existing specs)

## Impact

- **Files affected**: `apps/ui-docs/src/app/(home)/page.tsx`, `apps/ui-docs/src/lib/layout.shared.tsx`, `apps/ui-docs/content/docs/` MDX files
- **Dependencies**: No new dependencies required (Fumadocs already installed)
- **APIs**: None
- **Systems**: Documentation site only - no impact on the core UI library
