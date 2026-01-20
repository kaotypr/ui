import type { Meta, StoryObj } from "@storybook/react-vite"
import { Check } from "lucide-react"
import * as React from "react"
import { useState } from "react"

import { MultiCombobox } from "~/components/ui/multi-combobox"

const meta = {
  title: "UI/MultiCombobox",
  component: MultiCombobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A searchable, filterable multi-select component that allows users to select multiple options.

This component is built on top of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover) and [cmdk](https://cmdk.paco.me/).

### Features
- Multiple selection support
- Searchable options
- Filterable results
- Support for groups
- Badge display for selected items
- Expandable badge list
- Async loading state
- Infinite scroll support
- Responsive mobile drawer (optional)
- Custom item rendering
`,
      },
    },
  },
  argTypes: {
    // Props
    data: {
      description: "Array of options to display.",
      table: {
        type: { summary: "MultiComboboxOption[]" },
        category: "Props",
      },
      control: "object",
    },
    value: {
      description: "The controlled value of the selected items.",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "object",
    },
    defaultValue: {
      description: "The default value of the selected items (uncontrolled).",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "object",
    },
    placeholder: {
      description: "Placeholder text shown when no items are selected.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Select options..."' },
        category: "Props",
      },
      control: "text",
    },
    searchPlaceholder: {
      description: "Placeholder text for the search input.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Search..."' },
        category: "Props",
      },
      control: "text",
    },
    emptyMessage: {
      description: "Message to display when no results are found.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: '"No results found."' },
        category: "Props",
      },
      control: "text",
    },
    searchValue: {
      description: "The controlled value of the search input.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: "text",
    },
    debounceTime: {
      description: "Delay in milliseconds before onSearch is called.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Props",
      },
      control: "number",
    },
    maxDisplayedItems: {
      description: "Maximum number of selected items to display before showing 'more' badge.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
        category: "Props",
      },
      control: "number",
    },
    defaultExpanded: {
      description: "Whether the badge list is expanded by default.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    clearable: {
      description: "Whether the selection can be cleared.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    disabled: {
      description: "Whether the combobox is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    loading: {
      description: "Whether to show a loading state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    enableResponsive: {
      description: "Whether to use a Drawer on mobile devices.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    hasMore: {
      description: "Whether there are more items to load (for infinite scroll).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: "boolean",
    },
    loadingContent: {
      description: "Custom content to display while loading.",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
    },
    renderItem: {
      description: "Custom render function for items.",
      table: {
        type: {
          summary:
            "(option: MultiComboboxOption, isSelected: boolean) => React.ReactNode",
        },
        category: "Props",
      },
    },

    // Event Handlers
    onValueChange: {
      description: "Event handler called when the value changes.",
      table: {
        type: { summary: "(value: string[]) => void" },
        category: "Event Handlers",
      },
      action: "onValueChange",
    },
    onSearch: {
      description: "Event handler called when the search value changes.",
      table: {
        type: { summary: "(search: string) => void" },
        category: "Event Handlers",
      },
      action: "onSearch",
    },
    onLoadMore: {
      description:
        "Event handler called when scrolling to the bottom (if hasMore is true).",
      table: {
        type: { summary: "() => void" },
        category: "Event Handlers",
      },
      action: "onLoadMore",
    },

    // Styling
    className: {
      description: "Additional CSS class names for the trigger button.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: "text",
    },
    contentClassName: {
      description: "Additional CSS class names for the popover content.",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
      control: "text",
    },
  },
} satisfies Meta<typeof MultiCombobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
  { value: "vite", label: "Vite" },
  { value: "webpack", label: "Webpack" },
]

export const Default: Story = {
  args: {
    data: frameworks,
    placeholder: "Select frameworks...",
  },
}

export const WithDefaultValue: Story = {
  args: {
    data: frameworks,
    defaultValue: ["next.js", "remix"],
    placeholder: "Select frameworks...",
  },
  parameters: {
    docs: {
      description: {
        story: "Use `defaultValue` to set initial selected items (uncontrolled).",
      },
    },
  },
}

export const Searchable: Story = {
  args: {
    data: frameworks,
    placeholder: "Search frameworks...",
    searchPlaceholder: "Type to search...",
  },
  parameters: {
    docs: {
      description: {
        story: "Use `searchPlaceholder` to customize the search input placeholder.",
      },
    },
  },
}

export const Clearable: Story = {
  args: {
    data: frameworks,
    clearable: true,
    defaultValue: ["next.js", "remix", "astro"],
    placeholder: "Select and clear...",
  },
  parameters: {
    docs: {
      description: {
        story: "Set `clearable` to true to allow clearing all selections.",
      },
    },
  },
}

export const MaxDisplayedItems: Story = {
  args: {
    data: frameworks,
    maxDisplayedItems: 2,
    defaultValue: ["next.js", "remix", "astro", "nuxt.js", "sveltekit"],
    placeholder: "Select frameworks...",
  },
  parameters: {
    docs: {
      description: {
        story: "Use `maxDisplayedItems` to control how many badges are shown before collapsing.",
      },
    },
  },
}

export const Expanded: Story = {
  args: {
    data: frameworks,
    defaultExpanded: true,
    maxDisplayedItems: 2,
    defaultValue: ["next.js", "remix", "astro", "nuxt.js", "sveltekit"],
    placeholder: "Select frameworks...",
  },
  parameters: {
    docs: {
      description: {
        story: "Set `defaultExpanded` to true to show all badges by default.",
      },
    },
  },
}

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
    placeholder: "Loading...",
  },
  parameters: {
    docs: {
      description: {
        story: "Set `loading` to true to show a loading spinner.",
      },
    },
  },
}

export const Empty: Story = {
  args: {
    data: [],
    emptyMessage: "No frameworks found.",
    placeholder: "No options...",
  },
  parameters: {
    docs: {
      description: {
        story: "Use `emptyMessage` to customize the text shown when no results are found.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    data: frameworks,
    disabled: true,
    defaultValue: ["next.js"],
    placeholder: "Disabled",
  },
}

const ControlledWrapper = () => {
  const [value, setValue] = useState<string[]>(["next.js"])

  return (
    <div className="flex flex-col gap-4">
      <MultiCombobox
        data={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Controlled selection..."
      />
      <div className="text-sm text-muted-foreground">
        Selected values: {value.join(", ") || "none"}
      </div>
    </div>
  )
}

export const Controlled: Story = {
  args: {
    data: [],
  },
  render: () => <ControlledWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Example of controlled state using `value` and `onValueChange`.",
      },
    },
  },
}

const food = [
  { value: "apple", label: "Apple", group: "Fruits" },
  { value: "banana", label: "Banana", group: "Fruits" },
  { value: "orange", label: "Orange", group: "Fruits" },
  { value: "carrot", label: "Carrot", group: "Vegetables" },
  { value: "broccoli", label: "Broccoli", group: "Vegetables" },
  { value: "spinach", label: "Spinach", group: "Vegetables" },
  { value: "chicken", label: "Chicken", group: "Meat" },
  { value: "beef", label: "Beef", group: "Meat" },
  { value: "pork", label: "Pork", group: "Meat" },
]

export const Grouped: Story = {
  args: {
    data: food,
    placeholder: "Select food items...",
  },
  parameters: {
    docs: {
      description: {
        story: "Group options by providing a `group` property in the data objects.",
      },
    },
  },
}

export const CustomRender: Story = {
  args: {
    data: frameworks,
    renderItem: (item: any, isSelected: boolean) => (
      <div className="flex items-center gap-2">
        <span className="text-xl">{item.label.charAt(0)}</span>
        <div className="flex flex-col">
          <span className="font-bold">{item.label}</span>
          <span className="text-xs text-muted-foreground">{item.value}</span>
        </div>
        {isSelected && <Check className="ml-auto h-4 w-4" />}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Use `renderItem` to customize how each option is displayed.",
      },
    },
  },
}

const InfiniteScrollWrapper = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }).map((_, i) => ({
      label: `Item ${i + 1}`,
      value: `item-${i + 1}`,
    }))
  )
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const loadMore = React.useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }).map((_, i) => ({
          label: `Item ${prev.length + i + 1}`,
          value: `item-${prev.length + i + 1}`,
        })),
      ])
      setLoading(false)
      if (items.length >= 40) setHasMore(false)
    }, 1000)
  }, [items.length])

  return (
    <MultiCombobox
      data={items}
      onLoadMore={loadMore}
      hasMore={hasMore}
      loading={loading}
      placeholder="Scroll to load more..."
    />
  )
}

export const InfiniteScroll: Story = {
  args: {
    data: [],
  },
  render: () => <InfiniteScrollWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Use `hasMore` and `onLoadMore` to implement infinite scrolling.",
      },
    },
  },
}

const DebouncedWrapper = () => {
  const [search, setSearch] = useState("")
  const [log, setLog] = useState<string[]>([])

  const handleSearch = (val: string) => {
    setSearch(val)
    setLog((prev) =>
      [...prev, `Search: ${val} (${new Date().toISOString().split("T")[1]})`].slice(-5)
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <MultiCombobox
        data={frameworks}
        searchValue={search}
        onSearch={handleSearch}
        debounceTime={500}
        placeholder="Type to search (debounced)..."
      />
      <div className="text-xs text-muted-foreground border p-2 rounded">
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  )
}

export const DebouncedSearch: Story = {
  args: {
    data: [],
  },
  render: () => <DebouncedWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Use `debounceTime` to delay the `onSearch` callback.",
      },
    },
  },
}

export const Responsive: Story = {
  args: {
    data: frameworks,
    enableResponsive: true,
    placeholder: "Resize window to see drawer...",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Set `enableResponsive` to true to show a Drawer on mobile devices.",
      },
    },
  },
}

const ManySelectionsWrapper = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-4 w-[400px]">
      <MultiCombobox
        data={frameworks}
        value={value}
        onValueChange={setValue}
        maxDisplayedItems={3}
        placeholder="Select many frameworks..."
      />
      <div className="text-sm text-muted-foreground">
        {value.length} item{value.length !== 1 ? "s" : ""} selected
      </div>
    </div>
  )
}

export const ManySelections: Story = {
  args: {
    data: [],
  },
  render: () => <ManySelectionsWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Example with many selections showing the expand/collapse behavior.",
      },
    },
  },
}
