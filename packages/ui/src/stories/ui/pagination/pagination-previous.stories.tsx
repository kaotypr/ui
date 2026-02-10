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
	title: "UI/Pagination/PaginationPrevious",
	component: PaginationPrevious,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"Button to navigate to the previous page. Must be used within a PaginationItem component.",
					"",
					"This component includes a left caret icon and 'Previous' text that is hidden on small screens.",
				].join("\n"),
			},
		},
	},
	argTypes: {
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
			description: "The content of the button (typically not used as it has default content).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof PaginationPrevious>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		href: "#",
	},
	render: (args) => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious {...args} />
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Default previous button with icon and text label.",
			},
		},
	},
}

export const Disabled: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						aria-disabled="true"
						className="pointer-events-none opacity-50"
					/>
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
	parameters: {
		docs: {
			description: {
				story: "Previous button in disabled state, typically used on the first page.",
			},
		},
	},
}

export const WithClickHandler: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={(e) => {
							e.preventDefault()
							alert("Navigate to previous page")
						}}
					/>
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
				story: "Previous button with custom click handler for programmatic navigation.",
			},
		},
	},
}
