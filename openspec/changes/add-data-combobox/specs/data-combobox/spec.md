## ADDED Requirements

### Requirement: DataCombobox Data-Driven Options

The DataCombobox component SHALL accept a `data` prop containing an array of option objects with `label`, `value`, and optional `disabled` and `group` properties for rendering selectable items.

#### Scenario: Render options from data array
- **WHEN** the DataCombobox is provided with a `data` prop containing `[{ label: "Next.js", value: "nextjs" }, { label: "SvelteKit", value: "sveltekit" }]`
- **THEN** the dropdown SHALL display "Next.js" and "SvelteKit" as selectable options

#### Scenario: Handle empty data array
- **WHEN** the DataCombobox is provided with an empty `data` array
- **THEN** the component SHALL display the empty message

#### Scenario: Support disabled options
- **WHEN** an option in the `data` array has `disabled: true`
- **THEN** that option SHALL be visually styled as disabled and not be selectable

---

### Requirement: DataCombobox Value Selection

The DataCombobox component SHALL support both controlled and uncontrolled value management for single-item selection.

#### Scenario: Uncontrolled selection
- **WHEN** a user clicks on an option without `value` prop being set
- **THEN** the DataCombobox SHALL update its internal state and display the selected option's label

#### Scenario: Controlled selection
- **WHEN** the DataCombobox has `value` and `onValueChange` props
- **THEN** selection changes SHALL trigger `onValueChange` with the new value and option object
- **AND** the displayed value SHALL reflect the controlled `value` prop

#### Scenario: Initial value with label via defaultValueOption
- **WHEN** the DataCombobox has `defaultValueOption` prop with `{ label: "Next.js", value: "nextjs" }`
- **AND** the `data` array may not contain this option initially
- **THEN** the trigger SHALL display "Next.js" as the selected label

#### Scenario: Display selected value
- **WHEN** an option is selected
- **THEN** the DataCombobox trigger SHALL display the selected option's label
- **AND** the dropdown SHALL close

---

### Requirement: DataCombobox Search Filtering

The DataCombobox component SHALL provide built-in search functionality to filter the displayed options based on user text input.

#### Scenario: Internal filter by search text
- **WHEN** `onSearch` is not provided
- **AND** a user types "next" in the search input
- **THEN** only options whose label contains "next" (case-insensitive) SHALL be visible

#### Scenario: External controlled search
- **WHEN** `searchValue` and `onSearch` props are provided
- **THEN** the search input SHALL be controlled externally
- **AND** `onSearch` SHALL be called when the user types

#### Scenario: Clear search on selection
- **WHEN** a user selects an option after filtering
- **THEN** the search input SHALL be cleared

#### Scenario: Empty search results
- **WHEN** the search text matches no options
- **THEN** the DataCombobox SHALL display the `emptyMessage`

---

### Requirement: DataCombobox Search Debouncing

The DataCombobox component SHALL support debouncing the search input via a `debounceTime` prop to prevent excessive filtering or callback invocations.

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

### Requirement: DataCombobox Option Grouping

The DataCombobox component SHALL support grouping options by rendering options with the same `group` property value under a shared group header.

#### Scenario: Render grouped options
- **WHEN** the `data` prop contains options with `group` property (e.g., `[{ label: "Next.js", value: "nextjs", group: "React" }, { label: "Nuxt.js", value: "nuxtjs", group: "Vue" }]`)
- **THEN** options SHALL be visually grouped under their respective group headers

#### Scenario: Mixed grouped and ungrouped options
- **WHEN** some options have a `group` property and others do not
- **THEN** ungrouped options SHALL be rendered first, followed by grouped sections

#### Scenario: Group header styling
- **WHEN** options are grouped
- **THEN** the group header SHALL be visually distinct from selectable options
- **AND** the group header SHALL NOT be selectable

---

### Requirement: DataCombobox Clear Functionality

The DataCombobox component SHALL provide an optional clear button to reset the selection when the `clearable` prop is true.

#### Scenario: Show clear button when clearable
- **WHEN** `clearable` is true and a value is selected
- **THEN** a clear button SHALL be visible in the trigger

#### Scenario: Clear selection on click
- **WHEN** the user clicks the clear button
- **THEN** the selection SHALL be cleared
- **AND** `onValueChange` SHALL be called with an empty string and null option

#### Scenario: Hide clear button when empty
- **WHEN** `clearable` is true but no value is selected
- **THEN** the clear button SHALL NOT be visible

---

### Requirement: DataCombobox Empty State

The DataCombobox component SHALL display a customizable message when no options are available or no search results are found.

#### Scenario: Show default empty message
- **WHEN** the options list is empty and no `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display a default "No results found" message

#### Scenario: Show custom empty message
- **WHEN** the options list is empty and `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display the custom `emptyMessage` content

---

### Requirement: DataCombobox Loading State

The DataCombobox component SHALL display a loading indicator when the `loading` prop is true.

#### Scenario: Show loading indicator with no data
- **WHEN** `loading` is true and `data` is empty
- **THEN** the dropdown SHALL display a loading spinner or the custom `loadingContent`

#### Scenario: Show loading indicator at list bottom
- **WHEN** `loading` is true and `data` has items (during load more)
- **THEN** a loading indicator SHALL appear at the bottom of the list

#### Scenario: Options remain viewable while loading
- **WHEN** `loading` is true and `data` has items
- **THEN** existing options SHALL remain visible and selectable

---

### Requirement: DataCombobox Infinite Scroll

The DataCombobox component SHALL support infinite scroll by invoking an `onLoadMore` callback when the user scrolls near the bottom of the options list.

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

### Requirement: DataCombobox Keyboard Navigation

The DataCombobox component SHALL support full keyboard navigation for accessibility.

#### Scenario: Open dropdown with keyboard
- **WHEN** the trigger is focused and user presses Enter, Space, or Arrow Down
- **THEN** the dropdown SHALL open

#### Scenario: Navigate options with arrow keys
- **WHEN** the dropdown is open and user presses Arrow Down
- **THEN** focus SHALL move to the next option
- **WHEN** the dropdown is open and user presses Arrow Up
- **THEN** focus SHALL move to the previous option

#### Scenario: Select option with Enter
- **WHEN** an option is highlighted and user presses Enter
- **THEN** that option SHALL be selected
- **AND** the dropdown SHALL close

#### Scenario: Close dropdown with Escape
- **WHEN** the dropdown is open and user presses Escape
- **THEN** the dropdown SHALL close
- **AND** focus SHALL return to the trigger

---

### Requirement: DataCombobox Disabled State

The DataCombobox component SHALL support a disabled state that prevents all user interaction.

#### Scenario: Disable entire component
- **WHEN** `disabled` is true
- **THEN** the trigger SHALL be visually styled as disabled
- **AND** clicking the trigger SHALL NOT open the dropdown
- **AND** keyboard events SHALL NOT open the dropdown

---

### Requirement: DataCombobox Custom Item Rendering

The DataCombobox component SHALL support custom rendering of option items via a `renderItem` prop.

#### Scenario: Custom item rendering
- **WHEN** a `renderItem` function is provided
- **THEN** each option SHALL be rendered using the custom render function
- **AND** the function SHALL receive the option object and selection state

#### Scenario: Default item rendering
- **WHEN** no `renderItem` function is provided
- **THEN** options SHALL render using the default template showing the label text with a check icon for selected state

---

### Requirement: DataCombobox Responsive Mode

The DataCombobox component SHALL support a responsive mode that switches the dropdown presentation from Popover to Drawer on mobile viewports when `enableResponsive` is true.

#### Scenario: Enable responsive mode on mobile
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

---

### Requirement: DataCombobox Popover Positioning

The DataCombobox component SHALL support customizable popover positioning via `side` and `align` props.

#### Scenario: Custom side positioning
- **WHEN** `side` is set to "top"
- **THEN** the popover SHALL open above the trigger

#### Scenario: Custom alignment
- **WHEN** `align` is set to "end"
- **THEN** the popover SHALL align to the end (right in LTR) of the trigger

#### Scenario: Default positioning
- **WHEN** `side` and `align` are not provided
- **THEN** the popover SHALL default to "bottom" side and "start" alignment

---

### Requirement: DataCombobox Open State Control

The DataCombobox component SHALL support controlled open state via `open` and `onOpenChange` props.

#### Scenario: Controlled open state
- **WHEN** `open` and `onOpenChange` props are provided
- **THEN** the dropdown open state SHALL be controlled externally
- **AND** `onOpenChange` SHALL be called when the user attempts to open or close

#### Scenario: Uncontrolled open state
- **WHEN** `open` prop is not provided
- **THEN** the component SHALL manage open state internally
