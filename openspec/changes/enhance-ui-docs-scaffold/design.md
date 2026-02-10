## Context

The `apps/ui-docs` application uses Fumadocs with Next.js (app router) and static export (`output: 'export'`). Current state:

- **ComponentPreview/ComponentSource**: Exist but lack shadcn-style polish (no collapsible source, no copy button)
- **Examples index**: Auto-generated `__index__.tsx` with lazy-loaded components; script location unknown (possibly external tooling)
- **MDX components**: Registered via `getMDXComponents()` in `mdx-components.tsx`
- **LLM support**: Route-based `llms-full.txt` exists, but no static file generation or `.md` variants
- **Static export**: Site uses `output: 'export'`, meaning no server-side routes at runtime—all content must be pre-generated

Key constraint: The static export model requires all `.md` files and `llms.txt` to be generated at build time, not served dynamically.

## Goals / Non-Goals

**Goals:**
- Polish component preview UI to match shadcn/ui docs aesthetic (stacked preview + collapsible code section with "View Code" expand, copy button)
- Create reusable ComponentPage wrapper for standardized component documentation layout (title, description, preview, API Reference with props table)
- Implement build-time MDX-to-MD conversion for LLM-accessible raw markdown
- Generate `public/llms.txt` listing all `.md` documentation URLs
- Provide `_examplesIndex.json` with searchable metadata (title, path, tags)
- Add npm scripts for running generators during dev/build
- Demonstrate the pattern with refactored accordion.mdx

**Non-Goals:**
- Runtime server routes (incompatible with static export)
- Full component docs authoring (only scaffold and accordion example)
- API reference auto-generation from TypeScript (manual props tables for now, following shadcn pattern)
- Search functionality changes (Orama search already exists)

## Decisions

### 1. Static `.md` file generation vs runtime route

**Decision**: Generate static `.md` files at build time in `public/` or alongside MDX.

**Rationale**: The app uses `output: 'export'` for static hosting. Dynamic routes like `/components/[slug].md` cannot work at runtime. Pre-generating `.md` files ensures they're available on any static host.

**Alternatives considered**:
- Middleware rewriting: Not available with static export
- Edge function: Adds complexity, vendor lock-in

### 2. MDX-to-MD conversion approach

**Decision**: Node.js script (`scripts/mdx-to-md.mjs`) that:
1. Reads each `content/docs/components/*.mdx`
2. Strips `<ComponentPreview>` tags and other JSX
3. Extracts frontmatter (title, description)
4. Outputs plain markdown to `public/docs/components/[slug].md`

**Rationale**: Simple, portable, runs in any CI. No heavy dependencies beyond basic regex/parsing.

**Alternatives considered**:
- MDX compiler with custom plugin: Overkill for stripping tags
- remark/rehype pipeline: More robust but heavier setup

### 3. ComponentPreview enhancement

**Decision**: Enhance existing `ComponentPreviewClient` with:
- Stacked layout: live preview on top, collapsible code section below (shadcn style)
- Code section shows collapsed snippet by default with line numbers
- "View Code" button expands to defined max-height with scroll behavior
- Copy button in code section using Clipboard API
- Consistent border/padding matching shadcn docs cards

**Rationale**: Minimal changes to existing architecture. `ComponentSource` already fetches source code server-side; we just improve the client presentation.

### 4. Examples index generator

**Decision**: Create `scripts/generate-examples-index.mjs` that:
1. Scans `src/examples/` directories
2. Extracts metadata from file names and optional JSDoc comments
3. Outputs `content/docs/_examplesIndex.json`

**Rationale**: The existing `__index__.tsx` is auto-generated (likely by fumadocs-mdx postinstall). A separate JSON index provides queryable metadata without modifying the component registry pattern.

### 5. llms.txt generation

**Decision**: Script `scripts/generate-llms-txt.mjs` that:
1. Lists all generated `.md` files in `public/docs/`
2. Writes `public/llms.txt` with absolute URLs using base `https://ui.kaotypr.site`
3. Format: `# @kaotypr/ui Documentation\n\n[list of absolute URLs]`

**Rationale**: Simple, deterministic, runs after mdx-to-md. Follows llms.txt convention for AI documentation discovery. Absolute URLs ensure compatibility with LLM tools that fetch from external contexts.

### 6. API Reference section (shadcn pattern)

**Decision**: ComponentPage includes an API Reference section with:
- Props table showing: Prop, Type, Default, Description
- Manual documentation in MDX using standard markdown tables
- Consistent styling matching shadcn/ui docs

**Rationale**: Follows shadcn/ui convention. Manual props tables are simpler to maintain and don't require TypeScript AST parsing. Auto-generation can be added later as a separate capability.

### 7. File structure

```
apps/ui-docs/
├── scripts/
│   ├── mdx-to-md.mjs          # Converts MDX → MD
│   ├── generate-examples-index.mjs  # Creates _examplesIndex.json
│   └── generate-llms-txt.mjs  # Creates public/llms.txt
├── src/
│   └── components/
│       ├── component-preview.tsx      # Enhanced (adds tabs)
│       ├── component-preview-client.tsx # Updated UI
│       └── component-page.tsx         # New: standardized page wrapper
├── content/docs/
│   └── _examplesIndex.json    # Generated metadata
├── public/
│   ├── llms.txt               # Generated LLM index
│   └── docs/components/*.md   # Generated markdown files
```

### 8. pnpm scripts integration

**Decision**: Add to `package.json`:
```json
{
  "scripts": {
    "generate:md": "node scripts/mdx-to-md.mjs",
    "generate:examples": "node scripts/generate-examples-index.mjs",
    "generate:llms": "node scripts/generate-llms-txt.mjs",
    "generate": "pnpm generate:examples && pnpm generate:md && pnpm generate:llms",
    "prebuild": "pnpm generate",
    "dev": "next dev",
    "build": "next build"
  }
}
```

**Rationale**: `prebuild` hook ensures generation happens before Next.js build. Separate scripts allow individual runs during development.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| MDX-to-MD regex may break on complex JSX | Keep MDX simple; test with accordion example; can upgrade to proper parser later |
| Generated files checked into git could cause merge conflicts | Add `public/docs/` and `_examplesIndex.json` to `.gitignore`; generate in CI |
| Static `.md` URLs may differ from styled page URLs | Consistent naming: `/docs/components/accordion` (styled) vs `/docs/components/accordion.md` (raw) |
| Copy button may not work in all browsers | Use modern Clipboard API with graceful fallback (show tooltip if unsupported) |

## Resolved Questions

1. **Base URL for llms.txt**: Use absolute URLs with domain `https://ui.kaotypr.site`. Absolute URLs are preferred for LLM tools that fetch llms.txt from external contexts. The script will generate URLs like `https://ui.kaotypr.site/docs/components/accordion.md`.

2. **API Reference section**: Follow shadcn/ui implementation—include an API Reference section in ComponentPage with a props table. The table displays prop name, type, default value, and description. Props are documented manually in MDX using a standard table format until TypeScript auto-generation is implemented.
