import { Meta, StoryFn } from "@storybook/react";

import LanguageSelect, { LanguageSelectProps } from "./LanguageSelect";

// Settings
export default {
  title: "Input/LanguageSelect",
  component: LanguageSelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<LanguageSelectProps> = (args) => <LanguageSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
