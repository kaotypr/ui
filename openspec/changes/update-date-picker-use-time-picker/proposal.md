# Change: Update DatePicker to Use TimePicker Component

## Why

The DatePicker component currently uses basic `<Input type="number">` elements for time selection, which provides a suboptimal user experience. The existing TimePicker component offers a more polished, accessible, and feature-rich time selection interface using Select dropdowns. By reusing the TimePicker component, we achieve:

1. Consistent time selection UX across the library
2. Access to TimePicker features: 12-hour format (AM/PM), step intervals, min/max constraints
3. Better maintainability by eliminating duplicate time input logic

## What Changes

- **MODIFIED**: DatePicker time selection section now uses `TimePicker` component with `mode="inline"` instead of raw `<Input>` elements
- **ADDED**: New `timePickerProps` prop to allow customization of the embedded TimePicker (meridiem, step intervals, time constraints)
- **PRESERVED**: Existing `showTime`, `showHours`, `showMinutes`, `showSeconds` props continue to work as before
- **ENHANCED**: DatePicker inherits TimePicker's improved accessibility and keyboard navigation for time selection

## Impact

- Affected specs: `date-picker`
- Affected code: `packages/ui/src/components/ui/date-picker.tsx`
- Dependencies: TimePicker component (`~/components/ui/time-picker`)
- Breaking changes: None - existing API is preserved, `timePickerProps` is additive
