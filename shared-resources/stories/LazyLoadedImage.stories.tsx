import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import LazyLoadedImage from "../components/LazyLoadedImage/LazyLoadedImage";

const meta = {
  title: "Components/LazyLoadedImage",
  component: LazyLoadedImage,
  tags: ["images"],
} as Meta<typeof LazyLoadedImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSrc: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    placeholder: "https://via.placeholder.com/50",
    alt: "Sample Image",
  },
};

export const WithoutSrc: Story = {
  args: {
    src: "",
    placeholder: "With no src. Broken link",
    alt: "Another Image",
  },
};
