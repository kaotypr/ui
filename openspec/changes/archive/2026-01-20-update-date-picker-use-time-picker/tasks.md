## 1. Implementation

- [x] 1.1 Add `TimePicker` and `TimePickerProps` import to DatePicker component
- [x] 1.2 Define `timePickerProps` type (exclude managed props: `value`, `defaultValue`, `onValueChange`, `mode`, `clearable`, `disabled`, `placeholder`)
- [x] 1.3 Add `timePickerProps` prop to `DatePickerProps` interface
- [x] 1.4 Replace `<Input>` time fields with `TimePicker` component using `mode="inline"`
- [x] 1.5 Bridge existing `showHours`, `showMinutes`, `showSeconds` props to TimePicker
- [x] 1.6 Convert time handling to work with TimePicker's string value format
- [x] 1.7 Ensure time changes propagate correctly to DatePicker's `handleDateChange`

## 2. Validation

- [x] 2.1 Run `pnpm tsc --noEmit` to verify type correctness
- [x] 2.2 Run `pnpm lint` to check code quality
- [x] 2.3 Update Storybook stories to demonstrate `timePickerProps` usage

## 3. Testing

- [x] 3.1 Verify basic time selection still works (hours, minutes, seconds)
- [x] 3.2 Test new `timePickerProps.meridiem` for 12-hour format support
- [x] 3.3 Test step intervals via `timePickerProps.hourStep`, `minuteStep`, `secondStep`
- [x] 3.4 Test time constraints via `timePickerProps.minTime`, `maxTime`
- [x] 3.5 Verify keyboard navigation works in embedded time picker
