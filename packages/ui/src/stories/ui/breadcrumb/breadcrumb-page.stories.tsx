import type { Meta, StoryObj } from "@storybook/react-vite"
import { FileIcon } from "@phosphor-icons/react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

const meta = {
  title: "UI/Breadcrumb/BreadcrumbPage",
  component: BreadcrumbPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "The current page indicator in a breadcrumb trail.",
          "",
          "This component is non-interactive and represents the user's current location. It has `aria-current=\"page\"` for accessibility.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
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
      description: "The text content representing the current page.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof BreadcrumbPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Current Page",
  },
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage {...args} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default current page indicator in the breadcrumb trail.",
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    className: "flex items-center gap-1",
  },
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage {...args}>
            <FileIcon className="size-4" />
            Report.pdf
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Current page indicator with an icon.",
      },
    },
  },
}

export const LongText: Story = {
  args: {
    children: "This is a very long page title that might need truncation",
    className: "max-w-48 truncate",
  },
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage {...args} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Current page with long text that can be truncated using className.",
      },
    },
  },
}
