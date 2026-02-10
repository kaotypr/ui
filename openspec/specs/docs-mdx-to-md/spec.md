## ADDED Requirements

### Requirement: MDX-to-MD script converts component documentation
The `scripts/mdx-to-md.mjs` script SHALL convert MDX files from `content/docs/components/` to plain markdown files in `public/docs/components/`.

#### Scenario: Script processes all component MDX files
- **WHEN** the script is executed
- **THEN** it SHALL process all `*.mdx` files in `content/docs/components/`
- **AND** output corresponding `*.md` files to `public/docs/components/`

#### Scenario: Script preserves file naming
- **WHEN** processing `content/docs/components/accordion.mdx`
- **THEN** the output SHALL be `public/docs/components/accordion.md`

### Requirement: MDX-to-MD strips ComponentPreview tags
The conversion script SHALL remove `<ComponentPreview>` JSX tags from the output, as they are not valid in plain markdown.

#### Scenario: ComponentPreview tags are removed
- **WHEN** MDX contains `<ComponentPreview name="accordion-demo" />`
- **THEN** the output markdown SHALL NOT contain the ComponentPreview tag

#### Scenario: Self-closing JSX tags are removed
- **WHEN** MDX contains self-closing JSX tags like `<ComponentPreview ... />`
- **THEN** they SHALL be stripped from the output

### Requirement: MDX-to-MD preserves frontmatter
The conversion script SHALL preserve YAML frontmatter (title, description) in the output markdown.

#### Scenario: Frontmatter is retained
- **WHEN** MDX has frontmatter with title and description
- **THEN** the output markdown SHALL retain the same frontmatter block

### Requirement: MDX-to-MD preserves standard markdown content
The conversion script SHALL preserve all standard markdown content including headings, paragraphs, code blocks, lists, and tables.

#### Scenario: Markdown headings are preserved
- **WHEN** MDX contains markdown headings like `## Usage`
- **THEN** they SHALL appear unchanged in the output

#### Scenario: Code blocks are preserved
- **WHEN** MDX contains fenced code blocks
- **THEN** they SHALL appear unchanged in the output

#### Scenario: Markdown tables are preserved
- **WHEN** MDX contains markdown tables (e.g., API Reference)
- **THEN** they SHALL appear unchanged in the output

### Requirement: MDX-to-MD creates output directory
The script SHALL create the output directory (`public/docs/components/`) if it does not exist.

#### Scenario: Directory creation on first run
- **WHEN** the script runs and `public/docs/components/` does not exist
- **THEN** the script SHALL create the directory before writing files

### Requirement: pnpm script for MDX-to-MD conversion
The package.json SHALL include a `generate:md` script that runs the MDX-to-MD conversion.

#### Scenario: Running generate:md script
- **WHEN** a developer runs `pnpm generate:md`
- **THEN** the MDX-to-MD conversion script SHALL execute
