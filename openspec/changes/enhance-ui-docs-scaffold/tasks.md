## 1. Project Setup

- [ ] 1.1 Create `apps/ui-docs/scripts/` directory
- [ ] 1.2 Add generated files to `.gitignore` (`public/docs/`, `content/docs/_examplesIndex.json`, `public/llms.txt`)
- [ ] 1.3 Update `package.json` with new scripts (`generate:md`, `generate:examples`, `generate:llms`, `generate`, `prebuild`)

## 2. ComponentPreview Enhancement

- [ ] 2.1 Update `component-preview-client.tsx` to use stacked layout (preview on top, code below)
- [ ] 2.2 Implement collapsed code section showing first few lines with line numbers
- [ ] 2.3 Add "View Code" button that expands code section to max-height with scroll
- [ ] 2.4 Add collapse functionality to return code section to collapsed state
- [ ] 2.5 Add copy button with Clipboard API integration and checkmark confirmation
- [ ] 2.6 Style ComponentPreview with bordered container and rounded corners matching shadcn docs
- [ ] 2.7 Ensure syntax highlighting works with site theme

## 3. Examples Index Generator

- [ ] 3.1 Create `scripts/generate-examples-index.mjs` script
- [ ] 3.2 Implement recursive scanning of `src/examples/` for `*.tsx` files
- [ ] 3.3 Extract example name from filename (e.g., `accordion-demo` from `accordion-demo.tsx`)
- [ ] 3.4 Extract component group from parent directory (e.g., `accordion` from `accordion/`)
- [ ] 3.5 Implement JSDoc `@tags` extraction from example files
- [ ] 3.6 Output JSON to `content/docs/_examplesIndex.json` with grouped structure
- [ ] 3.7 Test script with existing accordion and button examples

## 4. MDX-to-MD Conversion Script

- [ ] 4.1 Create `scripts/mdx-to-md.mjs` script
- [ ] 4.2 Implement reading of `content/docs/components/*.mdx` files
- [ ] 4.3 Implement frontmatter preservation (title, description)
- [ ] 4.4 Implement `<ComponentPreview>` and other JSX tag stripping
- [ ] 4.5 Preserve standard markdown content (headings, code blocks, tables)
- [ ] 4.6 Create output directory `public/docs/components/` if not exists
- [ ] 4.7 Write converted files with `.md` extension
- [ ] 4.8 Test script with accordion.mdx

## 5. llms.txt Generator

- [ ] 5.1 Create `scripts/generate-llms-txt.mjs` script
- [ ] 5.2 Implement scanning of `public/docs/` for generated `.md` files
- [ ] 5.3 Generate absolute URLs with base `https://ui.kaotypr.site`
- [ ] 5.4 Add header `# @kaotypr/ui Documentation`
- [ ] 5.5 Write `public/llms.txt` with list of URLs
- [ ] 5.6 Test script after running mdx-to-md

## 6. Accordion Documentation Refactor

- [ ] 6.1 Update `content/docs/components/accordion.mdx` to use enhanced `<ComponentPreview>` pattern
- [ ] 6.2 Add API Reference section with props table (Prop, Type, Default, Description)
- [ ] 6.3 Verify all existing examples render correctly with new ComponentPreview
- [ ] 6.4 Test MDX-to-MD conversion produces valid markdown

## 7. Integration & Testing

- [ ] 7.1 Run `pnpm generate` to verify all scripts execute in sequence
- [ ] 7.2 Verify `_examplesIndex.json` is generated correctly
- [ ] 7.3 Verify `public/docs/components/*.md` files are generated
- [ ] 7.4 Verify `public/llms.txt` contains correct URLs
- [ ] 7.5 Run `pnpm build` to verify prebuild hook works
- [ ] 7.6 Test ComponentPreview UI in dev mode (expand/collapse, copy button)
- [ ] 7.7 Verify static export includes generated `.md` files
