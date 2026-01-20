# Change: Add Multi-Combobox Component

## Why

The library has a single-select `Combobox` component but lacks a multi-select variant. Many applications require selecting multiple values from a searchable dropdown, displaying them as badges with the ability to control how many badges are visible before collapsing into a "+N more" indicator. This is a common UX pattern for tag selection, multi-category filtering, and user assignment interfaces.

## What Changes

- **ADDED** `MultiCombobox` component extending `Combobox` patterns for multi-select
- **ADDED** Selected values displayed as badges in the trigger area
- **ADDED** `maxDisplayedItems` prop to control how many badges are shown before collapsing
- **ADDED** Expandable badge display with "+N more" badge that expands to show all selections
- **ADDED** "Show less" badge when expanded to collapse back to limited view
- **ADDED** `defaultExpanded` prop to control initial expanded state (default: false)
- **ADDED** Individual badge removal via X button on each badge
- **ADDED** Multi-value controlled/uncontrolled state management with `value: string[]` and `onValueChange: (value: string[]) => void`
- **ADDED** All existing Combobox features: search, debounce, grouping, infinite scroll, loading, disabled, clearable, responsive mode

## Impact

- Affected specs: `multi-combobox` (new capability)
- Affected code:
  - `packages/ui/src/components/ui/multi-combobox.tsx` (new file)
  - `packages/ui/src/index.ts` (export addition)
