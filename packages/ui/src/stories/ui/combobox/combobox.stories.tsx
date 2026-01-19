import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import * as React from "react"
import { Check } from "lucide-react"

import { Combobox } from "~/components/ui/combobox"

const meta = {
  title: "UI/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    value: { control: "text" },
    onValueChange: { action: "onValueChange" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    clearable: { control: "boolean" },
    enableResponsive: { control: "boolean" },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export const Default: Story = {
  args: {
    data: frameworks,
    placeholder: "Select framework...",
  },
}

export const Searchable: Story = {
  args: {
    data: frameworks,
    placeholder: "Search framework...",
    searchPlaceholder: "Type to search...",
  },
}

export const Clearable: Story = {
  args: {
    data: frameworks,
    clearable: true,
    placeholder: "Select and clear...",
  },
}

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
    placeholder: "Loading...",
  },
}

export const Empty: Story = {
  args: {
    data: [],
    emptyMessage: "No frameworks found.",
    placeholder: "No options...",
  },
}

export const Disabled: Story = {
  args: {
    data: frameworks,
    disabled: true,
    placeholder: "Disabled",
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
    <Combobox
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
}

const ControlledWrapper = () => {
  const [value, setValue] = useState("next.js")

  return (
    <div className="flex flex-col gap-4">
      <Combobox
        data={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Controlled selection..."
      />
      <div className="text-sm text-muted-foreground">
        Selected value: {value}
      </div>
    </div>
  )
}

export const Controlled: Story = {
  args: {
    data: [],
  },
  render: () => <ControlledWrapper />,
}

const food = [
  { value: "apple", label: "Apple", group: "Fruits" },
  { value: "banana", label: "Banana", group: "Fruits" },
  { value: "carrot", label: "Carrot", group: "Vegetables" },
  { value: "broccoli", label: "Broccoli", group: "Vegetables" },
  { value: "chicken", label: "Chicken", group: "Meat" },
  { value: "beef", label: "Beef", group: "Meat" },
]

export const Grouped: Story = {
  args: {
    data: food,
    placeholder: "Select food...",
  },
}

const DebouncedWrapper = () => {
    const [search, setSearch] = useState("")
    const [log, setLog] = useState<string[]>([])

    const handleSearch = (val: string) => {
        setSearch(val)
        setLog(prev => [...prev, `Search: ${val} (${new Date().toISOString().split('T')[1]})`].slice(-5))
    }

    return (
        <div className="flex flex-col gap-4">
            <Combobox
                data={frameworks}
                searchValue={search}
                onSearch={handleSearch}
                debounceTime={500}
                placeholder="Type to search (debounced)..."
            />
            <div className="text-xs text-muted-foreground border p-2 rounded">
                {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
        </div>
    )
}

export const DebouncedSearch: Story = {
    args: {
        data: [],
    },
    render: () => <DebouncedWrapper />
}

export const Responsive: Story = {
  args: {
    data: frameworks,
    enableResponsive: true,
    placeholder: "Resize window to see drawer...",
  },
  parameters: {
      viewport: {
          defaultViewport: 'mobile1'
      }
  }
}
