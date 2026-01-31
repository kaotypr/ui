## ADDED Requirements

### Requirement: Examples index generator scans example files
The `scripts/generate-examples-index.mjs` script SHALL scan `src/examples/` directories and generate a JSON metadata index.

#### Scenario: Script scans all example directories
- **WHEN** the script is executed
- **THEN** it SHALL recursively scan `src/examples/` for `*.tsx` files

#### Scenario: Script outputs JSON to content directory
- **WHEN** the script completes scanning
- **THEN** it SHALL write `content/docs/_examplesIndex.json`

### Requirement: Examples index includes metadata per example
Each entry in the examples index SHALL include metadata: name, file path, and optional tags.

#### Scenario: Index entry contains name
- **WHEN** processing `src/examples/accordion/accordion-demo.tsx`
- **THEN** the entry SHALL have `name: "accordion-demo"`

#### Scenario: Index entry contains file path
- **WHEN** processing an example file
- **THEN** the entry SHALL include the relative file path from project root

#### Scenario: Index entry contains component group
- **WHEN** processing `src/examples/accordion/accordion-demo.tsx`
- **THEN** the entry SHALL have a group or category of `"accordion"` (derived from parent directory)

### Requirement: Examples index extracts tags from JSDoc
The script SHALL extract tags from JSDoc comments in example files when present.

#### Scenario: Tags extracted from JSDoc @tags comment
- **WHEN** an example file contains `/** @tags basic, interactive */`
- **THEN** the entry SHALL include `tags: ["basic", "interactive"]`

#### Scenario: Missing JSDoc results in empty tags
- **WHEN** an example file has no JSDoc tags comment
- **THEN** the entry SHALL have `tags: []` or omit the tags field

### Requirement: Examples index JSON format
The output JSON SHALL be a structured object with examples grouped by component.

#### Scenario: JSON structure groups by component
- **WHEN** the index is generated
- **THEN** the output SHALL follow structure: `{ "accordion": [...], "button": [...] }`

### Requirement: pnpm script for examples index generation
The package.json SHALL include a `generate:examples` script that runs the examples index generator.

#### Scenario: Running generate:examples script
- **WHEN** a developer runs `pnpm generate:examples`
- **THEN** the examples index generator script SHALL execute
