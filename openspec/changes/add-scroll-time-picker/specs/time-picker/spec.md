## MODIFIED Requirements

### Requirement: TimePicker Time Selection

The TimePicker component SHALL provide a scroll-area based interface for selecting time values using scrollable columns for each time unit.

#### Scenario: Select hours

- **WHEN** the user views the hours column
- **THEN** a scrollable list of hour options SHALL be displayed in a vertical column
- **AND** the user can click an hour value to select it
- **AND** the selected hour SHALL display a checkmark indicator

#### Scenario: Select minutes

- **WHEN** `showMinutes` is true (default)
- **THEN** a scrollable minutes column SHALL be displayed next to the hours column
- **AND** the user can click a minute value to select it
- **AND** the selected minute SHALL display a checkmark indicator

#### Scenario: Select seconds

- **WHEN** `showSeconds` is true
- **THEN** a scrollable seconds column SHALL be displayed next to the minutes column
- **AND** the user can click a second value to select it
- **AND** the selected second SHALL display a checkmark indicator

#### Scenario: Hide optional time units

- **WHEN** `showMinutes` is false
- **THEN** the minutes column SHALL NOT be displayed
- **AND** the output value SHALL omit minutes

---

### Requirement: TimePicker Display

The TimePicker component SHALL display as a popover with a trigger button.

#### Scenario: Trigger button

- **WHEN** the TimePicker is rendered
- **THEN** a trigger button SHALL be displayed with a clock icon
- **AND** clicking the trigger SHALL open a popover containing the scroll-area columns

#### Scenario: Popover content layout

- **WHEN** the popover is open
- **THEN** the content SHALL display scrollable columns side-by-side for each visible time unit
- **AND** a summary bar at the bottom SHALL display the current formatted time with a clock icon

#### Scenario: Display value

- **WHEN** a time value is selected
- **THEN** the trigger button SHALL display the formatted time value

#### Scenario: Placeholder

- **WHEN** no value is selected
- **THEN** the trigger button SHALL display the placeholder text

#### Scenario: Close popover

- **WHEN** the user has selected time values
- **THEN** the popover MAY remain open for adjustment
- **AND** clicking outside SHALL close the popover

---

## ADDED Requirements

### Requirement: TimePicker Scroll Selection

The TimePicker component SHALL provide smooth scrolling behavior and visual feedback for the scroll-area columns.

#### Scenario: Scroll to selected value

- **WHEN** a value is selected programmatically or via `defaultValue`
- **THEN** the column SHALL auto-scroll to center the selected value in view

#### Scenario: Visual feedback on selection

- **WHEN** a user clicks an option in any column
- **THEN** the option SHALL immediately display a checkmark indicator
- **AND** the previously selected option SHALL lose its checkmark

#### Scenario: Hover state

- **WHEN** the user hovers over an option in a column
- **THEN** the option SHALL display a hover highlight

#### Scenario: Column scroll independence

- **WHEN** the user scrolls one column
- **THEN** other columns SHALL remain at their current scroll position
- **AND** each column SHALL scroll independently

#### Scenario: Summary bar display

- **WHEN** any time unit value is selected
- **THEN** the summary bar SHALL update to display the current formatted time
- **AND** the clock icon SHALL be displayed before the time value
