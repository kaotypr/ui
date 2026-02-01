import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const meta = {
	title: "UI/Avatar/AvatarImage",
	component: AvatarImage,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `The image to be displayed in the avatar. Must be used within an Avatar component.

This component is built on top of [Base UI Avatar.Image](https://base-ui.com/react/components/avatar).`,
			},
		},
	},
	argTypes: {
		src: {
			description: "The source URL of the avatar image.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		alt: {
			description: "Alternative text for the image for accessibility.",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "undefined" },
				category: "Props",
			},
			control: { type: "text" },
		},
		onLoadingStatusChange: {
			description: "Callback fired when the loading status changes.",
			table: {
				type: { summary: "((status: ImageLoadingStatus) => void)" },
				defaultValue: { summary: "undefined" },
				category: "Event Handlers",
			},
			action: "onLoadingStatusChange",
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
} satisfies Meta<typeof AvatarImage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
		alt: "User avatar",
	},
	render: (args) => (
		<Avatar>
			<AvatarImage {...args} />
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "Default avatar image loaded from a URL.",
			},
		},
	},
}

export const DifferentImages: Story = {
	render: () => (
		<div className="flex items-center gap-4">
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
			<Avatar>
				<AvatarImage
					src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=128&h=128&dpr=2&q=80"
					alt="User 3"
				/>
				<AvatarFallback>U3</AvatarFallback>
			</Avatar>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Multiple avatars with different images.",
			},
		},
	},
}

export const BrokenImage: Story = {
	args: {
		src: "/broken-image.jpg",
		alt: "Broken image",
	},
	render: (args) => (
		<Avatar>
			<AvatarImage {...args} />
			<AvatarFallback>BR</AvatarFallback>
		</Avatar>
	),
	parameters: {
		docs: {
			description: {
				story: "When the image fails to load, the fallback content is displayed.",
			},
		},
	},
}
