import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Footer from "../components/Footer/Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["footer"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterComponent: Story = {
  args: {
    children: <p>Made by Mica</p>,
  },
};
