# Change: Add DatePicker Component

## Why

`@kaotypr/ui` currently provides a `Calendar` component for date display but lacks a complete `DatePicker` component that combines the calendar with a trigger button/input for date selection workflows. A DatePicker is a common form control needed in most applications for collecting date input from users.

## What Changes

- Add new `DatePicker` component (`packages/ui/src/components/ui/date-picker.tsx`)
- Single date selection mode only (no range support)
- Optional time selection with configurable granularity (hours, minutes, seconds)
- Customizable display format using date-fns format patterns
- Support for both `Date` objects and ISO strings as value
- Pass-through `calendarProps` for full Calendar customization (excluding `selected`, `onSelect`, `mode`)
- Clearable selection support
- Storybook stories for documentation and testing

## Impact

- Affected specs: None (new capability)
- Affected code:
  - `packages/ui/src/components/ui/date-picker.tsx` (new)
  - `packages/ui/src/index.ts` (export)
  - `packages/ui/src/stories/ui/date-picker/` (new stories)
- Dependencies: Uses existing `Calendar`, `Popover`, `Button`, `Input` components and `date-fns` peer dependency
