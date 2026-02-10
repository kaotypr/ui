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

const meta = {
	title: "UI/Chart",
	component: ChartContainer,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A wrapper component for Recharts that provides theming, styling, and context for chart components.",
					"",
					"This component is built on top of [Recharts](https://recharts.org/).",
					"",
					"### Component Parts",
					"- [ChartTooltipContent](?path=/story/ui-chart-charttooltipcontent--default): Custom tooltip content component with configurable indicators and formatting.",
					"- [ChartLegendContent](?path=/story/ui-chart-chartlegendcontent--default): Custom legend content component with icon support.",
					"",
					"### Usage",
					"Wrap any Recharts chart component (LineChart, BarChart, AreaChart, etc.) with ChartContainer and provide a config object for theming.",
				].join("\n"),
			},
		},
	},
	argTypes: {
		id: {
			description:
				"Optional unique identifier for the chart. If not provided, a unique ID will be generated.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		config: {
			description:
				"Chart configuration object that maps data keys to labels, colors, and optional icons. Supports both single color and theme-based colors.",
			table: {
				type: {
					summary:
						"ChartConfig: { [key: string]: { label?: React.ReactNode; icon?: React.ComponentType } & ({ color?: string; theme?: never } | { color?: never; theme: { light: string; dark: string } }) }",
				},
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
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
		children: {
			description: "The Recharts chart component to render (LineChart, BarChart, AreaChart, etc.).",
			table: {
				type: { summary: "React.ComponentProps<typeof ResponsiveContainer>['children']" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof ChartContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
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
				story:
					"Default line chart example showing desktop and mobile data over time with tooltip and legend.",
			},
		},
	},
}

export const LineChartExample: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent />} />
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
				story: "A line chart showing desktop and mobile data over time.",
			},
		},
	},
}

export const BarChartExample: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<BarChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
					<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A bar chart comparing desktop and mobile data with legend.",
			},
		},
	},
}

export const AreaChartExample: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<AreaChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
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
				story: "An area chart with filled areas showing desktop and mobile trends.",
			},
		},
	},
}

export const SingleSeries: Story = {
	args: {} as any,
	render: () => (
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
					<ChartTooltip content={<ChartTooltipContent />} />
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
				story: "A simple line chart with a single data series.",
			},
		},
	},
}

export const WithoutTooltip: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<BarChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
					<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A bar chart without tooltip, showing only the legend.",
			},
		},
	},
}

export const WithoutLegend: Story = {
	args: {} as any,
	render: () => (
		<div className="w-[600px]">
			<ChartContainer config={chartConfig}>
				<AreaChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
					<YAxis tickLine={false} axisLine={false} tickMargin={8} />
					<ChartTooltip content={<ChartTooltipContent />} />
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
				story: "An area chart without legend, showing only the tooltip on hover.",
			},
		},
	},
}
