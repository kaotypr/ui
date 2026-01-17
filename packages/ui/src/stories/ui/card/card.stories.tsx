import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { MoreVertical } from "lucide-react"

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible container component for displaying content with header, body, and footer sections.\n\n### Component Parts\n- [CardHeader](?path=/story/ui-card-cardheader--default): Container for the card's header section with title, description, and optional action.\n- [CardTitle](?path=/story/ui-card-cardtitle--default): The main title text of the card.\n- [CardDescription](?path=/story/ui-card-carddescription--default): Secondary descriptive text displayed below the title.\n- [CardAction](?path=/story/ui-card-cardaction--default): Optional action element positioned in the header.\n- [CardContent](?path=/story/ui-card-cardcontent--default): The main content area of the card.\n- [CardFooter](?path=/story/ui-card-cardfooter--default): Footer section for actions or additional information.",
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
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic card with header, title, description, and content.",
      },
    },
  },
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer section.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card with a footer section containing action buttons.",
      },
    },
  },
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button in the header.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Main content area of the card.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card with an action button positioned in the header.",
      },
    },
  },
}

export const Complete: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Complete Card</CardTitle>
        <CardDescription>This is a complete card with all sections.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This is the main content area where you can place any content.</p>
        <p className="mt-2">You can add multiple paragraphs, lists, or other components here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A complete card example with header, action, content, and footer sections.",
      },
    },
  },
}

export const Minimal: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <p>This is a minimal card with only content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A minimal card with only content section.",
      },
    },
  },
}
