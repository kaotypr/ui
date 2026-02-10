## Context

The `ComponentPreviewClient` component currently has a header bar layout with "View Code" and "Copy" buttons. This doesn't match the clean shadcn/ui documentation style where:
- Collapsed code shows as a teaser with gradient fade
- "View Code" button overlays the faded preview
- Copy button floats in the code area

Current file: `apps/ui-docs/src/components/component-preview-client.tsx`

## Goals / Non-Goals

**Goals:**
- Match shadcn/ui component preview visual style
- Collapsed: 3 lines visible with fade gradient, centered "View Code" button
- Expanded: Max 12 lines visible height, scrollable for longer code
- Copy button as floating icon on top-right of code section

**Non-Goals:**
- Changing the server component (`component-preview.tsx`)
- Modifying the source code rendering/highlighting
- Adding new functionality beyond visual changes

## Decisions

### 1. Collapsed state layout
Remove the header bar. Show ~3 lines of code (~4.5rem height based on ~1.5rem line height) with:
- Gradient fade from transparent to background color
- "View Code" button positioned absolute, centered over the faded area

**Rationale**: Matches shadcn style, cleaner appearance, code is still visible as context.

### 2. Expanded state layout
- Set max visible height to ~12 lines (~18rem)
- Enable `overflow-y: auto` for scrolling
- Show floating copy button (top-right, absolute positioned)

**Rationale**: 12 lines provides good context without overwhelming the page. Scrolling allows viewing full source.

### 3. Copy button visibility
- Hidden in collapsed state (no need, user hasn't committed to viewing code)
- Visible in expanded state as small icon button (top-right corner)

**Rationale**: Reduces visual clutter in collapsed state, copy is only relevant when actively viewing code.

## Risks / Trade-offs

- **[Layout shift on expand]** → Use CSS transition on max-height for smooth animation
- **[Line height variance]** → Use fixed rem values rather than counting actual lines
