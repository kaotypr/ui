import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "~/components/ui/avatar"

const meta = {
  title: "UI/Avatar/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A container for grouping multiple avatars with overlap styling. Useful for displaying team members or participants.`,
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
      description: "Avatar components to display in the group.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Props",
      },
      control: false,
    },
  },
} satisfies Meta<typeof AvatarGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
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
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default avatar group with overlapping avatars.",
      },
    },
  },
}

export const WithCount: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
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
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar group with a count indicator showing additional members.",
      },
    },
  },
}

export const SmallGroup: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
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
      <Avatar size="sm">
        <AvatarImage
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=128&h=128&dpr=2&q=80"
          alt="User 3"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+12</AvatarGroupCount>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar group with small avatars.",
      },
    },
  },
}

export const LargeGroup: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
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
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=128&h=128&dpr=2&q=80"
          alt="User 3"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar group with large avatars.",
      },
    },
  },
}

export const ManyAvatars: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
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
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?&w=128&h=128&dpr=2&q=80"
          alt="User 4"
        />
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&dpr=2&q=80"
          alt="User 5"
        />
        <AvatarFallback>U5</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar group displaying many members.",
      },
    },
  },
}

export const WithFallbacks: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User 1" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User 2" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User 3" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+8</AvatarGroupCount>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar group with fallback initials displayed.",
      },
    },
  },
}
