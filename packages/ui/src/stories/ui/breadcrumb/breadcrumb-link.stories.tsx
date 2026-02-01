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
	title: "UI/Breadcrumb/BreadcrumbLink",
	component: BreadcrumbLink,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: [
					"A navigable link within a breadcrumb item.",
					"",
					"Uses Base UI's `useRender` hook for flexible rendering. Supports the `render` prop for custom elements like router links.",
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
		render: {
			description:
				"Custom render function or element for the link. Useful for integration with router libraries.",
			table: {
				type: { summary: "React.ReactElement | ((props: any) => React.ReactElement)" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
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
			description: "The content of the link.",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof BreadcrumbLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		href: "#",
		children: "Home",
	},
	render: (args) => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink {...args} />
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
				story: "Default breadcrumb link with text content.",
			},
		},
	},
}

export const WithIcon: Story = {
	args: {
		href: "#",
		className: "flex items-center gap-1",
	},
	render: (args) => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink {...args}>
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
				story: "Breadcrumb link with an icon.",
			},
		},
	},
}

export const CustomRender: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink render={<button type="button" onClick={() => alert("Navigating!")} />}>
						Custom Button
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
				story:
					"Breadcrumb link with custom render element. Useful for integrating with router libraries like React Router or Next.js Link.",
			},
		},
	},
}
