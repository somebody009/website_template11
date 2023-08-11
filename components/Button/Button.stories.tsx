import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    variant: "default",

    children: "Button",
    size: "lg",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "destructive"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg", "default", "md"],
      control: { type: "select" },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export default meta;
