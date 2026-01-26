import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState, useCallback } from "react"

import { DataCombobox, type DataComboboxOption } from "~/components/ui/data-combobox"

// Sample data
const frameworks: DataComboboxOption[] = [
	{ label: "Next.js", value: "nextjs" },
	{ label: "SvelteKit", value: "sveltekit" },
	{ label: "Nuxt.js", value: "nuxtjs" },
	{ label: "Remix", value: "remix" },
	{ label: "Astro", value: "astro" },
	{ label: "Gatsby", value: "gatsby" },
]

const groupedFrameworks: DataComboboxOption[] = [
	{ label: "Next.js", value: "nextjs", group: "React" },
	{ label: "Gatsby", value: "gatsby", group: "React" },
	{ label: "Remix", value: "remix", group: "React" },
	{ label: "Nuxt.js", value: "nuxtjs", group: "Vue" },
	{ label: "SvelteKit", value: "sveltekit", group: "Svelte" },
	{ label: "Astro", value: "astro" },
]

const disabledFrameworks: DataComboboxOption[] = [
	{ label: "Next.js", value: "nextjs" },
	{ label: "SvelteKit", value: "sveltekit", disabled: true },
	{ label: "Nuxt.js", value: "nuxtjs" },
	{ label: "Remix", value: "remix", disabled: true },
	{ label: "Astro", value: "astro" },
]

const meta = {
	title: "UI/DataCombobox",
	component: DataCombobox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
A data-driven combobox component that provides a simple prop-based API for common combobox use cases.

This component wraps the primitive Combobox components from [@base-ui/react](https://base-ui.com/react/components/combobox) with additional features:

### Features
- Data-driven options with \`data\` prop
- Both controlled and uncontrolled value management
- Built-in search filtering with optional debouncing
- Option grouping support
- Infinite scroll via \`onLoadMore\` callback
- Custom item rendering via \`renderItem\` prop
- Responsive mode with Drawer on mobile
- Clearable selection
- Loading states

### When to use
Use \`DataCombobox\` for common combobox scenarios with array-based data. For more advanced composition needs, use the primitive \`Combobox*\` components directly.
`,
			},
		},
	},
	argTypes: {
		// Data
		data: {
			description: "Array of options to display in the combobox.",
			table: {
				type: { summary: "DataComboboxOption[]" },
				category: "Data",
			},
		},

		// Value control
		value: {
			description: "The controlled value of the selected option.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
			control: "text",
		},
		defaultValue: {
			description: "The default value for uncontrolled mode.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
			control: "text",
		},
		defaultValueOption: {
			description: "Initial option object for rendering label when option may not be in data.",
			table: {
				type: { summary: "DataComboboxOption" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
		},
		onValueChange: {
			description: "Callback when the value changes. Receives value string and option object.",
			table: {
				type: { summary: "(value: string, option: DataComboboxOption | null) => void" },
				category: "Event Handlers",
			},
			action: "onValueChange",
		},

		// Search
		searchValue: {
			description: "Controlled search input value.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Search",
			},
			control: "text",
		},
		onSearch: {
			description:
				"Callback when search value changes. When provided, internal filtering is disabled.",
			table: {
				type: { summary: "(search: string) => void" },
				category: "Event Handlers",
			},
			action: "onSearch",
		},
		debounceTime: {
			description: "Debounce time in milliseconds for search callbacks.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
				category: "Search",
			},
			control: "number",
		},
		placeholder: {
			description: "Placeholder text shown when no option is selected.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Select option..."' },
				category: "Props",
			},
			control: "text",
		},
		searchPlaceholder: {
			description: "Placeholder text for the search input.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Search..."' },
				category: "Search",
			},
			control: "text",
		},

		// Features
		clearable: {
			description: "Whether the selection can be cleared with a clear button.",
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
			description: "Whether the combobox is in a loading state.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: "boolean",
		},
		enableResponsive: {
			description: "When true, uses Drawer on mobile viewports instead of Popover.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: "boolean",
		},

		// Infinite scroll
		onLoadMore: {
			description: "Callback invoked when user scrolls near the bottom of the list.",
			table: {
				type: { summary: "() => void" },
				category: "Event Handlers",
			},
			action: "onLoadMore",
		},
		hasMore: {
			description: "Whether there are more items to load via infinite scroll.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Infinite Scroll",
			},
			control: "boolean",
		},

		// Custom rendering
		renderItem: {
			description: "Custom render function for each option item.",
			table: {
				type: { summary: "(option: DataComboboxOption, isSelected: boolean) => React.ReactNode" },
				category: "Custom Rendering",
			},
		},
		emptyMessage: {
			description: "Content to display when no options match the search.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: '"No results found."' },
				category: "Custom Rendering",
			},
			control: "text",
		},
		loadingContent: {
			description: "Custom loading indicator content.",
			table: {
				type: { summary: "React.ReactNode" },
				category: "Custom Rendering",
			},
		},

		// Positioning
		side: {
			description: "The preferred side of the trigger to render the dropdown.",
			table: {
				type: { summary: '"top" | "bottom"' },
				defaultValue: { summary: '"bottom"' },
				category: "Positioning",
			},
			control: "select",
			options: ["top", "bottom"],
		},
		align: {
			description: "The alignment of the dropdown relative to the trigger.",
			table: {
				type: { summary: '"start" | "center" | "end"' },
				defaultValue: { summary: '"start"' },
				category: "Positioning",
			},
			control: "select",
			options: ["start", "center", "end"],
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
			description: "Additional CSS class names for the dropdown content.",
			table: {
				type: { summary: "string" },
				category: "Styling",
			},
			control: "text",
		},

		// Accessibility
		name: {
			description: "Name attribute for the trigger button.",
			table: {
				type: { summary: "string" },
				category: "Accessibility",
			},
			control: "text",
		},
		id: {
			description: "ID attribute for the trigger button.",
			table: {
				type: { summary: "string" },
				category: "Accessibility",
			},
			control: "text",
		},
	},
} satisfies Meta<typeof DataCombobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: frameworks,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story: "Basic data combobox with a simple array of options.",
			},
		},
	},
}

const ControlledWrapper = () => {
	const [value, setValue] = useState<string>("")

	return (
		<div className="flex flex-col gap-4">
			<DataCombobox
				data={frameworks}
				value={value}
				onValueChange={(newValue) => setValue(newValue)}
				placeholder="Select framework..."
			/>
			<div className="text-sm text-muted-foreground">Selected: {value || "None"}</div>
		</div>
	)
}

export const Controlled: Story = {
	args: {
		data: frameworks,
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

export const WithDefaultValue: Story = {
	args: {
		data: frameworks,
		defaultValue: "nextjs",
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story: "Combobox with a default value set for uncontrolled mode.",
			},
		},
	},
}

export const WithSearch: Story = {
	args: {
		data: frameworks,
		placeholder: "Select framework...",
		searchPlaceholder: "Search frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Type in the search input to filter options. Internal filtering is case-insensitive and matches on labels.",
			},
		},
	},
}

const ExternalSearchWrapper = () => {
	const [searchValue, setSearchValue] = useState("")
	const [filteredData, setFilteredData] = useState(frameworks)
	const [loading, setLoading] = useState(false)

	const handleSearch = useCallback((search: string) => {
		setSearchValue(search)
		setLoading(true)

		// Simulate API call
		setTimeout(() => {
			const filtered = frameworks.filter((item) =>
				item.label.toLowerCase().includes(search.toLowerCase()),
			)
			setFilteredData(filtered)
			setLoading(false)
		}, 500)
	}, [])

	return (
		<div className="flex flex-col gap-4">
			<DataCombobox
				data={filteredData}
				searchValue={searchValue}
				onSearch={handleSearch}
				loading={loading}
				placeholder="Select framework..."
				searchPlaceholder="Search (simulated API)..."
				debounceTime={300}
			/>
			<div className="text-sm text-muted-foreground">
				External search demo with 500ms simulated API delay and 300ms debounce.
			</div>
		</div>
	)
}

export const ExternalSearch: Story = {
	args: {
		data: frameworks,
	},
	render: () => <ExternalSearchWrapper />,
	parameters: {
		docs: {
			description: {
				story:
					"When `onSearch` is provided, the component calls this callback instead of filtering internally. Use `debounceTime` to reduce API calls.",
			},
		},
	},
}

export const WithGroups: Story = {
	args: {
		data: groupedFrameworks,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Options can be grouped by providing a `group` property. Ungrouped items appear first.",
			},
		},
	},
}

export const Clearable: Story = {
	args: {
		data: frameworks,
		defaultValue: "nextjs",
		clearable: true,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story: "Set `clearable` to true to show a clear button when a value is selected.",
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
				story: "Display a loading indicator when `loading` is true and data is empty.",
			},
		},
	},
}

export const LoadingWithData: Story = {
	args: {
		data: frameworks.slice(0, 3),
		loading: true,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"When loading and data exists, a loading indicator appears at the bottom while options remain selectable.",
			},
		},
	},
}

// Generate paginated data for infinite scroll demo
const generateOptions = (page: number, pageSize: number = 10): DataComboboxOption[] => {
	const start = page * pageSize
	return Array.from({ length: pageSize }, (_, i) => ({
		label: `Option Longer Text That Might Need to Be fixed ${start + i + 1}`,
		value: `option-${start + i + 1}`,
	}))
}

const InfiniteScrollWrapper = () => {
	const [data, setData] = useState<DataComboboxOption[]>(() => generateOptions(0))
	const [page, setPage] = useState(0)
	const [loading, setLoading] = useState(false)
	const [hasMore, setHasMore] = useState(true)

	const handleLoadMore = useCallback(() => {
		if (loading) return

		setLoading(true)
		// Simulate API delay
		setTimeout(() => {
			const nextPage = page + 1
			const newOptions = generateOptions(nextPage)

			if (nextPage >= 4) {
				setHasMore(false)
			}

			setData((prev) => [...prev, ...newOptions])
			setPage(nextPage)
			setLoading(false)
		}, 1000)
	}, [page, loading])

	return (
			<DataCombobox
				data={data}
				loading={loading}
				hasMore={hasMore}
				onLoadMore={handleLoadMore}
				placeholder="Select option..."
				searchPlaceholder="Search options..."
			/>
	)
}

export const InfiniteScroll: Story = {
	args: {
		data: frameworks,
	},
	render: () => <InfiniteScrollWrapper />,
	parameters: {
		docs: {
			description: {
				story: "Use `onLoadMore` and `hasMore` to implement infinite scroll pagination.",
			},
		},
	},
}

export const CustomRenderItem: Story = {
	args: {
		data: frameworks,
		placeholder: "Select framework...",
		renderItem: (option, isSelected) => (
			<div className="flex items-center gap-2 w-full">
				<span className={`w-2 h-2 rounded-full ${isSelected ? "bg-green-500" : "bg-gray-300"}`} />
				<span className="font-medium">{option.label}</span>
				<span className="text-xs text-muted-foreground ml-auto">{option.value}</span>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `renderItem` to customize how each option is rendered. The function receives the option and selection state.",
			},
		},
	},
}

export const CustomEmptyMessage: Story = {
	args: {
		data: [],
		placeholder: "Select framework...",
		emptyMessage: (
			<div className="flex flex-col items-center gap-2 py-4">
				<span className="text-2xl">🔍</span>
				<span>No frameworks found</span>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					"Customize the empty state message with `emptyMessage`. Can be a string or React node.",
			},
		},
	},
}

export const Responsive: Story = {
	args: {
		data: frameworks,
		enableResponsive: true,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set `enableResponsive` to true to use a Drawer on mobile viewports (< 768px) instead of a Popover.",
			},
		},
	},
}

export const Disabled: Story = {
	args: {
		data: frameworks,
		disabled: true,
		defaultValue: "nextjs",
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story: "Set `disabled` to true to prevent user interaction.",
			},
		},
	},
}

export const WithDisabledOptions: Story = {
	args: {
		data: disabledFrameworks,
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Individual options can be disabled by setting `disabled: true` on the option object.",
			},
		},
	},
}

export const PositionTop: Story = {
	args: {
		data: frameworks,
		side: "top",
		placeholder: "Opens above...",
	},
	decorators: [
		(Story) => (
			<div className="pt-64">
				<Story />
			</div>
		),
	],
	parameters: {
		docs: {
			description: {
				story: 'Use `side="top"` to position the dropdown above the trigger.',
			},
		},
	},
}

export const AlignEnd: Story = {
	args: {
		data: frameworks,
		align: "end",
		placeholder: "Aligns to end...",
	},
	parameters: {
		docs: {
			description: {
				story: 'Use `align="end"` to align the dropdown to the end of the trigger.',
			},
		},
	},
}

export const CustomWidth: Story = {
	args: {
		data: frameworks,
		placeholder: "Custom width",
		className: "w-[300px]",
	},
	parameters: {
		docs: {
			description: {
				story: "Use `className` to customize the trigger button width and styling.",
			},
		},
	},
}

export const WithDefaultValueOption: Story = {
	args: {
		data: [],
		defaultValueOption: { label: "Preloaded Framework", value: "preloaded" },
		placeholder: "Select framework...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `defaultValueOption` to display a label when the selected option may not be present in the initial data array (useful for async data loading).",
			},
		},
	},
}
