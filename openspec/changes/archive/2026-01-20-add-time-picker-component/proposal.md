# Change: Add TimePicker Component

## Why

`@kaotypr/ui` provides a DatePicker component with optional time selection, but lacks a dedicated TimePicker for scenarios where only time input is needed (e.g., scheduling, alarm settings, business hours configuration). A standalone TimePicker provides better UX for time-only use cases and avoids unnecessary calendar UI overhead.

## What Changes

- Add new `TimePicker` component (`packages/ui/src/components/ui/time-picker.tsx`)
- Scroll/Select-based UI using existing Select component for each time unit
- String value format (e.g., `"14:30"`, `"14:30:00"`, `"02:30 PM"`)
- Configurable 12/24-hour format via `meridiem` prop (24-hour by default)
- Configurable time units via `showHours`, `showMinutes`, `showSeconds` props
- Support both inline and popover display modes via `mode` prop
- Min/max time constraints support
- Clearable selection support
- Storybook stories for documentation and testing

## Impact

- Affected specs: None (new capability)
- Affected code:
  - `packages/ui/src/components/ui/time-picker.tsx` (new)
  - `packages/ui/src/index.ts` (export)
  - `packages/ui/src/stories/ui/time-picker/` (new stories)
- Dependencies: Uses existing `Select`, `Popover`, `Button` components
