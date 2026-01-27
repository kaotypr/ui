import type { Meta, StoryObj } from "@storybook/react-vite"
import { MinusIcon } from "@phosphor-icons/react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

const meta = {
  title: "UI/Breadcrumb/BreadcrumbSeparator",
  component: BreadcrumbSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Visual separator between breadcrumb items.",
          "",
          "By default, renders a caret right icon. Custom separators can be provided as children.",
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
      description:
        "Custom separator content. If not provided, defaults to CaretRightIcon.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<CaretRightIcon />" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof BreadcrumbSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args} />
        <BreadcrumbItem>
          <BreadcrumbPage>Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default separator using the caret right icon.",
      },
    },
  },
}

export const SlashSeparator: Story = {
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <span>/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <span>/</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom separator using a forward slash character.",
      },
    },
  },
}

export const DashSeparator: Story = {
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <MinusIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <MinusIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom separator using a dash/minus icon.",
      },
    },
  },
}

export const TextSeparator: Story = {
  render: (args) => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <span className="text-xs">›</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator {...args}>
          <span className="text-xs">›</span>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom separator using a text character.",
      },
    },
  },
}
