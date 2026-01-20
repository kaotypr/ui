## Context

The TimePicker component is a form control for selecting time values without date. It uses scroll-based Select components for each time unit (hours, minutes, seconds, meridiem) providing a familiar UX pattern. The component supports both inline display and popover-based trigger modes.

### Stakeholders

- Developers consuming `@kaotypr/ui` who need time-only input functionality
- Form libraries (react-hook-form) that need controlled time components

### Constraints

- Must follow existing component patterns (data-slot attributes, cn utility)
- Must be accessible (keyboard navigation, ARIA attributes)
- Must work with React 18/19
- Must support tree-shaking via dedicated entry point
- Uses existing Select component for scroll-based selection

## Goals / Non-Goals

### Goals

- Provide a time-only picker with scroll-based Select UI
- Support string value format for easy form integration
- Support both 12-hour (meridiem) and 24-hour time formats
- Allow configurable time unit display (hours, minutes, seconds)
- Support both inline and popover display modes
- Provide min/max time constraints
- Support both controlled and uncontrolled modes
- Provide clearable selection option

### Non-Goals

- Date selection (use DatePicker)
- Time range selection (use two TimePicker components)
- Clock-based visual interface (may add in future)
- Duration input (different semantic meaning)

## Decisions

### Decision 1: Scroll/Select-based UI

**What**: Use Select components for each time unit with scrollable options.
**Why**: Familiar UX pattern (iOS-style), prevents invalid input, works well on touch devices, leverages existing Select component.
**Alternatives considered**:
- Number inputs: Prone to invalid values, less intuitive
- Clock face: More complex implementation, not as precise for exact times

### Decision 2: String Value Format

**What**: Use string format for values (e.g., `"14:30"`, `"02:30 PM"`).
**Why**: Easy to serialize/deserialize, directly usable in forms, matches HTML time input behavior.
**Format specification**:
- 24-hour: `"HH:mm"` or `"HH:mm:ss"` (e.g., `"14:30"`, `"14:30:45"`)
- 12-hour: `"hh:mm A"` or `"hh:mm:ss A"` (e.g., `"02:30 PM"`, `"02:30:45 PM"`)

**Alternatives considered**:
- Date object: Overkill for time-only, confusing time zone handling
- Object/Tuple: Less portable, harder to serialize

### Decision 3: Meridiem Prop for 12/24-Hour Format

**What**: Use `meridiem` boolean prop (default: `false` for 24-hour).
**Why**: Simple toggle, 24-hour is more universal default, explicit naming.
**Behavior**:
- `meridiem={false}`: 24-hour format, hours 00-23
- `meridiem={true}`: 12-hour format with AM/PM selector, hours 01-12

### Decision 4: Configurable Time Units

**What**: Provide `showHours`, `showMinutes`, `showSeconds` props.
**Why**: Different use cases need different precision.
**Defaults**: 
- `showHours={true}` (always shown by default)
- `showMinutes={true}` (shown by default)
- `showSeconds={false}` (opt-in)

### Decision 5: Inline vs Popover Mode

**What**: Provide `mode` prop with values `"inline"` | `"popover"`.
**Why**: Inline is better for forms with dedicated space, popover saves space.
**Defaults**: `mode="inline"` for simpler default usage.

### Decision 6: Min/Max Time Constraints

**What**: Provide `minTime` and `maxTime` props as strings in same format as value.
**Why**: Common requirement for business hours, scheduling constraints.
**Behavior**: Options outside range are disabled in Select, validation prevents invalid programmatic values.

### Decision 7: Step Intervals

**What**: Provide `hourStep`, `minuteStep`, `secondStep` props for configurable intervals.
**Why**: Common UX pattern (15-minute intervals for appointments, etc.).
**Defaults**: All steps default to `1`.

## Component API

```tsx
interface TimePickerProps {
  // Value control
  value?: string
  defaultValue?: string
  onValueChange?: (value: string | undefined) => void

  // Display mode
  mode?: "inline" | "popover"

  // Time format
  meridiem?: boolean // false = 24-hour, true = 12-hour with AM/PM

  // Time units visibility
  showHours?: boolean // default true
  showMinutes?: boolean // default true
  showSeconds?: boolean // default false

  // Step intervals
  hourStep?: number // default 1
  minuteStep?: number // default 1
  secondStep?: number // default 1

  // Constraints
  minTime?: string
  maxTime?: string

  // Features
  clearable?: boolean
  disabled?: boolean
  placeholder?: string

  // Styling
  className?: string
  contentClassName?: string // for popover content
}
```

## Component Structure

```
TimePicker (root)
├── TimePickerTrigger (popover mode only)
│   └── Button with clock icon and display value
├── TimePickerContent
│   ├── Select (hours)
│   ├── Select (minutes) - if showMinutes
│   ├── Select (seconds) - if showSeconds
│   └── Select (AM/PM) - if meridiem
```

## Value Parsing and Formatting

Internal logic:
1. Parse input string to extract hours, minutes, seconds, meridiem
2. Store internally as normalized values (hours 0-23, minutes 0-59, seconds 0-59)
3. Format output based on `meridiem` prop and visible time units

Example transformations:
- Input: `"14:30"` with `meridiem={false}` → Display: 14, 30 → Output: `"14:30"`
- Input: `"14:30"` with `meridiem={true}` → Display: 02, 30, PM → Output: `"02:30 PM"`
- Input: `"02:30 PM"` with `meridiem={false}` → Display: 14, 30 → Output: `"14:30"`

## Risks / Trade-offs

### Risk: String parsing edge cases

**Mitigation**: Strict parsing with validation, clear documentation of supported formats, graceful fallback for invalid input.

### Risk: Min/max validation complexity with meridiem

**Mitigation**: Convert all times to 24-hour internally for comparison, then format for display.

### Trade-off: No duration support

**Decision**: Duration is semantically different (elapsed time vs point in time). If needed, create separate DurationPicker component.

### Trade-off: Limited to Select-based UI

**Decision**: Start with Select-based UI which covers most use cases. Clock-face UI can be added later as an alternative mode if needed.

## Open Questions

None - requirements are clear from the discussion.
