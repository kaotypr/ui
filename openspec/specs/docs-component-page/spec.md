## ADDED Requirements

### Requirement: ComponentPreview displays stacked preview and code layout
The ComponentPreview component SHALL render a stacked layout with the live component preview on top and a collapsible code section below, following shadcn/ui docs pattern.

#### Scenario: Default collapsed state
- **WHEN** a user views a component documentation page with ComponentPreview
- **THEN** the live component preview SHALL be displayed at the top
- **AND** a collapsed code section SHALL appear below showing a few lines of source code

#### Scenario: Code section shows line numbers
- **WHEN** the code section is rendered
- **THEN** line numbers SHALL be displayed alongside the source code

### Requirement: ComponentPreview code section has expand/collapse behavior
The code section SHALL have a "View Code" button that expands the code area to a defined max-height with scroll behavior.

#### Scenario: Expanding code section
- **WHEN** a user clicks the "View Code" button
- **THEN** the code section SHALL expand to show more source code
- **AND** the expanded area SHALL have a defined max-height with vertical scroll for long code

#### Scenario: Collapsing code section
- **WHEN** the code section is expanded and user clicks to collapse
- **THEN** the code section SHALL return to its collapsed state showing only a few lines

### Requirement: ComponentPreview includes copy button
The ComponentPreview component SHALL include a copy button in the code section that copies the source code to the clipboard.

#### Scenario: Copy button copies source code
- **WHEN** a user clicks the copy button in the code section
- **THEN** the component source code SHALL be copied to the clipboard
- **AND** a visual confirmation (checkmark icon) SHALL appear briefly

#### Scenario: Copy button handles clipboard API unavailability
- **WHEN** a user clicks the copy button and Clipboard API is unavailable
- **THEN** the system SHALL display a tooltip or message indicating copy is not supported

### Requirement: ComponentPreview styling matches shadcn docs
The ComponentPreview component SHALL use consistent border, padding, and styling that matches shadcn/ui documentation cards.

#### Scenario: Preview card has bordered container
- **WHEN** a ComponentPreview is rendered
- **THEN** it SHALL have a bordered container with rounded corners
- **AND** the preview area SHALL have adequate padding for the component display

#### Scenario: Code section has syntax highlighting
- **WHEN** the code section is rendered
- **THEN** the source code SHALL be displayed with syntax highlighting matching the site theme

### Requirement: MDX uses ComponentPreview wrapper pattern
Component documentation MDX files SHALL use the `<ComponentPreview name="example-name" />` pattern to embed interactive examples.

#### Scenario: ComponentPreview resolves example by name
- **WHEN** MDX contains `<ComponentPreview name="accordion-demo" />`
- **THEN** the system SHALL render the component registered as "accordion-demo" in the examples index

#### Scenario: ComponentPreview shows error for missing example
- **WHEN** MDX references a non-existent example name
- **THEN** the system SHALL display an error message indicating the example was not found

### Requirement: Component docs include API Reference section
Component documentation pages SHALL include an API Reference section with a props table following shadcn/ui convention.

#### Scenario: Props table displays component properties
- **WHEN** a user views a component documentation page with an API Reference section
- **THEN** a table SHALL display columns: Prop, Type, Default, Description

#### Scenario: Props table uses markdown format
- **WHEN** an author writes component documentation
- **THEN** they SHALL use standard markdown table syntax for the API Reference section
