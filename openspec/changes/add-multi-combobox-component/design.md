## Context

The `MultiCombobox` component extends the existing `Combobox` component pattern to support multiple selections. It reuses the same underlying primitives (Command, Popover, Drawer) and follows the same data-driven approach with `ComboboxOption` interface.

Key stakeholders: Developers building forms with multi-select requirements (tags, categories, assignees).

## Goals / Non-Goals

**Goals:**
- Provide a multi-select combobox with badge-based display of selected items
- Support collapsible badge display with configurable max visible items
- Maintain feature parity with single-select Combobox (search, grouping, infinite scroll, responsive)
- Follow existing component patterns and conventions

**Non-Goals:**
- Drag-and-drop reordering of selected items
- Virtualized badge rendering (not needed for typical use cases)
- Custom badge styling via render props (use className for now)

## Decisions

### Decision: Separate Component vs Prop on Combobox

**Choice:** Create a separate `MultiCombobox` component rather than adding a `multiple` prop to `Combobox`.

**Rationale:**
- Different value types (`string` vs `string[]`) would complicate TypeScript types
- Different trigger rendering (badges vs single label)
- Different selection behavior (toggle vs replace)
- Cleaner API and easier to maintain
- Follows shadcn/ui pattern of separate components for different behaviors

### Decision: Badge Expansion UX

**Choice:** Use a "+N more" badge that expands inline, with a "Show less" badge to collapse.

**Rationale:**
- Inline expansion is less disruptive than a popover/tooltip
- Clear affordance for expansion/collapse
- Works well with keyboard navigation
- Consistent with common UI patterns (Gmail, Slack)

### Decision: Badge Removal

**Choice:** Each badge has an X button for individual removal; clear all via `clearable` prop shows single clear button.

**Rationale:**
- Individual removal is expected UX for multi-select
- Clear all is optional and uses existing `clearable` pattern
- X button on badges is standard pattern

## Risks / Trade-offs

- **Risk:** Many selected items could cause layout issues
  - **Mitigation:** `maxDisplayedItems` prop with sensible default (3), badges wrap naturally

- **Risk:** Performance with many selections
  - **Mitigation:** Typical use cases have <50 selections; no virtualization needed initially

## Migration Plan

Not applicable - new component, no breaking changes.

## Open Questions

None - requirements are clear from the request.
