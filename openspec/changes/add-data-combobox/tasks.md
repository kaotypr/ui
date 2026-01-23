## 1. Implementation

- [x] 1.1 Create `packages/base-ui/src/components/ui/data-combobox.tsx` with component shell and types
- [x] 1.2 Implement `DataComboboxOption` interface with `label`, `value`, `disabled`, and `group` properties
- [x] 1.3 Implement `DataComboboxProps` interface with all specified props
- [x] 1.4 Implement trigger button using `Popover` with placeholder/selected label display
- [x] 1.5 Implement dropdown content using `ComboboxInput`, `ComboboxList`, and `ComboboxItem` primitives
- [x] 1.6 Implement controlled/uncontrolled value management with `value`, `defaultValue`, and `onValueChange`
- [x] 1.7 Implement `defaultValueOption` for initial render with label when option not in data
- [x] 1.8 Implement internal search filtering (case-insensitive label matching)
- [x] 1.9 Implement external controlled search with `searchValue` and `onSearch` props
- [x] 1.10 Implement search debouncing with `debounceTime` prop
- [x] 1.11 Implement option grouping with `ComboboxGroup` and `ComboboxLabel`
- [x] 1.12 Implement clearable functionality with clear button in trigger
- [x] 1.13 Implement empty state with `emptyMessage` prop using `ComboboxEmpty`
- [x] 1.14 Implement loading state with `loading` prop and `loadingContent`
- [x] 1.15 Implement infinite scroll with `onLoadMore` and `hasMore` using IntersectionObserver
- [x] 1.16 Implement custom item rendering with `renderItem` prop
- [x] 1.17 Implement responsive mode with `enableResponsive` using `Drawer` on mobile
- [x] 1.18 Implement popover positioning with `side` and `align` props
- [x] 1.19 Implement controlled open state with `open` and `onOpenChange` props
- [x] 1.20 Implement disabled state
- [x] 1.21 Ensure keyboard navigation works via primitive components

## 2. Testing & Documentation

- [x] 2.1 Create Storybook stories in `packages/base-ui/src/stories/data-combobox/`
- [x] 2.2 Add Default story with basic data array
- [x] 2.3 Add Controlled story demonstrating value control
- [x] 2.4 Add WithSearch story demonstrating search filtering
- [x] 2.5 Add WithGroups story demonstrating grouped options
- [x] 2.6 Add Clearable story demonstrating clear functionality
- [x] 2.7 Add Loading story demonstrating loading states
- [x] 2.8 Add InfiniteScroll story demonstrating load more
- [x] 2.9 Add CustomRenderItem story demonstrating custom rendering
- [x] 2.10 Add Responsive story demonstrating drawer on mobile
- [x] 2.11 Add Disabled story demonstrating disabled state
- [x] 2.12 Run TypeScript type check on component (`pnpm tsc --noEmit`)
- [x] 2.13 Run linter and fix any issues (`pnpm lint`)

## 3. Export Configuration

- [x] 3.1 Add data-combobox to package exports in `packages/base-ui/package.json`
- [x] 3.2 Add data-combobox to main index exports in `packages/base-ui/src/index.ts`
