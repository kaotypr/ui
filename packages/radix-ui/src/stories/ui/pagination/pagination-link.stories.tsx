import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination"

const meta = {
  title: "UI/Pagination/PaginationLink",
  component: PaginationLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A clickable link for a specific page number. Must be used within a PaginationItem component.",
      },
    },
  },
  argTypes: {
    isActive: {
      description: "When true, indicates this is the current active page.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
      control: { type: "boolean" },
    },
    size: {
      description: "The size of the link button.",
      table: {
        type: { summary: '"default" | "sm" | "lg" | "icon"' },
        defaultValue: { summary: '"icon"' },
        category: "Props",
      },
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
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
    href: {
      description: "The URL to navigate to when the link is clicked.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof PaginationLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink {...args} href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic pagination links for page numbers.",
      },
    },
  },
}

export const Active: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "A pagination link in the active state, indicating the current page.",
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Icon size (default)</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" size="icon">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="icon" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="icon">
                3
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Small size</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" size="sm">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="sm" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="sm">
                3
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Default size</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" size="default">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="default" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="default">
                3
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large size</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" size="lg">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="lg" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="lg">
                3
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pagination links with different size variants.",
      },
    },
  },
}

export const WithClickHandler: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert("Clicked page 1")
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            onClick={(e) => {
              e.preventDefault()
              alert("Clicked page 2 (active)")
            }}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert("Clicked page 3")
            }}
          >
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pagination links with click handlers for custom navigation logic.",
      },
    },
  },
}
