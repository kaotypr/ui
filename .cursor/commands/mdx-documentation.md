---
name: /mdx-documentation
id: mdx-documentation
category: Documentation
description: Generate MDX documentation for a UI component
---

Generate MDX documentation for a UI component.

## Input

Component name: $ARGUMENTS

## Instructions

Generate MDX documentation for the **$ARGUMENTS** component following these steps:

### 1. Research Phase

First, look up the component's Storybook stories to understand its API and variants:
- Read files in `packages/ui/src/stories/$ARGUMENTS/` folder
- Identify all story variants (e.g., basic, with-icons, disabled, etc.)
- Extract props and their types from the story files and component source

Also check:
- Component source at `packages/ui/src/$ARGUMENTS/` or `packages/ui/src/$ARGUMENTS.tsx`
- Existing examples at `apps/ui-docs/src/examples/$ARGUMENTS/` if they exist

### 2. Documentation Structure

Create the MDX file at `apps/ui-docs/content/docs/components/$ARGUMENTS.mdx` following this structure:

```mdx
---
title: [Component Title - PascalCase]
description: [Brief description of what the component does]
---

## Usage

<ComponentPreview name="$ARGUMENTS-demo" />

## Import

\`\`\`tsx
import { [ComponentName], [SubComponents...] } from "@kaotypr/ui/$ARGUMENTS"
\`\`\`

## Examples

### [Variant Name]

<ComponentPreview name="$ARGUMENTS-[variant]" />

[Add more example sections based on stories found]

## API Reference

[Link to base library if applicable, e.g., Base UI, Radix, etc.]

### [ComponentName]

[Description of the component]

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `type` | `default` | Description |

[Repeat for each sub-component]
```

### 3. ComponentPreview Names

The `name` attribute in `<ComponentPreview />` should match example file names (without extension) in `apps/ui-docs/src/examples/$ARGUMENTS/`:
- `$ARGUMENTS-demo` for the main usage example
- `$ARGUMENTS-[variant]` for each variant (e.g., `$ARGUMENTS-basic`, `$ARGUMENTS-disabled`)

### 4. API Reference Guidelines

- Document all public props for each exported component
- Include prop types using TypeScript syntax
- Show default values where applicable
- Group related props together
- Reference the underlying library (Base UI, Radix, etc.) if the component wraps one

### 5. Update meta.json

Add the component to `apps/ui-docs/content/docs/components/meta.json` if not already present:
- Add `"$ARGUMENTS"` to the `pages` array
- Keep the array alphabetically sorted (except for commonly used components like `button` which may be prioritized at the top)

### 6. Output

Generate the complete MDX documentation file. If example files don't exist yet in `apps/ui-docs/src/examples/$ARGUMENTS/`, note which examples need to be created based on the stories found.

## Reference

Use `apps/ui-docs/content/docs/components/accordion.mdx` as the reference for formatting and structure.
