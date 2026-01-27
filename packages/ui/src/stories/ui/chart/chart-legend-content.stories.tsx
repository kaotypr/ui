import type { Meta, StoryObj } from "@storybook/react-vite"
import { TrendUpIcon, TrendDownIcon } from "@phosphor-icons/react"
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
	ChartLegend,
	ChartLegendContent,
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

const chartConfigWithIcons = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
		icon: TrendUpIcon,
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
		icon: TrendDownIcon,
	},
} satisfies ChartConfig

const meta = {
	title: "UI/Chart/ChartLegendContent",
	component: ChartLegendContent,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"Custom legend content component for charts with icon support.",
					"",
					"Must be used within a ChartContainer component to access chart configuration context.",
					"",
					"This component is built on top of [Recharts Legend](https://recharts.org/en-US/api/Legend).",
				].join("\n"),
			},
		},
	},
	argTypes: {
		payload: {
			description: "The legend payload data (controlled by Recharts).",
			table: {
				type: { summary: "LegendPayload[]" },
				defaultValue: { summary: "undefined" },
				category: "Recharts Props",
			},
			control: false,
		},
		verticalAlign: {
			description: "The vertical alignment of the legend.",
			table: {
				type: { summary: '"top" | "bottom"' },
				defaultValue: { summary: '"bottom"' },
				category: "Recharts Props",
			},
			control: { type: "select" },
			options: ["top", "bottom"],
		},
		hideIcon: {
			description: "Whether to hide the icon even if one is configured.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
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
		className: {
			description: "Additional CSS class names to apply",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof ChartLegendContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		verticalAlign: "bottom",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
			<BarChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent {...args} />} />
				<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
				<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
			</BarChart>
		</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Default legend with color indicators showing desktop and mobile series.",
			},
		},
	},
}

export const WithIcons: Story = {
	args: {
		verticalAlign: "bottom",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfigWithIcons}>
			<LineChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent {...args} />} />
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
				story: "Legend with custom icons from the chart configuration.",
			},
		},
	},
}

export const TopAlignment: Story = {
	args: {
		verticalAlign: "top",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
			<AreaChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent {...args} />} />
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
				story: "Legend positioned at the top of the chart.",
			},
		},
	},
}

export const HideIcons: Story = {
	args: {
		verticalAlign: "bottom",
		hideIcon: true,
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfigWithIcons}>
			<BarChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent {...args} />} />
				<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
				<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
			</BarChart>
		</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Legend with icons hidden, showing only color indicators and labels.",
			},
		},
	},
}

export const SingleSeries: Story = {
	args: {
		verticalAlign: "bottom",
	},
	render: (args) => (
		<div className="w-[600px]">
			<ChartContainer
			config={{
				desktop: {
					label: "Desktop",
					color: "var(--chart-1)",
				},
			} satisfies ChartConfig}
		>
			<LineChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickLine={false} axisLine={false} tickMargin={8} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent {...args} />} />
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
				story: "Legend for a single data series chart.",
			},
		},
	},
}
