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
				component: [
					"A clickable page number link. Must be used within a PaginationItem component.",
					"",
					"This component renders as an anchor tag (`<a>`) and supports active state styling.",
				].join("\n"),
			},
		},
	},
	argTypes: {
		isActive: {
			description: "Whether this link represents the current active page.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Props",
			},
			control: { type: "boolean" },
		},
		size: {
			description: "The size of the button. Inherited from Button component.",
			table: {
				type: { summary: '"default" | "sm" | "lg" | "icon"' },
				defaultValue: { summary: '"icon"' },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon"],
		},
		href: {
			description: "The URL that the link points to.",
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
		children: {
			description: "The content of the link (typically a page number).",
			table: {
				type: { summary: "React.ReactNode" },
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
	args: {
		href: "#",
		children: "1",
	},
	render: (args) => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationLink {...args} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Default pagination link with page number.",
			},
		},
	},
}

export const Active: Story = {
	args: {
		href: "#",
		isActive: true,
		children: "2",
	},
	render: (args) => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink {...args} />
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
				story: "Pagination link in active state, representing the current page.",
			},
		},
	},
}

export const WithDifferentSizes: Story = {
	render: () => (
		<Pagination>
			<PaginationContent className="flex-col gap-4">
				<div className="flex items-center gap-2">
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
				</div>
				<div className="flex items-center gap-2">
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
				</div>
				<div className="flex items-center gap-2">
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
				</div>
				<div className="flex items-center gap-2">
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
				</div>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Pagination links with different size variants: sm, default, lg, and icon.",
			},
		},
	},
}
