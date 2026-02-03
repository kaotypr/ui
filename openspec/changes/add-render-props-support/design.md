## Context

Components in `packages/ui` wrap `@base-ui/react` primitives which inherently support a `render` prop for element customization. However, this capability is undocumented in Storybook. The existing story pattern (e.g., `popover-trigger.stories.tsx`) documents other base-ui props like `nativeButton`, `openOnHover`, `delay` but omits `render`.

Current story structure uses:
- `argTypes` object with categories ("Base UI Props", "Styling")
- `table` config for type summaries and default values
- Story examples with `parameters.docs.description.story`

## Goals / Non-Goals

**Goals:**
- Document the `render` prop in argTypes for all base-ui wrapper components
- Add example stories showing `render` prop usage patterns
- Maintain consistency with existing story documentation style

**Non-Goals:**
- Modifying component source code in `packages/ui/src/components/`
- Adding new functionality to components
- Documenting render props for components that don't wrap base-ui primitives

## Decisions

### 1. ArgType Definition Pattern

Add `render` to argTypes following existing conventions:

```typescript
render: {
  description:
    "Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a ReactElement or a function that returns the element to render.",
  table: {
    type: { summary: "ReactElement | ((props, state) => ReactElement)" },
    defaultValue: { summary: "undefined" },
    category: "Base UI Props",
  },
  control: false,
},
```

**Rationale**: Matches existing argType style, `control: false` because render props can't be edited in Storybook controls panel.

### 2. Example Story Patterns

Add two story variants per component:

1. **RenderAsElement** - Using `render` with a ReactElement
2. **RenderAsFunction** - Using `render` with a function to access state

**Rationale**: These are the two main usage patterns from base-ui's API. Function form is useful when users need access to component state (open, disabled, etc.).

### 3. Story Naming Convention

Use descriptive names that indicate render prop usage:
- `RenderAsLink` - For routing integration examples
- `RenderAsCustomElement` - For custom element replacement
- `RenderWithState` - For function form showing state access

**Rationale**: Clear naming helps users find relevant examples quickly.

## Risks / Trade-offs

**[Maintenance burden]** → Each component story needs updates; create a shared snippet/pattern to copy.

**[State type variations]** → Different components expose different state shapes in their render functions. Document component-specific state in each story's description.

**[Base-ui version coupling]** → Render prop API comes from base-ui; if it changes, docs need updates. Reference base-ui docs in component descriptions for authoritative source.
