## ADDED Requirements

### Requirement: Render prop argType definition
Each story file for a base-ui wrapper component SHALL include a `render` argType definition in the `argTypes` object with category "Base UI Props".

#### Scenario: ArgType appears in autodocs
- **WHEN** a user views the autodocs for a base-ui wrapper component
- **THEN** the `render` prop SHALL appear in the props table under "Base UI Props" category with type `ReactElement | ((props, state) => ReactElement)` and description explaining element replacement capability

### Requirement: Render prop example with ReactElement
Each story file for a base-ui wrapper component SHALL include at least one story demonstrating the `render` prop with a ReactElement value.

#### Scenario: User views ReactElement render example
- **WHEN** a user views the stories for a component (e.g., PopoverTrigger, DialogClose, TabsTab)
- **THEN** there SHALL be a story showing `render={<CustomElement />}` usage pattern

#### Scenario: Example renders correctly
- **WHEN** the ReactElement render story is rendered in Storybook
- **THEN** the custom element SHALL replace the default element while maintaining component behavior

### Requirement: Render prop example with function
Each story file for a base-ui wrapper component SHALL include at least one story demonstrating the `render` prop with a render function that accesses component state.

#### Scenario: User views function render example
- **WHEN** a user views the stories for a component
- **THEN** there SHALL be a story showing `render={(props, state) => <Element {...props} />}` usage pattern

#### Scenario: State access demonstrated
- **WHEN** the function render story is rendered
- **THEN** the story description SHALL explain what state properties are available (e.g., open, disabled, selected)

### Requirement: Story description explains render prop
Each render prop example story SHALL include a `parameters.docs.description.story` that explains the use case and pattern.

#### Scenario: Description provides context
- **WHEN** a user reads a render prop story in autodocs
- **THEN** the description SHALL explain when and why to use this pattern (e.g., "Use render prop to integrate with React Router Link")

### Requirement: Components to document
The following base-ui wrapper components in packages/ui SHALL have render prop documentation added to their story files:

**Accordion**: AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionPanel
**Alert Dialog**: AlertDialogRoot, AlertDialogTrigger, AlertDialogPortal, AlertDialogPopup, AlertDialogBackdrop, AlertDialogTitle, AlertDialogDescription, AlertDialogClose
**Avatar**: AvatarRoot, AvatarImage, AvatarFallback
**Checkbox**: CheckboxRoot, CheckboxIndicator
**Collapsible**: CollapsibleRoot, CollapsibleTrigger, CollapsiblePanel
**Combobox**: ComboboxRoot, ComboboxTrigger, ComboboxInput, ComboboxPopup, ComboboxPositioner, ComboboxList, ComboboxItem, ComboboxItemIndicator, ComboboxValue, ComboboxIcon, ComboboxArrow, ComboboxBackdrop, ComboboxPortal, ComboboxGroup, ComboboxGroupLabel
**Context Menu**: ContextMenuRoot, ContextMenuTrigger
**Dialog**: DialogRoot, DialogTrigger, DialogPortal, DialogPopup, DialogBackdrop, DialogTitle, DialogDescription, DialogClose
**Drawer**: DrawerRoot, DrawerTrigger, DrawerPortal, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose
**Dropdown Menu**: DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuGroup, DropdownMenuGroupLabel, DropdownMenuSeparator, DropdownMenuArrow
**Field**: FieldRoot, FieldLabel, FieldDescription, FieldError, FieldControl
**Hover Card**: HoverCardRoot, HoverCardTrigger, HoverCardPortal, HoverCardContent
**Input**: Input
**Menubar**: MenubarRoot, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarCheckboxItem, MenubarRadioItem, MenubarRadioGroup, MenubarGroup, MenubarGroupLabel, MenubarSeparator
**Navigation Menu**: NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport, NavigationMenuIndicator
**Number Input**: NumberInputRoot, NumberInputGroup, NumberInputIncrement, NumberInputDecrement, NumberInputInput
**Popover**: PopoverRoot, PopoverTrigger, PopoverPortal, PopoverPositioner, PopoverPopup, PopoverArrow, PopoverBackdrop, PopoverTitle, PopoverDescription, PopoverClose
**Progress**: ProgressRoot, ProgressIndicator, ProgressTrack
**Radio Group**: RadioGroupRoot, RadioGroupItem, RadioGroupIndicator
**Scroll Area**: ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb
**Select**: SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectPositioner, SelectPopup, SelectList, SelectItem, SelectItemIndicator, SelectItemText, SelectArrow, SelectGroup, SelectGroupLabel
**Separator**: Separator
**Sheet**: SheetRoot, SheetTrigger, SheetPortal, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose
**Slider**: SliderRoot, SliderTrack, SliderThumb, SliderValue
**Switch**: SwitchRoot, SwitchThumb
**Tabs**: TabsRoot, TabsList, TabsTab, TabsPanel, TabsIndicator
**Toggle**: Toggle
**Toggle Group**: ToggleGroupRoot
**Tooltip**: TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipPositioner, TooltipPopup, TooltipArrow

#### Scenario: All base-ui wrapper components documented
- **WHEN** a user browses component stories
- **THEN** each component listed above SHALL have render prop argType and example stories
