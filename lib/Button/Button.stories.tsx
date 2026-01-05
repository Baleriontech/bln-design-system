import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';
import { BUTTON_VARIANTS } from './Button.constants';

const meta = {
  component: Button,
  title: 'Action/Button',
  tags: ['mock'],
  args: {
    children: 'Button',
    className: '',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: "select",
      options: BUTTON_VARIANTS,
      table: {
        type: {
          summary: `'${BUTTON_VARIANTS.join(`' | '`)}'`,
        },
      }
    }
  },
  parameters: {
    docs: {
      toc: {
      },
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary 😈',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary 🫥',
    variant: 'secondary',
  }
};