import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState, useCallback } from "react"

import {
	DataMultiCombobox,
	type DataMultiComboboxOption,
} from "~/components/ui/data-multi-combobox"

// Sample data
const frameworks: DataMultiComboboxOption[] = [
	{ label: "Next.js", value: "nextjs" },
	{ label: "SvelteKit", value: "sveltekit" },
	{ label: "Nuxt.js", value: "nuxtjs" },
	{ label: "Remix", value: "remix" },
	{ label: "Astro", value: "astro" },
	{ label: "Gatsby", value: "gatsby" },
]

const groupedFrameworks: DataMultiComboboxOption[] = [
	{ label: "Next.js", value: "nextjs", group: "React" },
	{ label: "Gatsby", value: "gatsby", group: "React" },
	{ label: "Remix", value: "remix", group: "React" },
	{ label: "Nuxt.js", value: "nuxtjs", group: "Vue" },
	{ label: "SvelteKit", value: "sveltekit", group: "Svelte" },
	{ label: "Astro", value: "astro" },
]

const disabledFrameworks: DataMultiComboboxOption[] = [
	{ label: "Next.js", value: "nextjs" },
	{ label: "SvelteKit", value: "sveltekit", disabled: true },
	{ label: "Nuxt.js", value: "nuxtjs" },
	{ label: "Remix", value: "remix", disabled: true },
	{ label: "Astro", value: "astro" },
]

const manyFrameworks: DataMultiComboboxOption[] = [
	{ label: "Next.js", value: "nextjs" },
	{ label: "SvelteKit", value: "sveltekit" },
	{ label: "Nuxt.js", value: "nuxtjs" },
	{ label: "Remix", value: "remix" },
	{ label: "Astro", value: "astro" },
	{ label: "Gatsby", value: "gatsby" },
	{ label: "Angular", value: "angular" },
	{ label: "Vue", value: "vue" },
	{ label: "Solid", value: "solid" },
	{ label: "Qwik", value: "qwik" },
]

const meta = {
	title: "UI/DataMultiCombobox",
	component: DataMultiCombobox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
A data-driven multi-select combobox component that provides a simple prop-based API for common multi-select use cases.

This component is the multi-select variant of \`DataCombobox\`, using the same [@base-ui/react](https://base-ui.com/react/components/combobox) primitives with additional features:

### Features
- Data-driven options with \`data\` prop
- Multi-value selection stored as an array
- Badge-based display of selected values
- Collapsible badge display with \`maxDisplayedItems\` prop
- Expandable "+N more" / "Show less" toggle
- Individual item removal via badge X button
- Clear all functionality with \`clearable\` prop
- Checkbox-style selection indicators
- Built-in search filtering with optional debouncing
- Option grouping support
- Infinite scroll via \`onLoadMore\` callback
- Custom item rendering via \`renderItem\` prop
- Responsive mode with Drawer on mobile

### When to use
Use \`DataMultiCombobox\` for multi-select scenarios with array-based data. For single-select, use \`DataCombobox\`.
`,
			},
		},
	},
	argTypes: {
		// Data
		data: {
			description: "Array of options to display in the combobox.",
			table: {
				type: { summary: "DataMultiComboboxOption[]" },
				category: "Data",
			},
		},

		// Value control
		value: {
			description: "The controlled value of the selected options (array of strings).",
			table: {
				type: { summary: "string[]" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
		},
		defaultValue: {
			description: "The default value for uncontrolled mode (array of strings).",
			table: {
				type: { summary: "string[]" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
		},
		defaultValueOptions: {
			description:
				"Initial option objects for rendering labels when options may not be in data.",
			table: {
				type: { summary: "DataMultiComboboxOption[]" },
				defaultValue: { summary: "undefined" },
				category: "Value Control",
			},
		},
		onValueChange: {
			description:
				"Callback when the value changes. Receives value array and options array.",
			table: {
				type: {
					summary:
						"(value: string[], options: DataMultiComboboxOption[]) => void",
				},
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
			description: "Placeholder text shown when no options are selected.",
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
				category: "Search",
			},
			control: "text",
		},

		// Badge display
		maxDisplayedItems: {
			description:
				"Maximum number of badges to display before showing +N more.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "3" },
				category: "Badge Display",
			},
			control: "number",
		},
		defaultExpanded: {
			description: "Whether badges are expanded by default.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Badge Display",
			},
			control: "boolean",
		},

		// Features
		clearable: {
			description:
				"Whether all selections can be cleared with a clear button.",
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
			description:
				"When true, uses Drawer on mobile viewports instead of Popover.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: "boolean",
		},

		// Infinite scroll
		onLoadMore: {
			description:
				"Callback invoked when user scrolls near the bottom of the list.",
			table: {
				type: { summary: "() => void" },
				category: "Event Handlers",
			},
			action: "onLoadMore",
		},
		hasMore: {
			description:
				"Whether there are more items to load via infinite scroll.",
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
				type: {
					summary:
						"(option: DataMultiComboboxOption, isSelected: boolean) => React.ReactNode",
				},
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
			description:
				"The preferred side of the trigger to render the dropdown.",
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
} satisfies Meta<typeof DataMultiCombobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: frameworks,
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story: "Basic multi-select combobox with a simple array of options.",
			},
		},
	},
}

const ControlledWrapper = () => {
	const [values, setValues] = useState<string[]>([])

	return (
		<div className="flex flex-col gap-4">
			<DataMultiCombobox
				data={frameworks}
				value={values}
				onValueChange={(newValues) => setValues(newValues)}
				placeholder="Select frameworks..."
			/>
			<div className="text-sm text-muted-foreground">
				Selected: {values.length > 0 ? values.join(", ") : "None"}
			</div>
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
		defaultValue: ["nextjs", "remix"],
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Combobox with default values set for uncontrolled mode.",
			},
		},
	},
}

export const WithGroups: Story = {
	args: {
		data: groupedFrameworks,
		placeholder: "Select frameworks...",
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
		defaultValue: ["nextjs", "remix", "astro"],
		clearable: true,
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set `clearable` to true to show a clear all button when values are selected.",
			},
		},
	},
}

export const CustomRendering: Story = {
	args: {
		data: frameworks,
		placeholder: "Select frameworks...",
		renderItem: (option, isSelected) => (
			<div className="flex items-center gap-2 w-full">
				<span
					className={`w-2 h-2 rounded-full ${isSelected ? "bg-green-500" : "bg-gray-300"}`}
				/>
				<span className="font-medium">{option.label}</span>
				<span className="text-xs text-muted-foreground ml-auto">
					{option.value}
				</span>
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

export const Loading: Story = {
	args: {
		data: [],
		loading: true,
		placeholder: "Loading...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Display a loading indicator when `loading` is true and data is empty.",
			},
		},
	},
}

// Generate paginated data for infinite scroll demo
const generateOptions = (
	page: number,
	pageSize: number = 10,
): DataMultiComboboxOption[] => {
	const start = page * pageSize
	return Array.from({ length: pageSize }, (_, i) => ({
		label: `Option ${start + i + 1}`,
		value: `option-${start + i + 1}`,
	}))
}

const InfiniteScrollWrapper = () => {
	const [data, setData] = useState<DataMultiComboboxOption[]>(() =>
		generateOptions(0),
	)
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
		<DataMultiCombobox
			data={data}
			loading={loading}
			hasMore={hasMore}
			onLoadMore={handleLoadMore}
			placeholder="Select options..."
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
				story:
					"Use `onLoadMore` and `hasMore` to implement infinite scroll pagination.",
			},
		},
	},
}

export const ResponsiveMode: Story = {
	args: {
		data: frameworks,
		enableResponsive: true,
		placeholder: "Select frameworks...",
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
		defaultValue: ["nextjs", "remix"],
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story: "Set `disabled` to true to prevent user interaction.",
			},
		},
	},
}

export const CollapsibleBadges: Story = {
	args: {
		data: manyFrameworks,
		defaultValue: [
			"nextjs",
			"sveltekit",
			"nuxtjs",
			"remix",
			"astro",
			"gatsby",
		],
		maxDisplayedItems: 3,
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					'When more items are selected than `maxDisplayedItems`, a "+N more" badge appears. Click it to expand and show all badges.',
			},
		},
	},
}

export const CollapsibleBadgesExpanded: Story = {
	args: {
		data: manyFrameworks,
		defaultValue: [
			"nextjs",
			"sveltekit",
			"nuxtjs",
			"remix",
			"astro",
			"gatsby",
		],
		maxDisplayedItems: 3,
		defaultExpanded: true,
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					'Set `defaultExpanded` to true to show all badges by default with a "Show less" option.',
			},
		},
	},
}

const AsyncSearchWrapper = () => {
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
			<DataMultiCombobox
				data={filteredData}
				searchValue={searchValue}
				onSearch={handleSearch}
				loading={loading}
				placeholder="Select frameworks..."
				searchPlaceholder="Search (simulated API)..."
				debounceTime={300}
			/>
			<div className="text-sm text-muted-foreground">
				External search demo with 500ms simulated API delay and 300ms
				debounce.
			</div>
		</div>
	)
}

export const AsyncSearch: Story = {
	args: {
		data: frameworks,
	},
	render: () => <AsyncSearchWrapper />,
	parameters: {
		docs: {
			description: {
				story:
					"When `onSearch` is provided, the component calls this callback instead of filtering internally. Use `debounceTime` to reduce API calls.",
			},
		},
	},
}

export const WithDisabledOptions: Story = {
	args: {
		data: disabledFrameworks,
		placeholder: "Select frameworks...",
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

export const CustomMaxDisplayedItems: Story = {
	args: {
		data: manyFrameworks,
		defaultValue: [
			"nextjs",
			"sveltekit",
			"nuxtjs",
			"remix",
			"astro",
			"gatsby",
			"angular",
		],
		maxDisplayedItems: 5,
		placeholder: "Select frameworks...",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set `maxDisplayedItems` to customize how many badges are shown before collapsing.",
			},
		},
	},
}

export const CustomWidth: Story = {
	args: {
		data: frameworks,
		placeholder: "Custom width",
		className: "w-[400px]",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `className` to customize the trigger button width and styling.",
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
				story:
					'Use `side="top"` to position the dropdown above the trigger.',
			},
		},
	},
}

export const CustomEmptyMessage: Story = {
	args: {
		data: [],
		placeholder: "Select frameworks...",
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
