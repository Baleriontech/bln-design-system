import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './src/index';
import { BUTTON_VARIANTS } from './src/Button.constants';

const description = `
Buttons are used to trigger actions.

### Installation

\`\`\`bash
npm install @bln-design-system/button
\`\`\`
`

const meta = {
  component: Button,
  title: 'Action/Button',
  tags: ['mock'],
  args: {
    children: 'Button',
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
      description: {
        component: description,
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

export const Outlined: Story = {
  args: {
    children: 'Outlined 🫥',
    variant: 'outlined',
  }
};

export const Glass: Story = {
  args: {
    children: 'Liquid Glass 💧',
    variant: 'glass',
  },
  decorators: [
    (Story) => (
      <div
        className="
          w-120
          h-40
          flex items-center justify-center
          bg-[url(asset/glass_bg.jpg)]
          bg-cover
        "
      >
        <Story />
      </div>
    ),
  ],
};