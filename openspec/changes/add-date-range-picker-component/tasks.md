# Tasks: Add DateRangePicker Component

## 1. Component Implementation

- [ ] 1.1 Create `date-range-picker.tsx` in `packages/ui/src/components/ui/`
- [ ] 1.2 Implement `DateRangePicker` component with dual-month Calendar
- [ ] 1.3 Add value types (`DateRange`) supporting both Date objects and ISO strings
- [ ] 1.4 Implement controlled and uncontrolled value modes
- [ ] 1.5 Add time picker integration with `showTime` prop
- [ ] 1.6 Implement display format `dd/MM/yy - dd/MM/yy` (date only) and `dd/MM/yy HH:mm - dd/MM/yy HH:mm` (with time)
- [ ] 1.7 Add clearable and disabled state support
- [ ] 1.8 Support customizable calendar props via `calendarProps`

## 2. Exports

- [ ] 2.1 Add export to `packages/ui/src/index.ts`
- [ ] 2.2 Add per-component export entry in `packages/ui/package.json`

## 3. Documentation

- [ ] 3.1 Create Storybook stories folder `packages/ui/src/stories/ui/date-range-picker/`
- [ ] 3.2 Write comprehensive Storybook stories covering all variants
- [ ] 3.3 Document all props with argTypes

## 4. Validation

- [ ] 4.1 Run TypeScript compilation check (`pnpm tsc --noEmit`)
- [ ] 4.2 Run Biome lint (`pnpm lint`)
- [ ] 4.3 Test in Storybook (`pnpm ui storybook`)
