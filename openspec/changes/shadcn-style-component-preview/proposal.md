## Why

The current ComponentPreview in ui-docs doesn't match the shadcn/ui documentation style. The code section has a header bar with buttons which takes up space and doesn't provide the clean, minimal aesthetic that shadcn's component previews have.

## What Changes

- Redesign the ComponentPreview component to match shadcn/ui style
- **Collapsed state**: Show 3 lines of code with a fade gradient overlay, "View Code" button centered/overlaid on the faded area
- **Expanded state**: Show max 12 visible lines with vertical scrolling to view full source
- **Copy button**: Move to floating absolute position on top-right of the source code section (visible in expanded state)
- Remove the header bar with separate "View Code" and "Copy" buttons

## Capabilities

### New Capabilities

_None - this is a UI refinement of existing capability_

### Modified Capabilities

_None - no spec-level behavior changes, only visual/UX implementation changes_

## Impact

- `apps/ui-docs/src/components/component-preview-client.tsx` - Main file to modify
- No API changes - same props interface
- No breaking changes to existing MDX documentation
