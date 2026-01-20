## MODIFIED Requirements

### Requirement: DatePicker Time Selection

The DatePicker component SHALL support optional time selection using the embedded `TimePicker` component (with `mode="inline"`) with configurable granularity via `showTime`, `showHours`, `showMinutes`, and `showSeconds` props, and additional customization via `timePickerProps`.

#### Scenario: Enable time selection

- **WHEN** `showTime` is true
- **THEN** a `TimePicker` component with `mode="inline"` SHALL be displayed below the calendar
- **AND** hours and minutes inputs SHALL be shown by default using Select dropdowns

#### Scenario: Time selection with seconds

- **WHEN** `showTime` is true
- **AND** `showSeconds` is true
- **THEN** hours, minutes, and seconds Select dropdowns SHALL be displayed

#### Scenario: Selective time fields

- **WHEN** `showTime` is true
- **AND** `showHours` is true
- **AND** `showMinutes` is false
- **THEN** only the hours Select dropdown SHALL be displayed

#### Scenario: Time value update

- **WHEN** the user changes time values using the TimePicker Selects
- **THEN** the value SHALL be updated with the new time
- **AND** `onValueChange` SHALL be called with the updated datetime

#### Scenario: Date-only mode

- **WHEN** `showTime` is false or not provided
- **THEN** no time inputs SHALL be displayed
- **AND** the selected value SHALL have time set to 00:00:00

---

## ADDED Requirements

### Requirement: DatePicker TimePicker Props Pass-through

The DatePicker component SHALL accept a `timePickerProps` prop to customize the embedded `TimePicker` component, excluding props that are managed internally (`value`, `defaultValue`, `onValueChange`, `mode`, `showHours`, `showMinutes`, `showSeconds`, `clearable`, `disabled`, `placeholder`).

#### Scenario: Pass meridiem format

- **WHEN** `timePickerProps.meridiem` is true
- **AND** `showTime` is true
- **THEN** the time picker SHALL display hours in 12-hour format (1-12)
- **AND** an AM/PM selector SHALL be displayed

#### Scenario: Pass minute step interval

- **WHEN** `timePickerProps.minuteStep` is 15
- **AND** `showTime` is true
- **THEN** the minutes Select SHALL only show options 00, 15, 30, 45

#### Scenario: Pass hour step interval

- **WHEN** `timePickerProps.hourStep` is 2
- **AND** `showTime` is true
- **AND** `timePickerProps.meridiem` is false
- **THEN** the hours Select SHALL only show options 00, 02, 04, ..., 22

#### Scenario: Pass second step interval

- **WHEN** `timePickerProps.secondStep` is 30
- **AND** `showTime` is true
- **AND** `showSeconds` is true
- **THEN** the seconds Select SHALL only show options 00, 30

#### Scenario: Pass min time constraint

- **WHEN** `timePickerProps.minTime` is "09:00"
- **AND** `showTime` is true
- **THEN** hour/minute combinations before 09:00 SHALL be disabled in the Select options

#### Scenario: Pass max time constraint

- **WHEN** `timePickerProps.maxTime` is "17:00"
- **AND** `showTime` is true
- **THEN** hour/minute combinations after 17:00 SHALL be disabled in the Select options

#### Scenario: Pass content styling

- **WHEN** `timePickerProps.className` is provided
- **AND** `showTime` is true
- **THEN** the TimePicker content SHALL receive the custom class name

#### Scenario: Managed props are excluded

- **WHEN** attempting to pass `value`, `defaultValue`, `onValueChange`, `mode`, `showHours`, `showMinutes`, `showSeconds`, `clearable`, `disabled`, or `placeholder` via `timePickerProps`
- **THEN** these props SHALL be ignored (enforced by TypeScript type)
- **AND** the DatePicker SHALL manage these props internally

---

### Requirement: DatePicker Time Picker Accessibility

The DatePicker component SHALL provide accessible time selection via the embedded TimePicker component with full keyboard navigation support.

#### Scenario: Navigate between time Selects

- **WHEN** focus is on a time Select within the DatePicker popover
- **AND** the user presses Tab
- **THEN** focus SHALL move to the next time Select component

#### Scenario: Open time Select with keyboard

- **WHEN** focus is on a time Select
- **AND** the user presses Enter, Space, or Arrow Down
- **THEN** the Select dropdown SHALL open

#### Scenario: Navigate time Select options

- **WHEN** a time Select dropdown is open
- **THEN** Arrow Up/Down SHALL navigate between options
- **AND** Enter SHALL select the focused option

#### Scenario: Time Select has aria labels

- **WHEN** `showTime` is true
- **THEN** each time Select SHALL have an appropriate aria-label ("Hours", "Minutes", "Seconds", or "AM/PM")
