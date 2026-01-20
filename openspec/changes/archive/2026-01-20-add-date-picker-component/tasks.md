## 1. Implementation

- [x] 1.1 Create `date-picker.tsx` component file with base structure
- [x] 1.2 Implement DatePicker trigger with Popover integration
- [x] 1.3 Integrate Calendar component with controlled selection
- [x] 1.4 Implement value control (controlled/uncontrolled, Date/string support)
- [x] 1.5 Implement display format using date-fns
- [x] 1.6 Add time selection UI (hours, minutes, seconds inputs)
- [x] 1.7 Implement time granularity props (showTime, showHours, showMinutes, showSeconds)
- [x] 1.8 Implement clearable functionality
- [x] 1.9 Implement calendarProps pass-through with type exclusions
- [x] 1.10 Add disabled state handling
- [x] 1.11 Ensure keyboard navigation works correctly

## 2. Export Configuration

- [x] 2.1 Add DatePicker export to `packages/ui/src/index.ts`
- [x] 2.2 Configure Vite build entry point for tree-shaking (automatic via glob)

## 3. Documentation

- [x] 3.1 Create Storybook stories folder `packages/ui/src/stories/ui/date-picker/`
- [x] 3.2 Write Default story
- [x] 3.3 Write WithTime story (time selection enabled)
- [x] 3.4 Write WithTimeAndSeconds story
- [x] 3.5 Write CustomFormat story
- [x] 3.6 Write Clearable story
- [x] 3.7 Write Controlled story
- [x] 3.8 Write WithDisabledDates story (demonstrating calendarProps)
- [x] 3.9 Write Disabled story
- [x] 3.10 Document all props in argTypes
