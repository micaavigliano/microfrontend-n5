import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/Header/Header.tsx";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["header"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
  args: {
    children: <h1>Your Header Content as a component</h1>,
  },
};
