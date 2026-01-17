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
  title: "UI/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A chart container component that provides styling and configuration for Recharts components.\n\nThis component is built on top of [Recharts](https://recharts.org/).\n\n### Component Parts\n- [ChartTooltipContent](?path=/story/ui-chart-charttooltipcontent--default): Custom tooltip content component that displays chart data with configurable indicators and labels.\n- [ChartLegendContent](?path=/story/ui-chart-chartlegendcontent--default): Custom legend content component that displays chart series with configurable icons and labels.\n\n### Usage\n\nBuild your charts using Recharts components directly. The ChartContainer provides styling and configuration context. Use ChartTooltipContent and ChartLegendContent for custom tooltips and legends.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The children of the chart container.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
    id: {
      description: "Optional ID for the chart. If not provided, a unique ID will be generated.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
    config: {
      description:
        "Configuration object for chart data series. Each key represents a data key, and the value contains label, icon, and color/theme information.",
      table: {
        type: { summary: "ChartConfig" },
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
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const barChartConfig = {
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
  args: {
    config: barChartConfig,
    children: <></>,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer {...args}>
        <BarChart data={barChartData}>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic bar chart displaying desktop and mobile data with custom tooltip and styling.",
      },
    },
  },
}

export const BarChartExample: Story = {
  args: {
    config: barChartConfig,
    children: <></>,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer {...args}>
        <BarChart data={barChartData}>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A bar chart displaying desktop and mobile data with custom tooltip and styling.",
      },
    },
  },
}

const lineChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const lineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export const LineChartExample: Story = {
  args: {
    config: lineChartConfig,
    children: <></>,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer {...args}>
        <LineChart data={lineChartData}>
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
        story: "A line chart displaying desktop and mobile trends over time.",
      },
    },
  },
}

export const WithLegend: Story = {
  args: {
    config: barChartConfig,
    children: <></>,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer {...args}>
        <BarChart data={barChartData}>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A bar chart with a custom legend displaying series labels and colors.",
      },
    },
  },
}

export const CustomId: Story = {
  args: {
    config: barChartConfig,
    children: <></>,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ChartContainer id="custom-chart" {...args}>
        <BarChart data={barChartData}>
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A chart with a custom ID for styling or identification purposes.",
      },
    },
  },
}
