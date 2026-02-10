## Why

Components in `packages/ui` that wrap `@base-ui/react` primitives already support the `render` prop through base-ui, but this capability is not documented in the component stories. Users are unaware they can customize the rendered element (e.g., render a trigger as a custom component, integrate with routing libraries) because there are no examples or argType documentation showing this feature.

## What Changes

- Add `render` prop documentation to stories for components that pass through to base-ui primitives
- Add argType definitions describing the `render` prop behavior
- Add story examples demonstrating common `render` prop use cases (custom elements, render functions with state access)

Components to document (those wrapping base-ui with render prop support):

**Accordion** - Root, Item, Header, Trigger, Panel
**Alert Dialog** - Root, Trigger, Portal, Popup, Backdrop, Title, Description, Close
**Avatar** - Root, Image, Fallback
**Checkbox** - Root, Indicator
**Collapsible** - Root, Trigger, Panel
**Combobox** - Root, Trigger, Input, Popup, Positioner, List, Item, ItemIndicator, Value, Icon, Arrow, Backdrop, Portal, Group, GroupLabel
**Context Menu** - Root, Trigger
**Dialog** - Root, Trigger, Portal, Popup, Backdrop, Title, Description, Close
**Drawer** - Root, Trigger, Portal, Content, Header, Footer, Title, Description, Close
**Dropdown Menu** - Root, Trigger, Portal, Content, Item, CheckboxItem, RadioItem, RadioGroup, Group, GroupLabel, Separator, Arrow
**Field** - Root, Label, Description, Error, Control
**Hover Card** - Root, Trigger, Portal, Content
**Input** - Input
**Menubar** - Root, Menu, Trigger, Content, Item, CheckboxItem, RadioItem, RadioGroup, Group, GroupLabel, Separator
**Navigation Menu** - Root, List, Item, Trigger, Content, Link, Viewport, Indicator
**Number Input** - Root, Group, Increment, Decrement, Input
**Popover** - Root, Trigger, Portal, Positioner, Popup, Arrow, Backdrop, Title, Description, Close
**Progress** - Root, Indicator, Track
**Radio Group** - Root, Item, Indicator
**Scroll Area** - Root, Viewport, Scrollbar, Thumb
**Select** - Root, Trigger, Value, Icon, Portal, Positioner, Popup, List, Item, ItemIndicator, ItemText, Arrow, Group, GroupLabel
**Separator** - Separator
**Sheet** - Root, Trigger, Portal, Content, Header, Footer, Title, Description, Close
**Slider** - Root, Track, Thumb, Value
**Switch** - Root, Thumb
**Tabs** - Root, List, Tab, Panel, Indicator
**Toggle** - Toggle
**Toggle Group** - Root
**Tooltip** - Provider, Root, Trigger, Portal, Positioner, Popup, Arrow

## Capabilities

### New Capabilities

- `render-props-documentation`: Guidelines and patterns for documenting render props in component stories, including argType definitions and example stories

### Modified Capabilities

(none)

## Impact

- **Code**: Story files in `packages/ui/src/stories/ui/` will be updated
- **No component changes**: The actual components remain unchanged
- **Documentation**: Storybook autodocs will show render prop capability for relevant components
- **Developer experience**: Users will discover and understand how to use render props through stories
