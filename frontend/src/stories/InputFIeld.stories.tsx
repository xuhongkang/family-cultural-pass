import { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const First : Story = {
  args: {
    label: 'Numbers',
    variant: 'primary',
  },
};