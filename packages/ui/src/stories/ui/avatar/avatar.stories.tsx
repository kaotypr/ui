import type { Meta, StoryObj } from "@storybook/react-vite"
import { User } from "@phosphor-icons/react"

import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "~/components/ui/avatar"

const meta = {
	title: "UI/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `An easily stylable avatar component for displaying user profile pictures, initials, or fallback icons.

This component is built on top of [Base UI Avatar](https://base-ui.com/react/components/avatar).

### Component Parts
- [AvatarImage](?path=/story/ui-avatar-avatarimage--default): The image to be displayed in the avatar.
- [AvatarFallback](?path=/story/ui-avatar-avatarfallback--default): Rendered when the image fails to load or when no image is provided.
- [AvatarBadge](?path=/story/ui-avatar-avatarbadge--default): A badge indicator positioned on the avatar.
- [AvatarGroup](?path=/story/ui-avatar-avatargroup--default): A container for grouping multiple avatars with overlap styling.
- [AvatarGroupCount](?path=/story/ui-avatar-avatargroupcount--default): Displays a count indicator for remaining avatars in a group.`,
			},
		},
	},
	argTypes: {
		size: {
			description: "The size variant of the avatar.",
			table: {
				type: { summary: '"default" | "sm" | "lg"' },
				defaultValue: { summary: "default" },
				category: "Props",
			},
			control: { type: "select" },
			options: ["default", "sm", "lg"],
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
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Default avatar displaying an image with fallback initials.",
			},
		},
	},
}

export const Small: Story = {
	args: {
		size: "sm",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Small size avatar, suitable for compact layouts.",
			},
		},
	},
}

export const Large: Story = {
	args: {
		size: "lg",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Large size avatar for prominent display.",
			},
		},
	},
}

export const WithFallback: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="/broken-image.jpg" alt="User avatar" />
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Avatar with a broken image URL, showing the fallback initials.",
			},
		},
	},
}

export const WithIconFallback: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage src="/broken-image.jpg" alt="User avatar" />
			<AvatarFallback>
				<User className="size-4" />
			</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Avatar with an icon as the fallback content.",
			},
		},
	},
}

export const WithBadge: Story = {
	args: {
		size: "default",
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge />
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Avatar with a status badge indicator.",
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
			</Avatar>
			<Avatar size="default">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User avatar"
				/>
				<AvatarFallback>MD</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage
					src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
					alt="User avatar"
				/>
				<AvatarFallback>LG</AvatarFallback>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Comparison of all available avatar sizes.",
			},
		},
	},
}

export const RenderAsCustomElement: Story = {
	render: () => (
		<Avatar render={<a href="#profile" aria-label="View user profile" className="block" />}>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a ReactElement to replace the default span element. Here the avatar is rendered as a link to the user's profile.",
			},
		},
	},
}

export const RenderWithState: Story = {
	render: () => (
		<Avatar
			render={(props, state) => (
				<div
					{...props}
					className={`${props.className} ${state.imageLoadingStatus === "loaded" ? "ring-2 ring-green-500" : "ring-2 ring-gray-300"}`}
				/>
			)}
		>
			<AvatarImage
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Use the `render` prop with a function to access component state. The function receives `(props, state)` where state includes: `imageLoadingStatus` ('loading' | 'loaded' | 'error') indicating the current status of the avatar image.",
			},
		},
	},
}
