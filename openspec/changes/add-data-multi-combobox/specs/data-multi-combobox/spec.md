## ADDED Requirements

### Requirement: DataMultiCombobox Data-Driven Options

The DataMultiCombobox component SHALL accept a `data` prop containing an array of option objects with `label`, `value`, and optional `disabled` and `group` properties for rendering selectable items, consistent with the DataCombobox component.

#### Scenario: Render options from data array
- **WHEN** the DataMultiCombobox is provided with a `data` prop containing `[{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]`
- **THEN** the dropdown SHALL display "Apple" and "Banana" as selectable options

#### Scenario: Handle empty data array
- **WHEN** the DataMultiCombobox is provided with an empty `data` array
- **THEN** the component SHALL display the empty message

#### Scenario: Support disabled options
- **WHEN** an option in the `data` array has `disabled: true`
- **THEN** that option SHALL be visually styled as disabled and not be selectable

---

### Requirement: DataMultiCombobox Multi-Value Selection

The DataMultiCombobox component SHALL support selecting multiple values, storing them as an array, and supporting both controlled and uncontrolled state management.

#### Scenario: Uncontrolled multi-selection
- **WHEN** a user clicks on multiple options without `value` prop being set
- **THEN** the DataMultiCombobox SHALL update its internal state to include all selected values

#### Scenario: Controlled multi-selection
- **WHEN** the DataMultiCombobox has `value` (string array) and `onValueChange` props
- **THEN** selection changes SHALL trigger `onValueChange` with the updated array and corresponding options
- **AND** the displayed selections SHALL reflect the controlled `value` prop

#### Scenario: Toggle selection
- **WHEN** a user clicks on an already-selected option
- **THEN** that option SHALL be deselected and removed from the value array

#### Scenario: Keep dropdown open after selection
- **WHEN** a user selects an option
- **THEN** the dropdown SHALL remain open to allow additional selections

---

### Requirement: DataMultiCombobox Badge Display

The DataMultiCombobox component SHALL display selected values as badges in the trigger area.

#### Scenario: Display selected items as badges
- **WHEN** one or more items are selected
- **THEN** each selected item SHALL be displayed as a badge showing the item's label

#### Scenario: Badge with remove button
- **WHEN** a badge is displayed
- **THEN** the badge SHALL include an X button to remove that selection

#### Scenario: Remove selection via badge X button
- **WHEN** the user clicks the X button on a badge
- **THEN** that item SHALL be deselected
- **AND** `onValueChange` SHALL be called with the updated array

#### Scenario: Empty state display
- **WHEN** no items are selected
- **THEN** the trigger SHALL display the placeholder text

---

### Requirement: DataMultiCombobox Collapsible Badge Display

The DataMultiCombobox component SHALL support collapsing the badge display when many items are selected, controlled by a `maxDisplayedItems` prop.

#### Scenario: Display limited badges with count
- **WHEN** more items are selected than `maxDisplayedItems` (default: 3)
- **AND** the display is not expanded
- **THEN** only the first `maxDisplayedItems` badges SHALL be visible
- **AND** a "+N more" badge SHALL be displayed showing the count of hidden items

#### Scenario: Display all badges when within limit
- **WHEN** the number of selected items is less than or equal to `maxDisplayedItems`
- **THEN** all badges SHALL be displayed without a "+N more" indicator

#### Scenario: Custom maxDisplayedItems
- **WHEN** `maxDisplayedItems` is set to 5
- **AND** 7 items are selected
- **THEN** 5 badges SHALL be visible plus a "+2 more" badge

---

### Requirement: DataMultiCombobox Expandable Badge Display

The DataMultiCombobox component SHALL allow expanding the badge display to show all selected items by clicking the "+N more" badge.

#### Scenario: Expand badges on click
- **WHEN** the user clicks the "+N more" badge
- **THEN** all selected item badges SHALL become visible
- **AND** a "Show less" badge SHALL appear

#### Scenario: Collapse badges on show less click
- **WHEN** the display is expanded
- **AND** the user clicks the "Show less" badge
- **THEN** the display SHALL collapse back to showing only `maxDisplayedItems` badges plus "+N more"

#### Scenario: Default expanded state
- **WHEN** `defaultExpanded` prop is true
- **AND** more items are selected than `maxDisplayedItems`
- **THEN** all badges SHALL be visible by default with "Show less" badge shown

#### Scenario: Default collapsed state
- **WHEN** `defaultExpanded` prop is false or not provided
- **AND** more items are selected than `maxDisplayedItems`
- **THEN** badges SHALL be collapsed by default showing "+N more"

---

### Requirement: DataMultiCombobox Search Filtering

The DataMultiCombobox component SHALL provide built-in search functionality to filter the displayed options based on user text input.

#### Scenario: Internal filter by search text
- **WHEN** `onSearch` is not provided
- **AND** a user types "app" in the search input
- **THEN** only options whose label contains "app" (case-insensitive) SHALL be visible

#### Scenario: External controlled search
- **WHEN** `searchValue` and `onSearch` props are provided
- **THEN** the search input SHALL be controlled externally
- **AND** `onSearch` SHALL be called when the user types

#### Scenario: Preserve search on selection
- **WHEN** a user selects an option after filtering
- **THEN** the search input SHALL remain to allow continued filtering and selection

#### Scenario: Empty search results
- **WHEN** the search text matches no options
- **THEN** the DataMultiCombobox SHALL display the `emptyMessage`

---

### Requirement: DataMultiCombobox Search Debouncing

The DataMultiCombobox component SHALL support debouncing the search input via a `debounceTime` prop.

#### Scenario: Debounced search callback
- **WHEN** `debounceTime` is set to 300 (milliseconds)
- **AND** the user types rapidly in the search input
- **THEN** the `onSearch` callback SHALL only be invoked after 300ms of no typing

#### Scenario: Immediate search without debounce
- **WHEN** `debounceTime` is 0 or not provided
- **THEN** the search filtering SHALL occur immediately on each keystroke

---

### Requirement: DataMultiCombobox Option Grouping

The DataMultiCombobox component SHALL support grouping options by rendering options with the same `group` property value under a shared group header.

#### Scenario: Render grouped options
- **WHEN** the `data` prop contains options with `group` property
- **THEN** options SHALL be visually grouped under their respective group headers

#### Scenario: Mixed grouped and ungrouped options
- **WHEN** some options have a `group` property and others do not
- **THEN** ungrouped options SHALL be rendered first, followed by grouped sections

#### Scenario: Group header styling
- **WHEN** options are grouped
- **THEN** the group header SHALL be visually distinct from selectable options
- **AND** the group header SHALL NOT be selectable

---

### Requirement: DataMultiCombobox Clear All Functionality

The DataMultiCombobox component SHALL provide an optional clear all button to reset all selections when the `clearable` prop is true.

#### Scenario: Show clear all button when clearable
- **WHEN** `clearable` is true and at least one value is selected
- **THEN** a clear all button SHALL be visible in the trigger

#### Scenario: Clear all selections on click
- **WHEN** the user clicks the clear all button
- **THEN** all selections SHALL be cleared
- **AND** `onValueChange` SHALL be called with an empty array

#### Scenario: Hide clear all button when empty
- **WHEN** `clearable` is true but no values are selected
- **THEN** the clear all button SHALL NOT be visible

---

### Requirement: DataMultiCombobox Empty State

The DataMultiCombobox component SHALL display a customizable message when no options are available or no search results are found.

#### Scenario: Show default empty message
- **WHEN** the options list is empty and no `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display a default "No results found." message

#### Scenario: Show custom empty message
- **WHEN** the options list is empty and `emptyMessage` prop is provided
- **THEN** the dropdown SHALL display the custom `emptyMessage` content

---

### Requirement: DataMultiCombobox Loading State

The DataMultiCombobox component SHALL display a loading indicator when the `loading` prop is true.

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

### Requirement: DataMultiCombobox Infinite Scroll

The DataMultiCombobox component SHALL support infinite scroll by invoking an `onLoadMore` callback when the user scrolls near the bottom of the options list.

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

### Requirement: DataMultiCombobox Keyboard Navigation

The DataMultiCombobox component SHALL support keyboard navigation for accessibility.

#### Scenario: Open dropdown with keyboard
- **WHEN** the trigger is focused and user presses Enter, Space, or Arrow Down
- **THEN** the dropdown SHALL open

#### Scenario: Navigate options with arrow keys
- **WHEN** the dropdown is open and user presses Arrow Down/Up
- **THEN** focus SHALL move between options

#### Scenario: Toggle selection with Enter
- **WHEN** an option is focused and user presses Enter
- **THEN** that option's selection state SHALL be toggled

#### Scenario: Close dropdown with Escape
- **WHEN** the dropdown is open and user presses Escape
- **THEN** the dropdown SHALL close

---

### Requirement: DataMultiCombobox Disabled State

The DataMultiCombobox component SHALL support a disabled state that prevents all user interaction.

#### Scenario: Disable entire component
- **WHEN** `disabled` is true
- **THEN** the trigger SHALL be visually styled as disabled
- **AND** clicking the trigger SHALL NOT open the dropdown
- **AND** badge X buttons SHALL NOT be clickable

---

### Requirement: DataMultiCombobox Custom Item Rendering

The DataMultiCombobox component SHALL support custom rendering of option items via a `renderItem` prop.

#### Scenario: Custom item rendering
- **WHEN** a `renderItem` function is provided
- **THEN** each option SHALL be rendered using the custom render function
- **AND** the function SHALL receive the option object and selection state

#### Scenario: Default item rendering with checkbox
- **WHEN** no `renderItem` function is provided
- **THEN** options SHALL render with a checkbox indicator showing selection state

---

### Requirement: DataMultiCombobox Responsive Mode

The DataMultiCombobox component SHALL support a responsive mode that switches the dropdown presentation from Popover to Drawer on mobile viewports when `enableResponsive` is true.

#### Scenario: Enable responsive mode on mobile
- **WHEN** `enableResponsive` is true
- **AND** the viewport is detected as mobile
- **THEN** the dropdown content SHALL render inside a Drawer component

#### Scenario: Desktop viewport with responsive enabled
- **WHEN** `enableResponsive` is true
- **AND** the viewport is desktop-sized
- **THEN** the dropdown content SHALL render inside a Popover

#### Scenario: Responsive mode disabled
- **WHEN** `enableResponsive` is false or not provided
- **THEN** the dropdown content SHALL always render inside a Popover regardless of viewport size

---

### Requirement: DataMultiCombobox Popover Positioning

The DataMultiCombobox component SHALL support customizable popover positioning via `side` and `align` props.

#### Scenario: Custom side positioning
- **WHEN** `side` is set to "top"
- **THEN** the popover SHALL open above the trigger

#### Scenario: Custom alignment
- **WHEN** `align` is set to "end"
- **THEN** the popover SHALL align to the end (right in LTR) of the trigger

#### Scenario: Default positioning
- **WHEN** `side` and `align` are not provided
- **THEN** the popover SHALL default to "bottom" side and "start" alignment
