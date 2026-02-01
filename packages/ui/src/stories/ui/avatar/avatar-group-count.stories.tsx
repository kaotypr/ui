import type { Meta, StoryObj } from "@storybook/react-vite"
import { Plus, DotsThree } from "@phosphor-icons/react"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarGroup,
	AvatarGroupCount,
} from "~/components/ui/avatar"

const meta = {
	title: "UI/Avatar/AvatarGroupCount",
	component: AvatarGroupCount,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Displays a count indicator for remaining avatars in a group. Must be used within an AvatarGroup component.`,
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
			description: "The content to display (typically a number like '+5' or an icon).",
			table: {
				type: { summary: "React.ReactNode" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof AvatarGroupCount>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "+5",
	},
	render: (args) => (
		<AvatarGroup>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args} />
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Default count indicator showing remaining members.",
			},
		},
	},
}

export const LargeCount: Story = {
	args: {
		children: "+99",
	},
	render: (args) => (
		<AvatarGroup>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args} />
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Count indicator with a large number.",
			},
		},
	},
}

export const WithPlusIcon: Story = {
	render: (args) => (
		<AvatarGroup>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args}>
				<Plus weight="bold" />
			</AvatarGroupCount>
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Using a plus icon instead of a count, useful for 'add' actions.",
			},
		},
	},
}

export const WithDotsIcon: Story = {
	render: (args) => (
		<AvatarGroup>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args}>
				<DotsThree weight="bold" />
			</AvatarGroupCount>
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Using a dots icon to indicate more members.",
			},
		},
	},
}

export const SmallSize: Story = {
	args: {
		children: "+12",
	},
	render: (args) => (
		<AvatarGroup>
			<Avatar size="sm">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar size="sm">
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args} />
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Count indicator scales with small avatar sizes.",
			},
		},
	},
}

export const LargeSize: Story = {
	args: {
		children: "+3",
	},
	render: (args) => (
		<AvatarGroup>
			<Avatar size="lg">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<AvatarGroupCount {...args} />
		</AvatarGroup>
	),
	parameters: {
		docs: {
			description: {
				story: "Count indicator scales with large avatar sizes.",
			},
		},
	},
}
