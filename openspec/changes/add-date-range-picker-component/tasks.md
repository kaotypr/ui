# Tasks: Add DateRangePicker Component

## 1. Component Implementation

- [x] 1.1 Create `date-range-picker.tsx` in `packages/ui/src/components/ui/`
- [x] 1.2 Implement `DateRangePicker` component with dual-month Calendar
- [x] 1.3 Add value types (`DateRange`) supporting both Date objects and ISO strings
- [x] 1.4 Implement controlled and uncontrolled value modes
- [x] 1.5 Add time picker integration with `showTime` prop
- [x] 1.6 Implement display format `dd/MM/yy - dd/MM/yy` (date only) and `dd/MM/yy HH:mm - dd/MM/yy HH:mm` (with time)
- [x] 1.7 Add clearable and disabled state support
- [x] 1.8 Support customizable calendar props via `calendarProps`

## 2. Exports

- [x] 2.1 Add export to `packages/ui/src/index.ts`
- [x] 2.2 Add per-component export entry in `packages/ui/package.json` (handled automatically by build)

## 3. Documentation

- [x] 3.1 Create Storybook stories folder `packages/ui/src/stories/ui/date-range-picker/`
- [x] 3.2 Write comprehensive Storybook stories covering all variants
- [x] 3.3 Document all props with argTypes

## 4. Validation

- [x] 4.1 Run TypeScript compilation check (`pnpm build`)
- [x] 4.2 Run Biome lint (`pnpm lint`)
- [x] 4.3 Test in Storybook (`pnpm ui storybook`)
