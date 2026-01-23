## Context

The `base-ui` package needs a TimePicker component. The design uses scroll-area based columns that display all options simultaneously in a visual, scannable format. This matches modern time picker patterns seen in mobile and desktop applications.

**Reference Design:** The target UI shows:
- Side-by-side scrollable columns for hours, minutes, seconds, and AM/PM
- Checkmarks indicating selected values
- Summary bar at bottom with clock icon and formatted time

## Goals / Non-Goals

**Goals:**
- Implement scroll-area based column layout for time selection in base-ui
- Provide smooth scrolling with auto-scroll to selected values
- Support popover display mode with summary bar
- Support 12-hour (meridiem) and 24-hour formats
- Support controlled and uncontrolled value management

**Non-Goals:**
- Mobile-specific optimizations (touch gestures, larger hit areas)
- Date-time combination picker (separate component)

## Decisions

### Decision: Use ScrollArea component for each time unit column

Each column (hours, minutes, seconds, meridiem) will use the existing `ScrollArea` component from base-ui to provide native-feeling scrolling behavior.

**Alternatives considered:**
- Custom virtualized list: More complex, overkill for 60 items max
- CSS overflow-y scroll: Less consistent behavior, no custom scrollbar styling

### Decision: Column-based layout with fixed height

Columns will have a fixed height (approximately 200px) to show around 7-8 visible items. This provides context while keeping the component compact.

### Decision: Popover with summary bar

In popover mode, a summary bar at the bottom displays the current selection with a clock icon. This provides immediate feedback and matches the reference design.

### Decision: Click-to-select interaction

Users click/tap on an item to select it. No drag-to-scroll-and-select behavior. This is simpler and more predictable.

## Component Architecture

```
TimePicker (root)
└── Popover
    ├── PopoverTrigger (Button with clock icon + value + clear button)
    └── PopoverContent
        ├── TimePickerContent (columns layout)
        │   ├── TimePickerColumn (hours)
        │   ├── TimePickerColumn (minutes) [if showMinutes]
        │   ├── TimePickerColumn (seconds) [if showSeconds]
        │   └── TimePickerColumn (meridiem) [if meridiem]
        └── TimePickerSummary (clock icon + formatted time)
```

### TimePickerColumn Props

```typescript
interface TimePickerColumnProps {
  options: { value: string; label: string; disabled?: boolean }[]
  value?: string
  onValueChange: (value: string) => void
  className?: string
}
```

## Risks / Trade-offs

- **Performance with many options:** Unlikely issue since max 60 items (seconds)
- **Accessibility:** Need to ensure keyboard navigation works within scroll areas
- **Scroll snap:** May add CSS scroll-snap for better UX, test across browsers first

## Open Questions

- Should the summary bar be clickable to toggle the popover closed?
- Should there be visual separators (colons) between columns in inline mode?
