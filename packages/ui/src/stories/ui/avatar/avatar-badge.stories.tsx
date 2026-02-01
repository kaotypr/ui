import type { Meta, StoryObj } from "@storybook/react-vite"
import { Check, X, Bell } from "@phosphor-icons/react"

import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "~/components/ui/avatar"

const meta = {
	title: "UI/Avatar/AvatarBadge",
	component: AvatarBadge,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `A badge indicator positioned on the avatar to show status or notifications. Must be used within an Avatar component.`,
			},
		},
	},
	argTypes: {
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
			description: "Optional content to display inside the badge (typically a small icon).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: false,
		},
	},
} satisfies Meta<typeof AvatarBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Avatar>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge {...args} />
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Default badge indicator without content.",
			},
		},
	},
}

export const WithCheckIcon: Story = {
	render: (args) => (
		<Avatar size="lg">
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge {...args}>
				<Check weight="bold" />
			</AvatarBadge>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Badge with a check icon, indicating verified or online status.",
			},
		},
	},
}

export const WithCloseIcon: Story = {
	render: (args) => (
		<Avatar size="lg">
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge {...args} className="bg-destructive">
				<X weight="bold" />
			</AvatarBadge>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Badge with a destructive color indicating offline or error.",
			},
		},
	},
}

export const WithNotificationIcon: Story = {
	render: (args) => (
		<Avatar size="lg">
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge {...args} className="bg-amber-500">
				<Bell weight="fill" />
			</AvatarBadge>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Badge with a notification icon.",
			},
		},
	},
}

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-end gap-4">
			<Avatar size="sm">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User avatar"
				/>
				<AvatarFallback>SM</AvatarFallback>
				<AvatarBadge />
			</Avatar>
			<Avatar size="default">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User avatar"
				/>
				<AvatarFallback>MD</AvatarFallback>
				<AvatarBadge />
			</Avatar>
			<Avatar size="lg">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User avatar"
				/>
				<AvatarFallback>LG</AvatarFallback>
				<AvatarBadge>
					<Check weight="bold" />
				</AvatarBadge>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Badge scales appropriately with different avatar sizes. Icons are hidden on small size.",
			},
		},
	},
}

export const StatusIndicators: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="Online user"
				/>
				<AvatarFallback>ON</AvatarFallback>
				<AvatarBadge className="bg-green-500" />
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="Away user"
				/>
				<AvatarFallback>AW</AvatarFallback>
				<AvatarBadge className="bg-amber-500" />
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=128&h=128&dpr=2&q=80"
					alt="Busy user"
				/>
				<AvatarFallback>BS</AvatarFallback>
				<AvatarBadge className="bg-destructive" />
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?&w=128&h=128&dpr=2&q=80"
					alt="Offline user"
				/>
				<AvatarFallback>OF</AvatarFallback>
				<AvatarBadge className="bg-muted-foreground" />
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Using different badge colors to indicate user status: online, away, busy, offline.",
			},
		},
	},
}
