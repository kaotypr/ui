import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "~/components/ui/pagination"

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A navigation component for displaying pagination controls, allowing users to navigate through multiple pages of content.\n\nThis component is part of [shadcn/ui](https://ui.shadcn.com/docs/components/pagination).\n\n### Component Parts\n- [PaginationContent](?path=/story/ui-pagination-paginationcontent--default): The container for pagination items, rendered as an unordered list.\n- [PaginationItem](?path=/story/ui-pagination-paginationitem--default): A single pagination item container.\n- [PaginationLink](?path=/story/ui-pagination-paginationlink--default): A clickable link for a specific page number.\n- [PaginationPrevious](?path=/story/ui-pagination-paginationprevious--default): A button to navigate to the previous page.\n- [PaginationNext](?path=/story/ui-pagination-paginationnext--default): A button to navigate to the next page.\n- [PaginationEllipsis](?path=/story/ui-pagination-paginationellipsis--default): An ellipsis indicator for collapsed page numbers.",
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
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pagination component with previous, next, and page number links.",
      },
    },
  },
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A pagination component with ellipsis to indicate collapsed intermediate pages.",
      },
    },
  },
}

export const ManyPages: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
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
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A pagination component showing a typical pattern for many pages with ellipsis on both sides.",
      },
    },
  },
}

export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A pagination component on the first page, with the previous button disabled.",
      },
    },
  },
}

export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="pointer-events-none opacity-50" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A pagination component on the last page, with the next button disabled.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    const renderPageNumbers = () => {
      const pages = []
      const showEllipsis = totalPages > 7

      if (!showEllipsis) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(i)
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          )
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={i === currentPage}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(i)
                  }}
                >
                  {i}
                </PaginationLink>
              </PaginationItem>
            )
          }
          pages.push(
            <PaginationItem key="ellipsis">
              <PaginationEllipsis />
            </PaginationItem>
          )
          pages.push(
            <PaginationItem key={totalPages}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(totalPages)
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )
        } else if (currentPage >= totalPages - 2) {
          pages.push(
            <PaginationItem key={1}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(1)
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
          )
          pages.push(
            <PaginationItem key="ellipsis">
              <PaginationEllipsis />
            </PaginationItem>
          )
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={i === currentPage}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(i)
                  }}
                >
                  {i}
                </PaginationLink>
              </PaginationItem>
            )
          }
        } else {
          pages.push(
            <PaginationItem key={1}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(1)
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
          )
          pages.push(
            <PaginationItem key="ellipsis-start">
              <PaginationEllipsis />
            </PaginationItem>
          )
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={i === currentPage}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(i)
                  }}
                >
                  {i}
                </PaginationLink>
              </PaginationItem>
            )
          }
          pages.push(
            <PaginationItem key="ellipsis-end">
              <PaginationEllipsis />
            </PaginationItem>
          )
          pages.push(
            <PaginationItem key={totalPages}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(totalPages)
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )
        }
      }

      return pages
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1)
                }
              }}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1)
                }
              }}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled pagination component where the current page is managed by React state. The page numbers and ellipsis are dynamically rendered based on the current page.",
      },
    },
  },
}

export const Simple: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: "A minimal pagination component with just previous, current page, and next buttons.",
      },
    },
  },
}
