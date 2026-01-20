## 1. Implementation

- [ ] 1.1 Add `TimePicker` and `TimePickerProps` import to DatePicker component
- [ ] 1.2 Define `timePickerProps` type (exclude managed props: `value`, `defaultValue`, `onValueChange`, `mode`, `clearable`, `disabled`, `placeholder`)
- [ ] 1.3 Add `timePickerProps` prop to `DatePickerProps` interface
- [ ] 1.4 Replace `<Input>` time fields with `TimePicker` component using `mode="inline"`
- [ ] 1.5 Bridge existing `showHours`, `showMinutes`, `showSeconds` props to TimePicker
- [ ] 1.6 Convert time handling to work with TimePicker's string value format
- [ ] 1.7 Ensure time changes propagate correctly to DatePicker's `handleDateChange`

## 2. Validation

- [ ] 2.1 Run `pnpm tsc --noEmit` to verify type correctness
- [ ] 2.2 Run `pnpm lint` to check code quality
- [ ] 2.3 Update Storybook stories to demonstrate `timePickerProps` usage

## 3. Testing

- [ ] 3.1 Verify basic time selection still works (hours, minutes, seconds)
- [ ] 3.2 Test new `timePickerProps.meridiem` for 12-hour format support
- [ ] 3.3 Test step intervals via `timePickerProps.hourStep`, `minuteStep`, `secondStep`
- [ ] 3.4 Test time constraints via `timePickerProps.minTime`, `maxTime`
- [ ] 3.5 Verify keyboard navigation works in embedded time picker
