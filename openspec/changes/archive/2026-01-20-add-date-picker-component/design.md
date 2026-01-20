## Context

The DatePicker component is a composite form control that combines a trigger (button or input) with a popover containing a Calendar. It enables users to select a single date with optional time selection. The component builds on existing primitives (Calendar, Popover, Button, Input) and follows established patterns from Combobox.

### Stakeholders

- Developers consuming `@kaotypr/ui` who need date input functionality
- Form libraries (react-hook-form) that need controlled date components

### Constraints

- Must follow existing component patterns (data-slot attributes, cn utility)
- Must be accessible (keyboard navigation, ARIA attributes)
- Must work with React 18/19
- Must support tree-shaking via dedicated entry point
- Uses existing `date-fns` peer dependency for formatting

## Goals / Non-Goals

### Goals

- Provide a single-date picker with popover-based calendar
- Support optional time selection with configurable granularity
- Allow custom display format via date-fns format strings
- Support both `Date` and ISO string value types
- Enable full Calendar customization via `calendarProps` pass-through
- Support both controlled and uncontrolled modes
- Provide clearable selection option

### Non-Goals

- Date range selection (separate `DateRangePicker` component if needed)
- Inline calendar mode (use `Calendar` directly)
- Multiple date selection
- Built-in min/max date props (use `calendarProps.disabled` instead)

## Decisions

### Decision 1: Build on Popover + Calendar

**What**: Use Radix Popover for positioning and existing Calendar component for date selection.
**Why**: Reuses battle-tested components, consistent UX with other popover-based components (Combobox, Select).
**Alternatives considered**:
- Dialog-based: Less convenient for quick date selection
- Inline only: Doesn't meet popover trigger requirement

### Decision 2: Separate Time Input

**What**: Time selection uses native `<input type="time">` or custom time inputs below the calendar.
**Why**: Clean separation of concerns, familiar UX pattern, simpler implementation.
**Alternatives considered**:
- Integrated time picker in calendar: More complex, non-standard UX
- Third-party time picker: Additional dependency

### Decision 3: date-fns Format Strings

**What**: Accept standard date-fns format patterns for the `format` prop.
**Why**: date-fns is already a peer dependency (used by Calendar/react-day-picker), widely known format patterns.
**Alternatives considered**:
- Custom format function: Less declarative, harder to document
- Intl.DateTimeFormat options: Less flexible for custom formats

### Decision 4: CalendarProps Pass-through with Omissions

**What**: Accept `calendarProps` that passes all props to Calendar except `selected`, `onSelect`, and `mode`.
**Why**: Allows full customization (disabled dates, month navigation, etc.) while DatePicker controls selection state.
**Type**: `Omit<React.ComponentProps<typeof Calendar>, 'selected' | 'onSelect' | 'mode'>`

### Decision 5: Dual Value Type Support

**What**: Support both `Date` objects and ISO strings via generic type parameter or union type.
**Why**: Flexibility for different use cases - forms often use strings, app logic may prefer Date objects.
**Implementation**: Internal normalization to Date, output based on input type or explicit prop.

### Decision 6: Time Granularity Props

**What**: Provide `showTime`, `showHours`, `showMinutes`, `showSeconds` props for configurable time selection.
**Why**: Different use cases need different time precision (appointment booking vs precise timestamps).
**Defaults**: When `showTime` is true, show hours and minutes by default; seconds opt-in.

## Component API

```tsx
interface DatePickerProps {
  // Value control
  value?: Date | string
  defaultValue?: Date | string
  onValueChange?: (value: Date | string | undefined) => void

  // Display
  placeholder?: string
  format?: string // date-fns format string, default "PPP"

  // Time selection
  showTime?: boolean
  showHours?: boolean // default true when showTime
  showMinutes?: boolean // default true when showTime
  showSeconds?: boolean // default false

  // Features
  clearable?: boolean
  disabled?: boolean

  // Calendar customization
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'selected' | 'onSelect' | 'mode'
  >

  // Styling
  className?: string
  contentClassName?: string
}
```

## Risks / Trade-offs

### Risk: Time input UX on mobile

**Mitigation**: Use native time input which has good mobile support. Can enhance with custom time picker later if needed.

### Risk: Complex value type handling

**Mitigation**: Clear documentation on behavior. When `value` is string, output is string. When `value` is Date, output is Date. When using `defaultValue`, follow same pattern.

### Trade-off: No built-in min/max props

**Decision**: Use `calendarProps.disabled` for date restrictions. Keeps API surface smaller and more flexible (can disable specific dates, weekends, etc.).

## Open Questions

None - requirements are clear from the discussion.
