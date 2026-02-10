## ADDED Requirements

### Requirement: ComponentPreview collapsed state shows code teaser
The ComponentPreview component SHALL display a collapsed code section showing approximately 3 lines of source code with a gradient fade overlay.

#### Scenario: Code teaser display
- **WHEN** a ComponentPreview is rendered in collapsed state
- **THEN** it SHALL show ~3 lines of syntax-highlighted source code
- **AND** a gradient fade SHALL overlay the code (fading to background color)
- **AND** a "View Code" button SHALL be centered over the faded area

### Requirement: ComponentPreview expanded state shows scrollable code
The ComponentPreview component SHALL expand to show a maximum visible height of ~12 lines with scrolling enabled for longer source files.

#### Scenario: Code expansion
- **WHEN** user clicks the "View Code" button
- **THEN** the code section SHALL expand to show up to 12 lines
- **AND** the section SHALL be vertically scrollable if code exceeds 12 lines
- **AND** a floating copy button SHALL appear in the top-right corner

### Requirement: ComponentPreview copy functionality
The ComponentPreview component SHALL provide a copy button to copy source code to clipboard.

#### Scenario: Copy source code
- **WHEN** user clicks the copy button in expanded state
- **THEN** the raw source code SHALL be copied to clipboard
- **AND** visual feedback SHALL indicate successful copy
