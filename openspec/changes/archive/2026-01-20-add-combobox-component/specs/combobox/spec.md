## ADDED Requirements

### Requirement: Combobox Data-Driven Options

The Combobox component SHALL accept a `data` prop containing an array of option objects with `label`, `value`, and optional `disabled` and `group` properties for rendering selectable items.

#### Scenario: Render options from data array
- **WHEN** the Combobox is provided with a `data` prop containing `[{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]`
- **THEN** the dropdown SHALL display "Apple" and "Banana" as selectable options

#### Scenario: Handle empty data array
- **WHEN** the Combobox is provided with an empty `data` array
- **THEN** the component SHALL display the empty message

#### Scenario: Support disabled options
- **WHEN** an option in the `data` array has `disabled: true`
- **THEN** that option SHALL be visually styled as disabled and not be selectable

---

### Requirement: Combobox Value Selection

The Combobox component SHALL support both controlled and uncontrolled value management for single-item selection.

#### Scenario: Uncontrolled selection
- **WHEN** a user clicks on an option without `value` prop being set
- **THEN** the Combobox SHALL update its internal state and display the selected option's label

#### Scenario: Controlled selection
- **WHEN** the Combobox has `value` and `onValueChange` props
- **THEN** selection changes SHALL trigger `onValueChange` with the new value
- **AND** the displayed value SHALL reflect the controlled `value` prop

#### Scenario: Display selected value
- **WHEN** an option is selected
- **THEN** the Combobox trigger SHALL display the selected option's label
- **AND** the dropdown SHALL close

---

### Requirement: Combobox Search Filtering

The Combobox component SHALL provide built-in search functionality to filter the displayed options based on user text input.

#### Scenario: Filter options by search text
- **WHEN** a user types "app" in the search input
- **THEN** only options whose label contains "app" (case-insensitive) SHALL be visible

#### Scenario: Clear search on selection
- **WHEN** a user selects an option after filtering
- **THEN** the search input SHALL be cleared

#### Scenario: Empty search results
- **WHEN** the search text matches no options
- **THEN** the Combobox SHALL display the empty message

#### Scenario: Controlled search
- **WHEN** `searchValue` and `onSearch` props are provided
- **THEN** the search input SHALL be controlled externally

---

### Requirement: Combobox Search Debouncing

The Combobox component SHALL support debouncing the search input via a `debounceTime` prop to prevent excessive filtering or callback invocations.

#### Scenario: Debounced search callback
- **WHEN** `debounceTime` is set to 300 (milliseconds)
- **AND** the user types rapidly in the search input
- **THEN** the `onSearch` callback SHALL only be invoked after 300ms of no typing

#### Scenario: Immediate search without debounce
- **WHEN** `debounceTime` is 0 or not provided
- **THEN** the search filtering SHALL occur immediately on each keystroke

#### Scenario: Debounced internal filtering
- **WHEN** `debounceTime` is set and no `onSearch` is provided
- **THEN** the internal filtering SHALL be debounced by the specified time

---

### Requirement: Combobox Option Grouping

The Combobox component SHALL support grouping options by rendering options with the same `group` property value under a shared group header.

#### Scenario: Render grouped options
- **WHEN** the `data` prop contains options with `group` property (e.g., `[{ label: "Apple", value: "apple", group: "Fruits" }, { label: "Carrot", value: "carrot", group: "Vegetables" }]`)
- **THEN** options SHALL be visually grouped under their respective group headers

#### Scenario: Mixed grouped and ungrouped options
- **WHEN** some options have a `group` property and others do not
- **THEN** ungrouped options SHALL be rendered outside of any group section

#### Scenario: Group header styling
- **WHEN** options are grouped
- **THEN** the group header SHALL be visually distinct from selectable options
- **AND** the group header SHALL NOT be selectable

---

### Requirement: Combobox Clear Functionality

The Combobox component SHALL provide an optional clear button to reset the selection when the `clearable` prop is true.

#### Scenario: Show clear button when clearable
- **WHEN** `clearable` is true and a value is selected
- **THEN** a clear button SHALL be visible in the trigger

#### Scenario: Clear selection on click
- **WHEN** the user clicks the clear button
- **THEN** the selection SHALL be cleared
- **AND** `onValueChange` SHALL be called with an empty string

#### Scenario: Hide clear button when empty
- **WHEN** `clearable` is true but no value is selected
- **THEN** the clear button SHALL NOT be visible

---

### Requirement: Combobox Empty State

The Combobox component SHALL display a customizable message when no options are available or no search results are found.

#### Scenario: Show default empty message
- **WHEN** the options list is empty and no `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display a default "No results found" message

#### Scenario: Show custom empty message
- **WHEN** the options list is empty and `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display the custom `emptyMessage` content

---

### Requirement: Combobox Loading State

The Combobox component SHALL display a loading indicator when the `loading` prop is true.

#### Scenario: Show loading indicator
- **WHEN** `loading` is true
- **THEN** the dropdown SHALL display a loading spinner or the custom `loadingContent`

#### Scenario: Disable interaction while loading
- **WHEN** `loading` is true
- **THEN** options SHALL NOT be selectable

---

### Requirement: Combobox Infinite Scroll

The Combobox component SHALL support infinite scroll by invoking an `onLoadMore` callback when the user scrolls near the bottom of the options list.

#### Scenario: Trigger load more
- **WHEN** the user scrolls to the bottom of the options list
- **AND** `hasMore` is true
- **THEN** the `onLoadMore` callback SHALL be invoked

#### Scenario: Show loading indicator at bottom
- **WHEN** `onLoadMore` is triggered and `loading` becomes true
- **THEN** a loading indicator SHALL appear at the bottom of the list

#### Scenario: Stop triggering when no more data
- **WHEN** `hasMore` is false
- **THEN** scrolling to bottom SHALL NOT invoke `onLoadMore`

---

### Requirement: Combobox Keyboard Navigation

The Combobox component SHALL support full keyboard navigation for accessibility.

#### Scenario: Open dropdown with keyboard
- **WHEN** the trigger is focused and user presses Enter, Space, or Arrow Down
- **THEN** the dropdown SHALL open

#### Scenario: Navigate options with arrow keys
- **WHEN** the dropdown is open and user presses Arrow Down
- **THEN** focus SHALL move to the next option
- **WHEN** the dropdown is open and user presses Arrow Up
- **THEN** focus SHALL move to the previous option

#### Scenario: Select option with Enter
- **WHEN** an option is focused and user presses Enter
- **THEN** that option SHALL be selected
- **AND** the dropdown SHALL close

#### Scenario: Close dropdown with Escape
- **WHEN** the dropdown is open and user presses Escape
- **THEN** the dropdown SHALL close
- **AND** focus SHALL return to the trigger

---

### Requirement: Combobox Disabled State

The Combobox component SHALL support a disabled state that prevents all user interaction.

#### Scenario: Disable entire component
- **WHEN** `disabled` is true
- **THEN** the trigger SHALL be visually styled as disabled
- **AND** clicking the trigger SHALL NOT open the dropdown
- **AND** keyboard events SHALL NOT open the dropdown

---

### Requirement: Combobox Custom Item Rendering

The Combobox component SHALL support custom rendering of option items via a `renderItem` prop.

#### Scenario: Custom item rendering
- **WHEN** a `renderItem` function is provided
- **THEN** each option SHALL be rendered using the custom render function
- **AND** the function SHALL receive the option object and selection state

#### Scenario: Default item rendering
- **WHEN** no `renderItem` function is provided
- **THEN** options SHALL render using the default template showing the label text

---

### Requirement: Combobox Responsive Mode

The Combobox component SHALL support a responsive mode that switches the dropdown presentation from Popover to Drawer on mobile viewports when `enableResponsive` is true.

#### Scenario: Enable responsive mode
- **WHEN** `enableResponsive` is true
- **AND** the viewport is detected as mobile (e.g., width < 768px)
- **THEN** the dropdown content SHALL render inside a Drawer component instead of a Popover

#### Scenario: Desktop viewport with responsive enabled
- **WHEN** `enableResponsive` is true
- **AND** the viewport is desktop-sized
- **THEN** the dropdown content SHALL render inside a Popover as normal

#### Scenario: Responsive mode disabled
- **WHEN** `enableResponsive` is false or not provided
- **THEN** the dropdown content SHALL always render inside a Popover regardless of viewport size
