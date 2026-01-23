# Change: Add scroll-area based TimePicker component to base-ui

## Why

The `base-ui` package needs a TimePicker component for selecting time values. A scroll-area based column layout provides good user experience by displaying all options simultaneously in scrollable columns, allowing fast visual scanning and selection.

## What Changes

- **ADDED** TimePicker component to `packages/base-ui/src/components/ui/time-picker.tsx`
- **ADDED** TimePicker Scroll Selection requirement for scroll-based interaction with columns
- **MODIFIED** TimePicker Time Selection requirement to use scroll-area columns
- **MODIFIED** TimePicker Display requirement to use popover-only layout with trigger button and summary bar

## Impact

- Affected specs: `time-picker`
- Affected code:
  - `packages/base-ui/src/components/ui/time-picker.tsx` (new component)
  - `packages/base-ui/src/stories/time-picker/time-picker.stories.tsx` (existing stories)
  - `packages/base-ui/package.json` (exports)
  - `packages/base-ui/src/index.ts` (main exports)
- Dependencies: Uses existing `popover`, `scroll-area`, and `button` components from base-ui
