# time-picker Specification

## Purpose
TBD - created by archiving change add-time-picker-component. Update Purpose after archive.
## Requirements
### Requirement: TimePicker Time Selection

The TimePicker component SHALL provide a scroll/select-based interface for selecting time values using Select components for each time unit.

#### Scenario: Select hours

- **WHEN** the user opens the hours Select
- **THEN** a scrollable list of hour options SHALL be displayed
- **AND** the user can select an hour value

#### Scenario: Select minutes

- **WHEN** `showMinutes` is true (default)
- **AND** the user opens the minutes Select
- **THEN** a scrollable list of minute options SHALL be displayed
- **AND** the user can select a minute value

#### Scenario: Select seconds

- **WHEN** `showSeconds` is true
- **AND** the user opens the seconds Select
- **THEN** a scrollable list of second options SHALL be displayed
- **AND** the user can select a second value

#### Scenario: Hide optional time units

- **WHEN** `showMinutes` is false
- **THEN** the minutes Select SHALL NOT be displayed
- **AND** the output value SHALL omit minutes

---

### Requirement: TimePicker Value Control

The TimePicker component SHALL support both controlled and uncontrolled value management with string format values.

#### Scenario: Uncontrolled time selection

- **WHEN** a user selects time values without `value` prop being set
- **THEN** the TimePicker SHALL update its internal state
- **AND** display the selected time

#### Scenario: Controlled time selection

- **WHEN** the TimePicker has `value` and `onValueChange` props
- **THEN** selection changes SHALL trigger `onValueChange` with the new string value
- **AND** the displayed value SHALL reflect the controlled `value` prop

#### Scenario: Default value

- **WHEN** `defaultValue` is provided without `value`
- **THEN** the TimePicker SHALL initialize with the default value

#### Scenario: String value format (24-hour)

- **WHEN** `meridiem` is false (default)
- **AND** the selected time is 14:30:45
- **THEN** `onValueChange` SHALL be called with `"14:30"` (without seconds)
- **OR** `onValueChange` SHALL be called with `"14:30:45"` (if `showSeconds` is true)

#### Scenario: String value format (12-hour)

- **WHEN** `meridiem` is true
- **AND** the selected time is 2:30 PM
- **THEN** `onValueChange` SHALL be called with `"02:30 PM"` (without seconds)
- **OR** `onValueChange` SHALL be called with `"02:30:45 PM"` (if `showSeconds` is true)

---

### Requirement: TimePicker Time Format

The TimePicker component SHALL support configurable 12-hour and 24-hour time formats via the `meridiem` prop.

#### Scenario: 24-hour format (default)

- **WHEN** `meridiem` is false or not provided
- **THEN** the hours Select SHALL display options from 00 to 23
- **AND** no AM/PM selector SHALL be displayed

#### Scenario: 12-hour format with meridiem

- **WHEN** `meridiem` is true
- **THEN** the hours Select SHALL display options from 01 to 12
- **AND** an AM/PM Select SHALL be displayed

#### Scenario: Select AM/PM

- **WHEN** `meridiem` is true
- **AND** the user selects AM or PM
- **THEN** the time value SHALL be updated to reflect the meridiem
- **AND** `onValueChange` SHALL be called with the updated value

#### Scenario: Parse 24-hour input with meridiem display

- **WHEN** `value` is `"14:30"` (24-hour format)
- **AND** `meridiem` is true
- **THEN** the display SHALL show 02, 30, and PM selected

---

### Requirement: TimePicker Display Modes

The TimePicker component SHALL support both inline and popover display modes via the `mode` prop.

#### Scenario: Inline mode (default)

- **WHEN** `mode` is "inline" or not provided
- **THEN** the Select components SHALL be displayed directly without a trigger

#### Scenario: Popover mode trigger

- **WHEN** `mode` is "popover"
- **THEN** a trigger button SHALL be displayed with a clock icon
- **AND** clicking the trigger SHALL open a popover containing the Select components

#### Scenario: Popover display value

- **WHEN** `mode` is "popover"
- **AND** a time value is selected
- **THEN** the trigger button SHALL display the formatted time value

#### Scenario: Popover placeholder

- **WHEN** `mode` is "popover"
- **AND** no value is selected
- **THEN** the trigger button SHALL display the placeholder text

#### Scenario: Close popover on selection complete

- **WHEN** `mode` is "popover"
- **AND** the user has selected all visible time units
- **THEN** the popover MAY remain open for adjustment
- **AND** clicking outside SHALL close the popover

---

### Requirement: TimePicker Step Intervals

The TimePicker component SHALL support configurable step intervals for each time unit via `hourStep`, `minuteStep`, and `secondStep` props.

#### Scenario: Default step intervals

- **WHEN** step props are not provided
- **THEN** all steps SHALL default to 1
- **AND** all values SHALL be available (0-59 for minutes/seconds, 0-23 or 1-12 for hours)

#### Scenario: Custom minute step

- **WHEN** `minuteStep` is 15
- **THEN** the minutes Select SHALL only show options 00, 15, 30, 45

#### Scenario: Custom hour step

- **WHEN** `hourStep` is 2
- **AND** `meridiem` is false
- **THEN** the hours Select SHALL only show options 00, 02, 04, ..., 22

---

### Requirement: TimePicker Min/Max Constraints

The TimePicker component SHALL support min/max time constraints via `minTime` and `maxTime` props.

#### Scenario: Disable times before minTime

- **WHEN** `minTime` is "09:00"
- **THEN** hour/minute combinations before 09:00 SHALL be disabled
- **AND** the user SHALL NOT be able to select times before 09:00

#### Scenario: Disable times after maxTime

- **WHEN** `maxTime` is "17:00"
- **THEN** hour/minute combinations after 17:00 SHALL be disabled
- **AND** the user SHALL NOT be able to select times after 17:00

#### Scenario: Combined min/max constraints

- **WHEN** `minTime` is "09:00" and `maxTime` is "17:00"
- **THEN** only times between 09:00 and 17:00 (inclusive) SHALL be selectable

#### Scenario: Constraint with meridiem format

- **WHEN** `minTime` is "09:00 AM"
- **AND** `meridiem` is true
- **THEN** times before 9:00 AM SHALL be disabled

---

### Requirement: TimePicker Clear Functionality

The TimePicker component SHALL provide an optional clear button to reset the selection when the `clearable` prop is true.

#### Scenario: Show clear button when clearable (popover mode)

- **WHEN** `clearable` is true
- **AND** `mode` is "popover"
- **AND** a value is selected
- **THEN** a clear button SHALL be visible in the trigger

#### Scenario: Clear selection on click

- **WHEN** the user clicks the clear button
- **THEN** the selection SHALL be cleared
- **AND** `onValueChange` SHALL be called with `undefined`

#### Scenario: Hide clear button when empty

- **WHEN** `clearable` is true but no value is selected
- **THEN** the clear button SHALL NOT be visible

---

### Requirement: TimePicker Disabled State

The TimePicker component SHALL support a disabled state that prevents all user interaction.

#### Scenario: Disable entire component

- **WHEN** `disabled` is true
- **THEN** all Select components SHALL be visually styled as disabled
- **AND** the user SHALL NOT be able to interact with any Select

#### Scenario: Disable popover trigger

- **WHEN** `disabled` is true
- **AND** `mode` is "popover"
- **THEN** the trigger button SHALL be disabled
- **AND** clicking SHALL NOT open the popover

---

### Requirement: TimePicker Keyboard Navigation

The TimePicker component SHALL support keyboard navigation for accessibility.

#### Scenario: Navigate between Select components

- **WHEN** focus is on a Select component
- **AND** the user presses Tab
- **THEN** focus SHALL move to the next Select component

#### Scenario: Open Select with keyboard

- **WHEN** focus is on a Select component
- **AND** the user presses Enter, Space, or Arrow Down
- **THEN** the Select dropdown SHALL open

#### Scenario: Navigate Select options

- **WHEN** a Select dropdown is open
- **THEN** Arrow Up/Down SHALL navigate between options
- **AND** Enter SHALL select the focused option

#### Scenario: Close with Escape

- **WHEN** a Select dropdown or popover is open
- **AND** the user presses Escape
- **THEN** the dropdown/popover SHALL close

---

### Requirement: TimePicker Placeholder

The TimePicker component SHALL display a customizable placeholder in popover mode when no time is selected.

#### Scenario: Default placeholder

- **WHEN** `mode` is "popover"
- **AND** no value is selected
- **AND** no `placeholder` prop is provided
- **THEN** the trigger SHALL display "Select time"

#### Scenario: Custom placeholder

- **WHEN** `mode` is "popover"
- **AND** no value is selected
- **AND** `placeholder` prop is "Choose a time..."
- **THEN** the trigger SHALL display "Choose a time..."

#### Scenario: Value replaces placeholder

- **WHEN** a time is selected
- **THEN** the formatted time SHALL replace the placeholder text

