import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "~/components/ui/chart"

const meta = {
  title: "UI/Chart/ChartLegendContent",
  component: ChartLegendContent,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Custom legend content component for charts. Displays chart series with configurable icons and labels. Must be used within a ChartContainer and passed to ChartLegend's content prop.",
      },
    },
  },
  argTypes: {
    payload: {
      description: "Array of legend items to display.",
      table: {
        type: { summary: "LegendPayload[]" },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: false,
    },
    verticalAlign: {
      description: "Vertical alignment of the legend.",
      table: {
        type: { summary: '"top" | "bottom"' },
        defaultValue: { summary: '"bottom"' },
        category: "Recharts Props",
      },
      control: { type: "radio" },
      options: ["top", "bottom"],
    },
    hideIcon: {
      description: "Whether to hide the icon/indicator for each series.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    nameKey: {
      description: "Key to use for looking up series name in the config.",
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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 273, mobile: 190 },
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

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer config={chartConfig}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
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
        story: "Default legend displaying series labels with color indicators at the bottom.",
      },
    },
  },
}

export const TopAligned: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <ChartContainer config={chartConfig}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <ChartLegend
            content={<ChartLegendContent verticalAlign="top" />}
            verticalAlign="top"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
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

export const HideIcon: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <ChartContainer config={chartConfig}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent hideIcon />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Legend with icons hidden, showing only text labels.",
      },
    },
  },
}

export const WithLineChart: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <ChartContainer config={chartConfig}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
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
        story: "Legend used with a line chart, showing series labels and colors.",
      },
    },
  },
}
