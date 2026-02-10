## Why

The `apps/ui-docs` Fumadocs scaffold exists but lacks the polished UX and developer-friendly features of shadcn/ui documentation. To make `@kaotypr/ui` documentation production-ready and LLM-accessible, we need: refined component previews with side-by-side source code, standardized MDX patterns, automated scripts for generating markdown variants, and proper routing for both styled pages and raw markdown access.

## What Changes

- **Enhanced ComponentPreview**: Polished Tailwind-styled component preview cards with collapsible source code view and copy button, matching shadcn/ui docs aesthetic
- **ComponentPage template**: Standardized page structure with title, description, live preview, API Reference section, and source code toggle
- **MDX conventions**: Improved `<ComponentPreview>` wrapper pattern with clear example structure
- **MDX-to-MD converter**: New `scripts/mdx-to-md.js` script that strips `<ComponentPreview>` wrappers and outputs plain markdown for LLM consumption
- **Examples index generator**: New `scripts/generate-examples-index.js` producing `docs/_examplesIndex.json` with metadata (title, path, tags)
- **Dual routing**: Server route/middleware enabling `/components/[slug].md` to serve raw markdown while `/components/[slug]` renders styled MDX
- **Static llms.txt**: Script to generate `public/llms.txt` listing all component `.md` documentation URLs
- **npm scripts**: Add `generate:examples`, `generate:md`, and update `dev`/`build` to include generators
- **Refactored accordion docs**: Migrate existing `accordion.mdx` to the new pattern as reference implementation

## Capabilities

### New Capabilities
- `docs-component-page`: ComponentPage template and enhanced preview components with shadcn-style UI
- `docs-mdx-to-md`: MDX-to-Markdown conversion script and raw markdown serving route
- `docs-examples-index`: Examples index generator script producing JSON metadata
- `docs-llms-txt`: Static llms.txt generation script for LLM documentation access

### Modified Capabilities
<!-- No existing spec-level requirements are changing -->

## Impact

- **Code**: `apps/ui-docs/src/components/`, `apps/ui-docs/scripts/`, `apps/ui-docs/src/app/`
- **Config**: `apps/ui-docs/package.json` (new scripts), `apps/ui-docs/next.config.mjs` (routing)
- **Content**: `apps/ui-docs/content/docs/components/accordion.mdx` (refactored to new pattern)
- **Generated files**: `apps/ui-docs/public/llms.txt`, `apps/ui-docs/docs/_examplesIndex.json`, `apps/ui-docs/content/docs/components/*.md`
- **Dependencies**: No new runtime dependencies; may add dev utilities if needed
