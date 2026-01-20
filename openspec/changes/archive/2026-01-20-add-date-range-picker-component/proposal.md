# Change: Add DateRangePicker Component

## Why

Users need to select date ranges (e.g., booking periods, report filters, vacation dates) with an intuitive dual-month calendar interface. The existing `DatePicker` only supports single date selection. A dedicated `DateRangePicker` component provides better UX for range selection by showing two consecutive months side-by-side, reducing navigation and improving context.

## What Changes

- **NEW**: Add `DateRangePicker` component to `@kaotypr/ui` package
  - Dual-month calendar display (2 months side-by-side)
  - Date range selection (start and end dates)
  - Default display format: `dd/MM/yy - dd/MM/yy` (date only)
  - With time: `dd/MM/yy HH:mm - dd/MM/yy HH:mm` format
  - Optional time picker integration using existing `TimePicker` component
  - Controlled and uncontrolled value modes
  - Clearable option
  - Disabled state support
  - Customizable calendar props
- **NEW**: Export `DateRangePicker` from `@kaotypr/ui` and `@kaotypr/ui/date-range-picker`
- **NEW**: Add Storybook stories for `DateRangePicker`

## Impact

- Affected specs: `date-range-picker` (new capability)
- Affected code:
  - `packages/ui/src/components/ui/date-range-picker.tsx` (new file)
  - `packages/ui/src/index.ts` (export addition)
  - `packages/ui/src/stories/ui/date-range-picker/` (new stories)
  - `packages/ui/package.json` (new export entry)
