import type { Meta, StoryObj } from "@storybook/react";

import Logo from "@/components/AuthForm/Logo";

const meta = {
  title: "Auth/Logo",
  component: Logo,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
