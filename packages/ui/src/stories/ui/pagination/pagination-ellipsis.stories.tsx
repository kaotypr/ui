import type { Meta, StoryObj } from "@storybook/react-vite"

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination"

const meta = {
	title: "UI/Pagination/PaginationEllipsis",
	component: PaginationEllipsis,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"Visual indicator for skipped pages in pagination. Must be used within a PaginationItem component.",
					"",
					"This component displays three dots to indicate that there are more pages between the visible page numbers.",
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
	},
} satisfies Meta<typeof PaginationEllipsis>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis {...args} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						5
					</PaginationLink>
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
				story: "Default ellipsis indicator showing skipped pages between page 1 and page 5.",
			},
		},
	},
}

export const MultipleEllipsis: Story = {
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
					<PaginationLink href="#">5</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						6
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">7</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">20</PaginationLink>
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
				story: "Pagination with multiple ellipsis indicators for large page ranges.",
			},
		},
	},
}

export const AtStart: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Ellipsis at the start of pagination, indicating pages before the visible range.",
			},
		},
	},
}

export const AtEnd: Story = {
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Ellipsis at the end of pagination, indicating pages after the visible range.",
			},
		},
	},
}
