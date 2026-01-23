## Context

The base-ui package provides primitive combobox components from `@base-ui/react` that require manual composition. While flexible, this requires consumers to write significant boilerplate for common patterns like data-driven options, search filtering, and infinite scroll.

This design creates a higher-level `DataCombobox` component that wraps these primitives with a simple prop-based API.

## Goals / Non-Goals

**Goals:**
- Provide a simple data-driven combobox API for common use cases
- Support both controlled and uncontrolled modes
- Enable search filtering with optional debouncing
- Support option grouping
- Enable infinite scroll with `onLoadMore` callback
- Support custom rendering of options
- Support responsive mode (Popover on desktop, Drawer on mobile)

**Non-Goals:**
- Multi-selection (that's a separate `DataMultiCombobox` component)
- Virtualization (can be added later if performance requires)
- Async data fetching built-in (consumers handle this via `onSearch`/`onLoadMore`)

## Decisions

### Component API

The component will use a single-component API with props rather than compound components:

```tsx
<DataCombobox
  data={options}
  value={selected}
  onValueChange={(value, option) => setSelected(value)}
  searchPlaceholder="Search..."
  clearable
/>
```

**Rationale**: For data-driven components, a single component with props is simpler than compound components. The primitive `Combobox*` components remain available for advanced composition needs.

### Props Design

```tsx
interface DataComboboxOption {
  label: string
  value: string
  disabled?: boolean
  group?: string
}

interface DataComboboxProps {
  // Data
  data: DataComboboxOption[]
  
  // Value control
  value?: string
  defaultValue?: string
  defaultValueOption?: DataComboboxOption  // For initial render with label
  onValueChange?: (value: string, option: DataComboboxOption | null) => void
  
  // Search
  searchValue?: string
  onSearch?: (search: string) => void
  debounceTime?: number
  placeholder?: string
  searchPlaceholder?: string
  
  // Features
  clearable?: boolean
  disabled?: boolean
  loading?: boolean
  enableResponsive?: boolean
  
  // Infinite scroll
  onLoadMore?: () => void
  hasMore?: boolean
  
  // Custom rendering
  renderItem?: (option: DataComboboxOption, isSelected: boolean) => React.ReactNode
  emptyMessage?: React.ReactNode
  loadingContent?: React.ReactNode
  
  // Open state control
  open?: boolean
  onOpenChange?: (open: boolean) => void
  
  // Positioning
  side?: "top" | "bottom"
  align?: "start" | "center" | "end"
  
  // Styling
  className?: string
  contentClassName?: string
  
  // Accessibility
  name?: string
  id?: string
}
```

### Search Behavior

1. **Internal filtering** (default): When `onSearch` is not provided, the component filters `data` internally by matching option labels against search text (case-insensitive).

2. **External search**: When `onSearch` is provided, the component calls this callback with the search string. The consumer is responsible for updating `data`. This enables server-side search.

3. **Debouncing**: The `debounceTime` prop debounces search callbacks to prevent excessive API calls.

### Infinite Scroll

Uses `IntersectionObserver` to detect when user scrolls near the bottom of the options list. When `hasMore` is true and the sentinel element is visible, `onLoadMore` is called.

### Responsive Mode

When `enableResponsive` is true:
- Desktop: Content renders in a `Popover`
- Mobile (< 768px): Content renders in a `Drawer`

Uses the `useIsMobile` hook for viewport detection.

### Component Structure

```
DataCombobox
├── Trigger (Button with selected label or placeholder)
│   ├── Label/Placeholder
│   ├── Clear button (when clearable and value selected)
│   └── Chevron icon
└── Content (Popover or Drawer based on viewport)
    ├── Search input (using ComboboxInput)
    ├── Options list (using ComboboxList)
    │   ├── Empty state (when no options)
    │   ├── Loading state (when loading and no data)
    │   ├── Option groups (when options have group property)
    │   │   └── Group header + items
    │   └── Ungrouped items
    └── Load more sentinel (when hasMore)
```

## Risks / Trade-offs

**Risk**: Performance with large datasets
- **Mitigation**: Infinite scroll is the primary pagination strategy. Virtualization can be added as a future enhancement if needed.

**Risk**: Search debounce complexity
- **Mitigation**: Use a simple `useEffect` with `setTimeout` cleanup pattern. Consider extracting to a `useDebounce` hook if reused.

**Trade-off**: Single component vs compound components
- Chose single component for simplicity. Advanced use cases can still use the primitive `Combobox*` components directly.

## Open Questions

None currently. All major design decisions have been resolved based on the existing `packages/ui/combobox.tsx` implementation patterns.
