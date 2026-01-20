## Context

The Combobox component is a commonly used form control that combines a text input with a dropdown list. It enables users to either type to filter options or select from a list. This component should integrate seamlessly with the existing component library patterns while leveraging established primitives.

### Stakeholders
- Developers consuming `@kaotypr/ui` who need searchable select functionality
- Form libraries (react-hook-form) that need controlled components

### Constraints
- Must follow existing component patterns (data-slot attributes, cn utility, CVA variants)
- Must be accessible (keyboard navigation, ARIA attributes)
- Must work with React 18/19
- Must support tree-shaking via dedicated entry point

## Goals / Non-Goals

### Goals
- Provide a data-driven combobox accepting `{ label, value }[]` options
- Support search/filtering with cmdk integration
- Enable infinite scroll for large datasets
- Allow clearing the selection
- Maintain full keyboard accessibility
- Support both controlled and uncontrolled modes

### Non-Goals
- Multi-select mode (separate `MultiCombobox` component)
- Server-side search (consumer handles via `onSearch` callback)
- Async data loading (consumer provides data, uses `loading` prop)
- Virtualization (can be added later if performance requires)

## Decisions

### Decision 1: Build on cmdk + Popover
**What**: Use cmdk for search/filtering logic and Radix Popover for positioning.
**Why**: cmdk already provides battle-tested search functionality and keyboard navigation. Radix Popover handles positioning and portal rendering.
**Alternatives considered**:
- Radix Select: Does not support text input/filtering
- Custom implementation: Higher maintenance burden, reinventing the wheel

### Decision 2: Data-driven API
**What**: Accept a `data` prop with array of `{ label: string, value: string, disabled?: boolean, group?: string }` objects.
**Why**: Simplifies common use case, reduces boilerplate compared to compound component pattern.
**Alternatives considered**:
- Compound components only: More flexible but more verbose for common cases
- Will expose sub-components for advanced customization if needed

### Decision 3: Option Grouping via Data Property
**What**: Support grouping by adding optional `group` property to option objects.
**Why**: Allows logical grouping without changing the flat data structure. Options with the same `group` value are rendered under a group header.
**Alternatives considered**:
- Nested data structure: More complex to type and manage

### Decision 4: Render prop for custom items
**What**: Provide `renderItem` prop for custom item rendering while maintaining default rendering.
**Why**: Balances simplicity (default) with flexibility (custom) without breaking the data-driven model.

### Decision 5: Infinite scroll via callback
**What**: Provide `onLoadMore` callback triggered when scrolling near the bottom.
**Why**: Keeps data fetching in consumer control, component remains stateless regarding data.
**Implementation**: IntersectionObserver on a sentinel element at list bottom.

### Decision 6: Debounced Search
**What**: Provide `debounceTime` prop (in milliseconds) to debounce search input changes.
**Why**: Prevents excessive filtering/callbacks on every keystroke, improves performance for server-side search scenarios.
**Default**: 0 (no debounce) for immediate filtering.

### Decision 7: Responsive Mode with Drawer
**What**: Provide `enableResponsive` prop to switch from Popover to Drawer on mobile viewports.
**Why**: Drawer provides better UX on mobile devices with limited screen space and touch interactions.
**Implementation**: Use media query or viewport detection to conditionally render Drawer (via vaul) instead of Popover on mobile.

## Component API

```tsx
interface ComboboxOption {
  label: string
  value: string
  disabled?: boolean
  group?: string
}

interface ComboboxProps {
  // Data
  data: ComboboxOption[]
  
  // Value control
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  
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
  renderItem?: (option: ComboboxOption, isSelected: boolean) => React.ReactNode
  emptyMessage?: React.ReactNode
  loadingContent?: React.ReactNode
  
  // Styling
  className?: string
  contentClassName?: string
}
```

## Risks / Trade-offs

### Risk: Performance with large datasets
**Mitigation**: Infinite scroll reduces initial render cost. Virtualization can be added later if needed.

### Risk: cmdk dependency
**Mitigation**: cmdk is already a dependency (used by Command component), no additional bundle size.

### Trade-off: Data-driven vs Compound components
**Decision**: Start with data-driven API for simplicity. Can add compound component exports later for advanced use cases.

## Open Questions

1. Should we support grouping options (like SelectGroup)? 
   - **Resolution**: Yes, via optional `group` property on options. Included in initial release.

2. Should multi-select be included in initial release?
   - **Resolution**: No, multi-select will be a separate `MultiCombobox` component.
