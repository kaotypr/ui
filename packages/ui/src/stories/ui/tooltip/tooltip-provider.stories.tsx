import type { Meta, StoryObj } from "@storybook/react-vite"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"
import { InfoIcon, GearIcon, UserIcon } from "@phosphor-icons/react"

const meta = {
	title: "UI/Tooltip/TooltipProvider",
	component: TooltipProvider,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `Provides a shared delay for multiple tooltips. The grouping logic ensures that once a tooltip becomes visible, the adjacent tooltips will be shown instantly.

Must be used as a parent component to provide delay configuration for child Tooltip components.`,
			},
		},
	},
	argTypes: {
		// Base UI Props
		delay: {
			description:
				"How long to wait before opening a tooltip. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		closeDelay: {
			description:
				"How long to wait before closing a tooltip. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "undefined" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
		timeout: {
			description:
				"Another tooltip will open instantly if the previous tooltip is closed within this timeout. Specified in milliseconds.",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "400" },
				category: "Base UI Props",
			},
			control: { type: "number" },
		},
	},
} satisfies Meta<typeof TooltipProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<TooltipProvider {...args}>
			<div className="flex gap-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<InfoIcon />
							Info
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Information tooltip</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<GearIcon />
							Settings
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Settings tooltip</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<UserIcon />
							Profile
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Profile tooltip</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Default TooltipProvider wrapping multiple tooltips. Once a tooltip becomes visible, adjacent tooltips will show instantly.",
			},
		},
	},
}

export const WithCustomDelay: Story = {
	render: (args) => (
		<TooltipProvider {...args} delay={500}>
			<div className="flex gap-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<InfoIcon />
							Info
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Information tooltip (500ms delay)</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<GearIcon />
							Settings
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Settings tooltip (instant after first)</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"TooltipProvider with a custom delay of 500ms. The first tooltip will wait 500ms before appearing, but subsequent tooltips will appear instantly.",
			},
		},
	},
}

export const WithCloseDelay: Story = {
	render: (args) => (
		<TooltipProvider {...args} delay={300} closeDelay={200}>
			<div className="flex gap-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<InfoIcon />
							Info
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Tooltip with close delay</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">
							<GearIcon />
							Settings
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Another tooltip</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					"TooltipProvider with both open delay (300ms) and close delay (200ms). The tooltip will wait 200ms before closing when the mouse leaves.",
			},
		},
	},
}
