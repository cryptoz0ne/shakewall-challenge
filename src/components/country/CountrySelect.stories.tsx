import { Meta, StoryFn } from "@storybook/react";

import CountrySelect, { CountrySelectProps } from "./CountrySelect";

// Settings
export default {
  title: "Input/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<CountrySelectProps> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
