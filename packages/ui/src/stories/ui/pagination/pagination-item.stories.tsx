import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination"

const meta = {
	title: "UI/Pagination/PaginationItem",
	component: PaginationItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"Wrapper for individual pagination elements. Must be used within a PaginationContent component.",
					"",
					"This component renders as a `<li>` element and wraps pagination links, buttons, or ellipsis.",
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
			description: "The pagination element to wrap (link, button, or ellipsis).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof PaginationItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Pagination>
			<PaginationContent>
				<PaginationItem {...args}>
					<PaginationLink href="#" isActive>
						1
					</PaginationLink>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Default pagination item wrapping a page link.",
			},
		},
	},
}

export const WithMultipleItems: Story = {
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Multiple pagination items demonstrating different types: previous button, page links, and next button.",
			},
		},
	},
}
