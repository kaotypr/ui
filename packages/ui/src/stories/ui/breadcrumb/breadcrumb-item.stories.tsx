import type { Meta, StoryObj } from "@storybook/react-vite"
import { HouseIcon } from "@phosphor-icons/react"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

const meta = {
	title: "UI/Breadcrumb/BreadcrumbItem",
	component: BreadcrumbItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Represents a single item in the breadcrumb trail. Contains either a BreadcrumbLink or BreadcrumbPage.",
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
				"The content of the breadcrumb item (typically a BreadcrumbLink or BreadcrumbPage).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof BreadcrumbItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem {...args}>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Current</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
	parameters: {
		docs: {
			description: {
				story: "Default breadcrumb item with a link.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem {...args}>
					<BreadcrumbLink href="#" className="flex items-center gap-1">
						<HouseIcon className="size-4" />
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Current</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
	parameters: {
		docs: {
			description: {
				story: "Breadcrumb item with an icon in the link.",
			},
		},
	},
}

export const AsCurrentPage: Story = {
	render: (args) => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem {...args}>
					<BreadcrumbPage>Current Page</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
	parameters: {
		docs: {
			description: {
				story: "Breadcrumb item containing the current page indicator.",
			},
		},
	},
}
