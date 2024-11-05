import React from 'react';
import Button, { IButton } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Title,
  Description,
  Subtitle,
  Story,
  Canvas,
  Controls,
} from '@storybook/blocks';

const meta: Meta<IButton> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: false },
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />
          <Canvas />
          <Controls />
        </>
      ),
    },
  },
  // argTypes: {
  //     variant: {
  //         options: ['black', 'white', 'blue-900', 'grey-900', 'outline-grey-900'],
  //         control: { type: 'select' },
  //     },
  //     type: {
  //         options: ['submit', 'button', 'reset'],
  //         control: { type: 'select' },
  //     }
  // },
};

type Story = StoryObj<IButton>;

/**
 * Exporting basic button story
 */
export const Basic: Story = {
  args: {
    type: 'button',
    children: 'Click Me',
    variant: 'btnPrimary',
    onClick: () => {
      alert('kbk');
    },
  },
};

export default meta;
