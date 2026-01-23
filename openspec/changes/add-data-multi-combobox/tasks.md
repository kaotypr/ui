## 1. Component Implementation

- [ ] 1.1 Create `packages/base-ui/src/components/ui/data-multi-combobox.tsx` with component shell and types
- [ ] 1.2 Implement `DataMultiComboboxOption` and `DataMultiComboboxProps` interfaces
- [ ] 1.3 Implement multi-value state management (controlled and uncontrolled)
- [ ] 1.4 Implement badge display for selected values
- [ ] 1.5 Implement collapsible badge display with `maxDisplayedItems`
- [ ] 1.6 Implement expandable "+N more" / "Show less" toggle
- [ ] 1.7 Implement individual item removal via badge X button
- [ ] 1.8 Implement clear all functionality
- [ ] 1.9 Implement checkbox-style selection indicators
- [ ] 1.10 Implement search filtering (internal and external)
- [ ] 1.11 Implement debounced search via `debounceTime`
- [ ] 1.12 Implement option grouping
- [ ] 1.13 Implement loading state and infinite scroll
- [ ] 1.14 Implement responsive mode (Drawer on mobile)
- [ ] 1.15 Implement disabled state
- [ ] 1.16 Implement custom item rendering via `renderItem`
- [ ] 1.17 Implement popover positioning via `side` and `align` props

## 2. Storybook Stories

- [ ] 2.1 Create Storybook stories in `packages/base-ui/src/stories/data-multi-combobox/`
- [ ] 2.2 Add Default story with basic usage
- [ ] 2.3 Add Controlled story demonstrating external state management
- [ ] 2.4 Add WithGroups story showing option grouping
- [ ] 2.5 Add Clearable story demonstrating clear all functionality
- [ ] 2.6 Add CustomRendering story with `renderItem`
- [ ] 2.7 Add Loading story with loading state
- [ ] 2.8 Add InfiniteScroll story demonstrating load more
- [ ] 2.9 Add ResponsiveMode story with Drawer on mobile
- [ ] 2.10 Add Disabled story
- [ ] 2.11 Add CollapsibleBadges story with `maxDisplayedItems`
- [ ] 2.12 Add AsyncSearch story with debounced external search

## 3. Exports and Integration

- [ ] 3.1 Add data-multi-combobox to package exports in `packages/base-ui/package.json`
- [ ] 3.2 Add data-multi-combobox to main index exports in `packages/base-ui/src/index.ts`
- [ ] 3.3 Run `pnpm tsc --noEmit` to verify TypeScript compilation
- [ ] 3.4 Run `pnpm lint` to verify code quality
- [ ] 3.5 Test component in Storybook
