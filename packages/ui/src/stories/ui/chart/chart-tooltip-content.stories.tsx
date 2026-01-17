import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart"

const meta = {
  title: "UI/Chart/ChartTooltipContent",
  component: ChartTooltipContent,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Custom tooltip content component for charts. Displays chart data with configurable indicators, labels, and formatting. Must be used within a ChartContainer and passed to ChartTooltip's content prop.",
      },
    },
  },
  argTypes: {
    active: {
      description: "Whether the tooltip is active (shown).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: { type: "boolean" },
    },
    payload: {
      description: "Array of data items to display in the tooltip.",
      table: {
        type: { summary: "TooltipPayload[]" },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: false,
    },
    label: {
      description: "The label for the tooltip (typically the x-axis value).",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: { type: "text" },
    },
    indicator: {
      description: "The type of indicator to display for each data series.",
      table: {
        type: { summary: '"dot" | "line" | "dashed"' },
        defaultValue: { summary: '"dot"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["dot", "line", "dashed"],
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
      description: "Whether to hide the indicator (dot/line) for each series.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    labelFormatter: {
      description: "Custom function to format the tooltip label.",
      table: {
        type: { summary: "(value: any, payload: any[]) => React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
    formatter: {
      description: "Custom function to format the tooltip content.",
      table: {
        type: {
          summary:
            "(value: any, name: any, item: any, index: number, payload: any) => React.ReactNode",
        },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: false,
    },
    color: {
      description: "Override color for the tooltip indicator.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Recharts Props",
      },
      control: { type: "color" },
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
    labelKey: {
      description: "Key to use for looking up label in the config.",
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
      description: "Additional CSS class names for the label",
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
        story: "Default tooltip with dot indicators showing series labels and values.",
      },
    },
  },
}

export const LineIndicator: Story = {
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
          <ChartTooltip
            content={<ChartTooltipContent indicator="line" />}
          />
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
        story: "Tooltip with line indicators, suitable for line charts.",
      },
    },
  },
}

export const DashedIndicator: Story = {
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
          <ChartTooltip
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip with dashed line indicators.",
      },
    },
  },
}

export const HideLabel: Story = {
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
          <ChartTooltip
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip with the label hidden, showing only the data series.",
      },
    },
  },
}

export const HideIndicator: Story = {
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
          <ChartTooltip
            content={<ChartTooltipContent hideIndicator />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip with indicators hidden, showing only labels and values.",
      },
    },
  },
}
