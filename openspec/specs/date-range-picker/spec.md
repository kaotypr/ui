# date-range-picker Specification

## Purpose
TBD - created by archiving change add-date-range-picker-component. Update Purpose after archive.
## Requirements
### Requirement: Date Range Selection

The DateRangePicker SHALL allow users to select a date range consisting of a start date and an end date using a dual-month calendar display.

#### Scenario: User selects date range

- **WHEN** user clicks on the DateRangePicker trigger button
- **THEN** a popover opens displaying two consecutive months side-by-side
- **AND** user can click to select a start date, then click again to select an end date
- **AND** the selected range is visually highlighted across both calendars

#### Scenario: User selects same start and end date

- **WHEN** user selects the same date for both start and end
- **THEN** the component accepts this as a valid single-day range

#### Scenario: User selects end date before start date

- **WHEN** user has selected a start date
- **AND** user clicks on a date before the selected start date
- **THEN** the clicked date becomes the new start date
- **AND** the previous start date is cleared, awaiting new end date selection

### Requirement: Display Format

The DateRangePicker SHALL display the selected date range in a formatted string based on whether time selection is enabled.

#### Scenario: Date-only display format

- **WHEN** `showTime` is `false` or not provided
- **THEN** the trigger button displays the range in format `dd/MM/yy - dd/MM/yy`
- **AND** placeholder text is shown when no range is selected

#### Scenario: Date-time display format

- **WHEN** `showTime` is `true`
- **THEN** the trigger button displays the range in format `dd/MM/yy HH:mm - dd/MM/yy HH:mm`
- **AND** placeholder text is shown when no range is selected

#### Scenario: Partial selection display

- **WHEN** only the start date is selected (no end date yet)
- **THEN** the display shows the start date followed by the separator and placeholder for end date

### Requirement: Value Control

The DateRangePicker SHALL support both controlled and uncontrolled value modes with flexible value types.

#### Scenario: Controlled mode with Date objects

- **WHEN** `value` prop is provided as `{ from: Date, to: Date }`
- **THEN** the component renders the provided value
- **AND** calls `onValueChange` with Date objects when selection changes

#### Scenario: Controlled mode with ISO strings

- **WHEN** `value` prop is provided as `{ from: string, to: string }` (ISO format)
- **THEN** the component parses and renders the provided dates
- **AND** calls `onValueChange` with ISO strings when selection changes

#### Scenario: Uncontrolled mode with defaultValue

- **WHEN** only `defaultValue` prop is provided
- **THEN** the component manages its own state internally
- **AND** initializes with the provided default value
- **AND** calls `onValueChange` when selection changes

#### Scenario: Uncontrolled mode without defaultValue

- **WHEN** neither `value` nor `defaultValue` is provided
- **THEN** the component starts with no selection
- **AND** manages state internally

### Requirement: Time Selection Integration

The DateRangePicker SHALL optionally support time selection for both start and end dates.

#### Scenario: Time picker enabled

- **WHEN** `showTime` prop is `true`
- **THEN** time pickers appear below the calendars for start and end times
- **AND** users can select hours and minutes for each date
- **AND** the popover remains open after date selection to allow time adjustment

#### Scenario: Time picker with configurable units

- **WHEN** `showTime` is `true`
- **AND** `showHours`, `showMinutes`, `showSeconds` props are provided
- **THEN** the time picker displays only the specified units

#### Scenario: Time picker disabled

- **WHEN** `showTime` prop is `false` or not provided
- **THEN** no time pickers are displayed
- **AND** the popover closes after both dates are selected
- **AND** selected dates have time set to midnight (00:00:00)

### Requirement: Clearable Feature

The DateRangePicker SHALL optionally allow users to clear the selected date range.

#### Scenario: Clear button when clearable

- **WHEN** `clearable` prop is `true`
- **AND** a date range is selected
- **THEN** a clear button (X icon) appears in the trigger
- **AND** clicking it clears the selection and calls `onValueChange` with `undefined`

#### Scenario: No clear button when not clearable

- **WHEN** `clearable` prop is `false` or not provided
- **THEN** no clear button is displayed

### Requirement: Disabled State

The DateRangePicker SHALL support a disabled state that prevents user interaction.

#### Scenario: Disabled component

- **WHEN** `disabled` prop is `true`
- **THEN** the trigger button appears visually disabled
- **AND** clicking the trigger does not open the popover
- **AND** the clear button (if present) is non-functional

### Requirement: Calendar Customization

The DateRangePicker SHALL allow customization of the underlying Calendar component.

#### Scenario: Custom calendar props

- **WHEN** `calendarProps` are provided
- **THEN** they are passed to the Calendar component
- **AND** can customize disabled dates, locale, week start day, etc.

#### Scenario: Dual month display

- **WHEN** the popover is opened
- **THEN** two consecutive months are displayed side-by-side
- **AND** navigation controls allow moving through months
- **AND** both months update when navigating

### Requirement: Accessibility

The DateRangePicker SHALL be accessible and follow ARIA best practices.

#### Scenario: Keyboard navigation

- **WHEN** the popover is open
- **THEN** users can navigate dates using arrow keys
- **AND** can select dates using Enter or Space
- **AND** can close the popover using Escape

#### Scenario: Screen reader support

- **WHEN** a screen reader is active
- **THEN** the trigger button announces its role and current value
- **AND** calendar dates announce their date and selection state
- **AND** the clear button has an accessible label

### Requirement: Styling

The DateRangePicker SHALL support styling customization consistent with other components.

#### Scenario: Custom className on trigger

- **WHEN** `className` prop is provided
- **THEN** it is applied to the trigger button
- **AND** merges with default classes using `cn()` utility

#### Scenario: Custom contentClassName on popover

- **WHEN** `contentClassName` prop is provided
- **THEN** it is applied to the popover content container

#### Scenario: Range highlighting

- **WHEN** a date range is selected
- **THEN** the start date has distinct styling (rounded left, primary background)
- **AND** the end date has distinct styling (rounded right, primary background)
- **AND** dates in between have range styling (accent background, no rounding)

