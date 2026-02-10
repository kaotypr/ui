import type { Meta, StoryObj } from "@storybook/react-vite"
import { User, UserCircle, Robot } from "@phosphor-icons/react"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const meta = {
	title: "UI/Avatar/AvatarFallback",
	component: AvatarFallback,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Rendered when the image fails to load or when no image is provided. Must be used within an Avatar component.

This component is built on top of [Base UI Avatar.Fallback](https://base-ui.com/react/components/avatar).`,
			},
		},
	},
	argTypes: {
		delay: {
			description: "How long to wait before showing the fallback. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		className: {
			description: "Additional CSS class names to apply.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Styling",
			},
			control: { type: "text" },
		},
		children: {
			description: "The fallback content to display (initials, icon, or any React node).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
		render: {
			description:
				"Allows you to replace the component's HTML element with a different tag, or compose it with another component.",
			table: {
				type: {
					summary: "ReactElement | ((props: HTMLProps, state: Avatar.Root.State) => ReactElement)",
				},
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof AvatarFallback>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Avatar>
			<AvatarImage src="/broken-image.jpg" alt="User avatar" />
			<AvatarFallback {...args}>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Default fallback with initials.",
			},
		},
	},
}

export const WithIcon: Story = {
	render: (args) => (
		<Avatar>
			<AvatarImage src="/broken-image.jpg" alt="User avatar" />
			<AvatarFallback {...args}>
				<User className="size-4" />
			</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Fallback using an icon instead of initials.",
			},
		},
	},
}

export const DifferentIcons: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>
					<User className="size-4" />
				</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>
					<UserCircle className="size-4" />
				</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="Robot" />
				<AvatarFallback>
					<Robot className="size-4" />
				</AvatarFallback>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Various icon fallbacks for different avatar contexts.",
			},
		},
	},
}

export const DifferentInitials: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>AB</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>CD</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>EF</AvatarFallback>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Fallbacks with different initials.",
			},
		},
	},
}

export const AllSizesWithFallback: Story = {
	render: () => (
		<div className="flex items-end gap-4">
			<Avatar size="sm">
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>SM</AvatarFallback>
			</Avatar>
			<Avatar size="default">
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>MD</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="/broken-image.jpg" alt="User" />
				<AvatarFallback>LG</AvatarFallback>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Fallback text adjusts based on avatar size.",
			},
		},
	},
}
