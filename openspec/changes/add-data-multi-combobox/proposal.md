# Change: Add DataMultiCombobox Component

## Why

The `data-combobox` component provides a data-driven single-select combobox using `@base-ui/react` primitives. However, there's no multi-select variant for base-ui that follows the same architecture. The existing `multi-combobox` in the `ui` package uses `cmdk` (Command component), which is a different primitive. This change introduces `data-multi-combobox` to provide a consistent multi-select experience using the same `@base-ui/react` Combobox primitives as `data-combobox`.

## What Changes

- **ADDED** `DataMultiCombobox` component to `packages/base-ui/src/components/ui/data-multi-combobox.tsx`
- **ADDED** Multi-value selection support with array-based value management
- **ADDED** Badge-based display of selected values in trigger
- **ADDED** Collapsible badge display with `maxDisplayedItems` prop
- **ADDED** Expandable "+N more" / "Show less" badge toggle
- **ADDED** Individual item removal via badge X button
- **ADDED** Clear all functionality via `clearable` prop
- **ADDED** Checkbox-style selection indicators for multi-select UX
- **ADDED** Storybook stories for the new component

## Impact

- Affected specs: `data-multi-combobox` (new capability)
- Affected code:
  - `packages/base-ui/src/components/ui/data-multi-combobox.tsx` (new component)
  - `packages/base-ui/src/stories/data-multi-combobox/` (new stories)
  - `packages/base-ui/src/index.ts` (export)
  - `packages/base-ui/package.json` (export entry)
