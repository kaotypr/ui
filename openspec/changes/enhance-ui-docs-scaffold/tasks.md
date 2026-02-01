## 1. Project Setup

- [x] 1.1 Create `apps/ui-docs/scripts/` directory
- [x] 1.2 Add generated files to `.gitignore` (`public/docs/`, `content/docs/_examplesIndex.json`, `public/llms.txt`)
- [x] 1.3 Update `package.json` with new scripts (`generate:md`, `generate:examples`, `generate:llms`, `generate`, `prebuild`)

## 2. ComponentPreview Enhancement

- [x] 2.1 Update `component-preview-client.tsx` to use stacked layout (preview on top, code below)
- [x] 2.2 Implement collapsed code section showing first few lines with line numbers
- [x] 2.3 Add "View Code" button that expands code section to max-height with scroll
- [x] 2.4 Add collapse functionality to return code section to collapsed state
- [x] 2.5 Add copy button with Clipboard API integration and checkmark confirmation
- [x] 2.6 Style ComponentPreview with bordered container and rounded corners matching shadcn docs
- [x] 2.7 Ensure syntax highlighting works with site theme

## 3. Examples Index Generator

- [x] 3.1 Create `scripts/generate-examples-index.mjs` script
- [x] 3.2 Implement recursive scanning of `src/examples/` for `*.tsx` files
- [x] 3.3 Extract example name from filename (e.g., `accordion-demo` from `accordion-demo.tsx`)
- [x] 3.4 Extract component group from parent directory (e.g., `accordion` from `accordion/`)
- [x] 3.5 Implement JSDoc `@tags` extraction from example files
- [x] 3.6 Output JSON to `content/docs/_examplesIndex.json` with grouped structure
- [x] 3.7 Test script with existing accordion and button examples

## 4. MDX-to-MD Conversion Script

- [x] 4.1 Create `scripts/mdx-to-md.mjs` script
- [x] 4.2 Implement reading of `content/docs/components/*.mdx` files
- [x] 4.3 Implement frontmatter preservation (title, description)
- [x] 4.4 Implement `<ComponentPreview>` and other JSX tag stripping
- [x] 4.5 Preserve standard markdown content (headings, code blocks, tables)
- [x] 4.6 Create output directory `public/docs/components/` if not exists
- [x] 4.7 Write converted files with `.md` extension
- [x] 4.8 Test script with accordion.mdx

## 5. llms.txt Generator

- [x] 5.1 Create `scripts/generate-llms-txt.mjs` script
- [x] 5.2 Implement scanning of `public/docs/` for generated `.md` files
- [x] 5.3 Generate absolute URLs with base `https://ui.kaotypr.site`
- [x] 5.4 Add header `# @kaotypr/ui Documentation`
- [x] 5.5 Write `public/llms.txt` with list of URLs
- [x] 5.6 Test script after running mdx-to-md

## 6. Accordion Documentation Refactor

- [x] 6.1 Update `content/docs/components/accordion.mdx` to use enhanced `<ComponentPreview>` pattern
- [x] 6.2 Add API Reference section with props table (Prop, Type, Default, Description)
- [x] 6.3 Verify all existing examples render correctly with new ComponentPreview
- [x] 6.4 Test MDX-to-MD conversion produces valid markdown

## 7. Integration & Testing

- [x] 7.1 Run `pnpm generate` to verify all scripts execute in sequence
- [x] 7.2 Verify `_examplesIndex.json` is generated correctly
- [x] 7.3 Verify `public/docs/components/*.md` files are generated
- [x] 7.4 Verify `public/llms.txt` contains correct URLs
- [x] 7.5 Run `pnpm build` to verify prebuild hook works
- [x] 7.6 Test ComponentPreview UI in dev mode (expand/collapse, copy button)
- [x] 7.7 Verify static export includes generated `.md` files
