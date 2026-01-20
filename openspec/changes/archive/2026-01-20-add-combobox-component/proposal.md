# Change: Add Combobox Component

## Why

The library currently lacks a data-driven combobox component that combines text input with a dropdown list for selection. While `Select` provides static dropdown selection and `Command` provides search functionality, neither offers a unified combobox experience with features like data-driven options, infinite scroll, search filtering, and clearable selection—features commonly needed in modern web applications.

## What Changes

- **ADDED** `Combobox` component with data-driven options via `data` prop
- **ADDED** Built-in search/filtering functionality using cmdk under the hood
- **ADDED** Search debouncing with `debounceTime` prop
- **ADDED** Infinite scroll support for large datasets with `onLoadMore` callback
- **ADDED** Clear button to reset selection with `clearable` prop
- **ADDED** Option grouping via `group` property on data items
- **ADDED** Single-select mode with controlled/uncontrolled value management
- **ADDED** Loading state with customizable content
- **ADDED** Empty state with `emptyMessage` prop for custom no-results message
- **ADDED** Responsive mode with `enableResponsive` prop (switches to Drawer on mobile)
- **ADDED** Keyboard navigation (arrow keys, enter, escape)
- **ADDED** Disabled items and component-level disabled state
- **ADDED** Custom item rendering via render prop
- **ADDED** Storybook stories documenting all features

## Impact

- Affected specs: `combobox` (new capability)
- Affected code:
  - `packages/ui/src/components/ui/combobox.tsx` (new file)
  - `packages/ui/src/stories/ui/combobox/` (new stories)
