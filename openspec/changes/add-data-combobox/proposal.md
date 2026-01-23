# Change: Add DataCombobox component to base-ui

## Why

The `base-ui` package has primitive combobox components (`Combobox*`) using `@base-ui/react`, but consumers need to manually compose them and handle data management. A higher-level `DataCombobox` component will provide a data-driven API that simplifies common use cases: passing an array of options, handling selection, search filtering, infinite scroll, and loading states—all without composing primitives manually.

## What Changes

- **ADDED** `DataCombobox` component to `packages/base-ui/src/components/ui/data-combobox.tsx`
- **ADDED** `DataComboboxOption` interface for option data structure
- **ADDED** Data-Combobox specification with all requirements

## Impact

- Affected specs: `data-combobox` (new capability)
- Affected code:
  - `packages/base-ui/src/components/ui/data-combobox.tsx` (new component)
  - `packages/base-ui/src/stories/data-combobox/` (new stories)
  - `packages/base-ui/package.json` (exports)
  - `packages/base-ui/src/index.ts` (main exports)
- Dependencies: Uses existing `Combobox*` primitives, `Popover`, `Drawer`, `ScrollArea`, and `Button` components from base-ui
