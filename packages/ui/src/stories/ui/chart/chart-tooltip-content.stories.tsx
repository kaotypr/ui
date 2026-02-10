import type { Meta, StoryObj } from "@storybook/react-vite"
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts"

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "~/components/ui/chart"

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig

const meta = {
	title: "UI/Chart/ChartTooltipContent",
	component: ChartTooltipContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"Custom tooltip content component for charts with configurable indicators and formatting.",
					"",
					"Must be used within a ChartContainer component to access chart configuration context.",
					"",
					"This component is built on top of [Recharts Tooltip](https://recharts.org/en-US/api/Tooltip).",
				].join("\n"),
			},
		},
	},
	argTypes: {
		active: {
			description: "Whether the tooltip is active (controlled by Recharts).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "undefined" },
				category: "Recharts Props",
			},
			control: { type: "boolean" },
		},
		payload: {
			description: "The data payload for the tooltip (controlled by Recharts).",
			table: {
				type: { summary: "TooltipPayload[]" },
				defaultValue: { summary: "undefined" },
				category: "Recharts Props",
			},
			control: false,
		},
		label: {
			description: "The label for the tooltip (controlled by Recharts).",
			table: {
				type: { summary: "string | number" },
				defaultValue: { summary: "undefined" },
				category: "Recharts Props",
			},
			control: { type: "text" },
		},
		indicator: {
			description: "The type of indicator to display for each data point.",
			table: {
				type: { summary: '"line" | "dot" | "dashed"' },
				defaultValue: { summary: '"dot"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["line", "dot", "dashed"],
		},
		hideLabel: {
			description: "Whether to hide the tooltip label.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		hideIndicator: {
			description: "Whether to hide the indicator (dot, line, or dashed).",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		labelFormatter: {
			description: "Custom function to format the label.",
			table: {
				type: { summary: "(value: any, payload: TooltipPayload[]) => React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		formatter: {
			description: "Custom function to format the value.",
			table: {
				type: {
					summary:
						"(value: any, name: string, item: TooltipPayload, index: number, payload: TooltipPayload[]) => React.ReactNode",
				},
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		color: {
			description: "Override the color for the indicator.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "color" },
		},
		nameKey: {
			description: "The key to use for looking up the name in the config.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		labelKey: {
			description: "The key to use for looking up the label in the config.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		labelClassName: {
			description: "Additional CSS class names to apply to the label",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof ChartTooltipContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		indicator: "dot",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Line
						type="monotone"
						dataKey="desktop"
						stroke="var(--color-desktop)"
						strokeWidth={2}
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="mobile"
						stroke="var(--color-mobile)"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default tooltip with dot indicators showing desktop and mobile data.",
			},
		},
	},
}

export const LineIndicator: Story = {
	args: {
		indicator: "line",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<AreaChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Area
						type="monotone"
						dataKey="desktop"
						fill="var(--color-desktop)"
						fillOpacity={0.6}
						stroke="var(--color-desktop)"
						strokeWidth={2}
					/>
					<Area
						type="monotone"
						dataKey="mobile"
						fill="var(--color-mobile)"
						fillOpacity={0.6}
						stroke="var(--color-mobile)"
						strokeWidth={2}
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip with line indicators for area chart data.",
			},
		},
	},
}

export const DashedIndicator: Story = {
	args: {
		indicator: "dashed",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Line
						type="monotone"
						dataKey="desktop"
						stroke="var(--color-desktop)"
						strokeWidth={2}
						strokeDasharray="5 5"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="mobile"
						stroke="var(--color-mobile)"
						strokeWidth={2}
						strokeDasharray="5 5"
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip with dashed line indicators for dashed line charts.",
			},
		},
	},
}

export const HideLabel: Story = {
	args: {
		indicator: "dot",
		hideLabel: true,
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<BarChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
					<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip with hidden label, showing only the data values.",
			},
		},
	},
}

export const HideIndicator: Story = {
	args: {
		indicator: "dot",
		hideIndicator: true,
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Line
						type="monotone"
						dataKey="desktop"
						stroke="var(--color-desktop)"
						strokeWidth={2}
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="mobile"
						stroke="var(--color-mobile)"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip with hidden indicators, showing only labels and values.",
			},
		},
	},
}

export const SingleSeries: Story = {
	args: {
		indicator: "dot",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer
				config={
					{
						desktop: {
							label: "Desktop",
							color: "var(--chart-1)",
						},
					} satisfies ChartConfig
				}
			>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent {...args} />} />
					<Line
						type="monotone"
						dataKey="desktop"
						stroke="var(--color-desktop)"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip for a single data series chart.",
			},
		},
	},
}
