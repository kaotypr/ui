## ADDED Requirements

### Requirement: DatePicker Single Date Selection

The DatePicker component SHALL provide a popover-based interface for selecting a single date using the Calendar component.

#### Scenario: Open date picker popover

- **WHEN** the user clicks the DatePicker trigger button
- **THEN** a popover SHALL open containing the Calendar component

#### Scenario: Select a date

- **WHEN** the user clicks on a date in the calendar
- **THEN** the selected date SHALL be set as the value
- **AND** the popover SHALL close
- **AND** the trigger SHALL display the formatted date

#### Scenario: Close popover without selection

- **WHEN** the user clicks outside the popover or presses Escape
- **THEN** the popover SHALL close
- **AND** the previous value SHALL be preserved

---

### Requirement: DatePicker Value Control

The DatePicker component SHALL support both controlled and uncontrolled value management with support for Date objects and ISO strings.

#### Scenario: Uncontrolled date selection

- **WHEN** a user selects a date without `value` prop being set
- **THEN** the DatePicker SHALL update its internal state and display the formatted date

#### Scenario: Controlled date selection

- **WHEN** the DatePicker has `value` and `onValueChange` props
- **THEN** selection changes SHALL trigger `onValueChange` with the new value
- **AND** the displayed value SHALL reflect the controlled `value` prop

#### Scenario: Date object value

- **WHEN** the `value` prop is a Date object
- **THEN** `onValueChange` SHALL be called with a Date object

#### Scenario: ISO string value

- **WHEN** the `value` prop is an ISO string
- **THEN** `onValueChange` SHALL be called with an ISO string

#### Scenario: Default value

- **WHEN** `defaultValue` is provided without `value`
- **THEN** the DatePicker SHALL initialize with the default value

---

### Requirement: DatePicker Display Format

The DatePicker component SHALL support customizable date display format using date-fns format patterns.

#### Scenario: Default format

- **WHEN** no `format` prop is provided
- **THEN** the date SHALL be displayed using the default format "PPP" (e.g., "January 19, 2026")

#### Scenario: Custom format

- **WHEN** `format` prop is set to "MM/dd/yyyy"
- **AND** the selected date is January 19, 2026
- **THEN** the trigger SHALL display "01/19/2026"

#### Scenario: Format with time

- **WHEN** `format` prop is set to "PPP HH:mm"
- **AND** `showTime` is true
- **AND** the selected date is January 19, 2026 at 14:30
- **THEN** the trigger SHALL display "January 19, 2026 14:30"

---

### Requirement: DatePicker Time Selection

The DatePicker component SHALL support optional time selection with configurable granularity via `showTime`, `showHours`, `showMinutes`, and `showSeconds` props.

#### Scenario: Enable time selection

- **WHEN** `showTime` is true
- **THEN** time input controls SHALL be displayed below the calendar
- **AND** hours and minutes inputs SHALL be shown by default

#### Scenario: Time selection with seconds

- **WHEN** `showTime` is true
- **AND** `showSeconds` is true
- **THEN** hours, minutes, and seconds inputs SHALL be displayed

#### Scenario: Selective time fields

- **WHEN** `showTime` is true
- **AND** `showHours` is true
- **AND** `showMinutes` is false
- **THEN** only the hours input SHALL be displayed

#### Scenario: Time value update

- **WHEN** the user changes the time inputs
- **THEN** the value SHALL be updated with the new time
- **AND** `onValueChange` SHALL be called with the updated datetime

#### Scenario: Date-only mode

- **WHEN** `showTime` is false or not provided
- **THEN** no time inputs SHALL be displayed
- **AND** the selected value SHALL have time set to 00:00:00

---

### Requirement: DatePicker Clear Functionality

The DatePicker component SHALL provide an optional clear button to reset the selection when the `clearable` prop is true.

#### Scenario: Show clear button when clearable

- **WHEN** `clearable` is true and a value is selected
- **THEN** a clear button SHALL be visible in the trigger

#### Scenario: Clear selection on click

- **WHEN** the user clicks the clear button
- **THEN** the selection SHALL be cleared
- **AND** `onValueChange` SHALL be called with `undefined`

#### Scenario: Hide clear button when empty

- **WHEN** `clearable` is true but no value is selected
- **THEN** the clear button SHALL NOT be visible

---

### Requirement: DatePicker Calendar Props Pass-through

The DatePicker component SHALL accept a `calendarProps` prop to customize the underlying Calendar component, excluding `selected`, `onSelect`, and `mode` props which are managed internally.

#### Scenario: Pass disabled dates

- **WHEN** `calendarProps.disabled` is set to disable weekends
- **THEN** weekend dates in the calendar SHALL be disabled and not selectable

#### Scenario: Pass initial month

- **WHEN** `calendarProps.defaultMonth` is set to a specific month
- **THEN** the calendar SHALL initially display that month

#### Scenario: Pass custom class names

- **WHEN** `calendarProps.className` is provided
- **THEN** the Calendar component SHALL receive the custom class name

#### Scenario: Managed props are excluded

- **WHEN** attempting to pass `selected`, `onSelect`, or `mode` via `calendarProps`
- **THEN** these props SHALL be ignored (enforced by TypeScript type)

---

### Requirement: DatePicker Disabled State

The DatePicker component SHALL support a disabled state that prevents all user interaction.

#### Scenario: Disable entire component

- **WHEN** `disabled` is true
- **THEN** the trigger SHALL be visually styled as disabled
- **AND** clicking the trigger SHALL NOT open the popover
- **AND** keyboard events SHALL NOT open the popover

---

### Requirement: DatePicker Keyboard Navigation

The DatePicker component SHALL support keyboard navigation for accessibility.

#### Scenario: Open popover with keyboard

- **WHEN** the trigger is focused and user presses Enter, Space, or Arrow Down
- **THEN** the popover SHALL open

#### Scenario: Close popover with Escape

- **WHEN** the popover is open and user presses Escape
- **THEN** the popover SHALL close
- **AND** focus SHALL return to the trigger

#### Scenario: Navigate calendar with keyboard

- **WHEN** the popover is open
- **THEN** the Calendar component's keyboard navigation SHALL be available
- **AND** arrow keys SHALL navigate between dates
- **AND** Enter SHALL select the focused date

---

### Requirement: DatePicker Placeholder

The DatePicker component SHALL display a customizable placeholder when no date is selected.

#### Scenario: Default placeholder

- **WHEN** no value is selected and no `placeholder` prop is provided
- **THEN** the trigger SHALL display "Pick a date"

#### Scenario: Custom placeholder

- **WHEN** no value is selected and `placeholder` prop is "Select date..."
- **THEN** the trigger SHALL display "Select date..."

#### Scenario: Value replaces placeholder

- **WHEN** a date is selected
- **THEN** the formatted date SHALL replace the placeholder text
