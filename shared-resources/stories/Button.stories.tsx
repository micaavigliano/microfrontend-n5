import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["button"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  args: {
    title: "test button",
  },
};

export const ButtonDisabled: Story = {
  args: {
    title: "disabled",
    disabled: true,
  },
};
